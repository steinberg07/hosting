document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
      document.getElementById('form-message').innerHTML = `<p style="color: #1DFF70;">Thank you, ${name}! We have received your message and will get back to you shortly.</p>`;
      document.getElementById('contact-form').reset(); // Reset the form fields
  } else {
      document.getElementById('form-message').innerHTML = `<p style="color: red;">Please fill in all fields.</p>`;
  }
});
