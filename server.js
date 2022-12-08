const app = require('./app');

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 

server.on('error', (error) => {
  console.log('Server error:', error);
});