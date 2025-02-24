import express from 'express';
import mailer from './mailer.js';

const app = express();

// Define a route that triggers the email sending
app.get('/send-email', (req, res) => {
  // Call the mailer function to send the email
  mailer.sendEmail();

  res.send('Email sent!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});