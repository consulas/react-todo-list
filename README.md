# Express.js + React Todo App

A simple, barebones Todo application built with Express.js for the backend API and React for the frontend, bundled with Webpack and using Nodemon for development.

<img width="780" alt="image" src="https://github.com/user-attachments/assets/aecfb7ce-d843-47de-bc1a-9b448d8f66d5" />

## Project Structure

```
todo-app/
├── client/               # Frontend React code
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── styles/       # CSS styles
│   │   └── index.js      # Entry point
│   └── public/
│       └── index.html    # HTML template
├── server/               # Backend Express code
│   ├── routes/           # API routes
│   └── server.js         # Express server
├── scripts/              # Helper scripts
├── package.json          # Dependencies and scripts
├── webpack.config.js     # Webpack configuration
└── nodemon.json          # Nodemon configuration
```

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development Workflow

This application uses two separate servers during development:
- Express server on port 3333 (API backend)
- Webpack dev server on port 3000 (React frontend with hot reloading)

### Starting Development Environment

```bash
npm run dev
```

This command starts both servers concurrently:
- Backend Express server with Nodemon (auto-restart on changes)
- Frontend Webpack dev server with hot reloading

### Accessing the Application

- Frontend: http://localhost:3000
- API Endpoints: http://localhost:3333/api/todos

## Building for Production

1. Build the React frontend:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

3. Access the application at:
   ```
   http://localhost:3333
   ```

## Available Scripts

- `npm start` - Start the production server
- `npm run server` - Start the Express server with Nodemon (auto-restart)
- `npm run client` - Start the Webpack development server
- `npm run dev` - Run both servers concurrently (for development)
- `npm run build` - Build the React app for production

## API Endpoints

| Method | Endpoint        | Description         |
|--------|-----------------|---------------------|
| GET    | /api/todos      | Get all todos       |
| POST   | /api/todos      | Create a new todo   |
| PUT    | /api/todos/:id  | Update a todo       |
| DELETE | /api/todos/:id  | Delete a todo       |

## Troubleshooting

### Common Issues

1. **Pages not loading**: Make sure both servers are running (Express on 3333, Webpack on 3000)

2. **API not working**: Check if you're accessing the API through the correct port

3. **Changes not reflecting**: Make sure you're running the development servers with `npm run dev`

4. **Port conflicts**: If ports 3000 or 3333 are already in use, modify them in:
   - server.js (for Express port)
   - webpack.config.js (for Webpack dev server port)

### Port Configuration

- **Development mode**: Access frontend on port 3000, backend is proxied through this port
- **Production mode**: Everything is served from port 3333

## License

MIT
