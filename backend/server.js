const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mock user database (in production, this would be a real database)
const users = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    password: 'admin123', // In production, this would be hashed
    role: 'admin'
  },
  {
    id: 2,
    username: 'user',
    email: 'user@example.com',
    password: 'user123',
    role: 'user'
  }
];

// Auth routes with /api prefix
app.post('/api/auth/', (req, res) => {
  const { username, email, password } = req.body;
  
  // Check if user already exists
  const userExists = users.find(u => u.username === username || u.email === email);
  if (userExists) {
    return res.status(400).json({ detail: 'Username or email already exists' });
  }

  // Create new user
  const newUser = {
    id: users.length + 1,
    username,
    email,
    password, // In production, this would be hashed
    role: 'user'
  };
  users.push(newUser);

  res.json({ message: 'Signup successful' });
});

app.post('/api/auth/token', upload.none(), (req, res) => {
  const { username, password } = req.body;
  
  // Basic validation
  if (!username || !password) {
    return res.status(400).json({ detail: 'Username and password required' });
  }

  // Find user by username or email
  const user = users.find(u => 
    (u.username === username || u.email === username) && u.password === password
  );

  if (!user) {
    return res.status(401).json({ detail: 'Invalid credentials' });
  }

  // Generate mock token including user info
  const token = Buffer.from(JSON.stringify({
    id: user.id,
    username: user.username,
    role: user.role,
    exp: Date.now() + (20 * 60 * 1000) // 20 minutes expiration
  })).toString('base64');

  res.json({ 
    access_token: token,
    token_type: 'bearer'
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
