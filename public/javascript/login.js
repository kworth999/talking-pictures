async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.getElementById('username-login').value.trim();
  const password = document.getElementById('password-login').value.trim();
  console.log(username, password);

  if (username && password) {
    
    const response = await fetch('/api/user/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    console.log(response);


    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.getElementById('login-form').addEventListener('submit', loginFormHandler);