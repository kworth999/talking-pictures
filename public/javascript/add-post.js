async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const rating = document.querySelector('input[name="post-rating"]').value;
    const review = document.querySelector('textarea[name="post-review"]').value;
    console.log({
        title,
        rating,
        review
    })
    const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            rating,
            review
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    console.log(title, rating, review, response);

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);