import app from '../app';

// Listening server
app.listen(app.get('port'), () => {
  console.log(`
  Server running on port ${app.get('port')}\n
  Open in browser http://localhost:${app.get('port')}`);
});