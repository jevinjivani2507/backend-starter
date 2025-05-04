# Backend Starter Project

A modern, scalable backend starter template built with Node.js, Express, and TypeScript. This project provides a solid foundation for building robust backend services with authentication, Google OAuth, and database integration.

## Features

- **TypeScript** - Strongly typed codebase for enhanced developer experience
- **Express.js** - Fast, unopinionated web framework
- **Authentication** - JWT-based authentication system
- **Google OAuth** - Sign in with Google functionality
- **Database Integration** - MongoDB/Mongoose setup
- **Environment Configuration** - Secure environment variable management
- **Error Handling** - Centralized error handling system
- **API Documentation** - Available in the `/docs` directory

## Prerequisites

- [Bun](https://bun.sh/) (Latest version)
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/backend-starter.git
   cd backend-starter
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Then edit the `.env` file with your configuration values.

## Usage

### Development

```bash
bun run dev
```

### Production Build

```bash
bun run build
```

### Start Production Server

```bash
bun start
```

## API Documentation

API documentation can be found in the `/docs` directory. Explore the available endpoints and their usage details.

## Project Structure

```
backend-starter/
├── src/
│   ├── config/       # Configuration files
│   ├── controllers/  # Route controllers
│   ├── middleware/   # Express middleware
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   ├── services/     # Business logic
│   ├── utils/        # Utility functions
│   ├── app.ts        # Express application setup
│   └── server.ts     # Server entry point
├── .env.example      # Example environment variables
├── .gitignore        # Git ignore rules
├── package.json      # Project dependencies and scripts
├── tsconfig.json     # TypeScript configuration
└── README.md         # Project documentation
```

## Environment Variables

The following environment variables should be configured in your `.env` file:

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
