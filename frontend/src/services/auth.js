import api from './api';

const AUTH_TOKEN_KEY = 'auth_token';

// Add request interceptor to include token
api.interceptors.request.use(
    (config) => {
        const token = AuthService.getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const AuthService = {
    async signup(username, email, password) {
        try {
            const response = await api.post('/api/auth/', {
                username,
                email,
                password,
                role: "user"
            });
            return response.data;
        } catch (error) {
            const message = error.response?.data?.detail || 'Registration failed';
            throw new Error(message);
        }
    },

    async login(usernameOrEmail, password) {
        try {
            const formData = new FormData();
            formData.append('username', usernameOrEmail); // Can be either username or email
            formData.append('password', password);
            
            const response = await api.post('/api/auth/token', formData);
            
            if (response.data.access_token) {
                localStorage.setItem(AUTH_TOKEN_KEY, response.data.access_token);
                return response.data;
            }
            throw new Error('No token received');
        } catch (error) {
            const message = error.response?.data?.detail || 'Login failed';
            throw new Error(message);
        }
    },

    logout() {
        localStorage.removeItem(AUTH_TOKEN_KEY);
    },

    getToken() {
        return localStorage.getItem(AUTH_TOKEN_KEY);
    },

    isAuthenticated() {
        return !!this.getToken();
    }
};

export default AuthService;