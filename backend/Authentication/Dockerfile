#python image
FROM python:3.10.8-slim

#setting environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

#setting the working directory
WORKDIR /app

#installing system dependencies
RUN apt-get update && apt-get install -y build-essential libpq-dev

#installing python dependencies
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

#copying code
COPY . .

#exposing fastapi port - changed to 5000
EXPOSE 5000

#running the application on port 5000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5000"]
