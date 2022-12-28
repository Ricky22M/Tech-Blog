const { response } = require("express");

async function loginButton(event) {
    event.preventDefualt();

    const username = document.querySelector('#username-login').ariaValueMax.trim();
    const password = document.querySelector('#password-login').ariaValueMax.trim();

    if (username && password) {
        const feedback = await fetch('api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (feedback.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};