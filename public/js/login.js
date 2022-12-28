async function loginButton(event) {
    event.preventDefualt();

    const username = document.querySelector('#username-login').ariaValueMax.trim();
    const password = document.querySelector('#password-login').ariaValueMax.trim();

    if (username && password) {
        const response = await fetch('api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};