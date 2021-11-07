async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const review = document.querySelector('textarea[name="post-review"]').value;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length-1
    ];
  
    const response = await fetch(`/api/review/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        review
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);