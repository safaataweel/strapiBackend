const path = require('path');
const express = require('express');
const app = express();

// Import the API routes
const apiRoutes = require('./api/document/routes/api'); // Adjust the path as necessary

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle API routes
app.use('/api', apiRoutes);

// Catch-all to serve the React app for unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Bootstrap function in Strapi

'use strict';

module.exports = {
  bootstrap({ strapi }) {
    const { Server } = require('socket.io');

    const io = new Server(strapi.server.httpServer, {
      cors: {
        origin: process.env.FRONTEND_URL || 'http://localhost:5173',
        methods: ['GET', 'POST'],
        allowedHeaders: ['my-custom-header'],
        credentials: true,
      },
    });

    io.on('connection', (socket) => {
      console.log('a user connected', socket.id);

      socket.on('documentUpdated', (data) => {
        console.log('Document updated:', data);

        io.emit('documentUpdate', data);
      });

      socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
      });
    });

    strapi.io = io;
  },
};
