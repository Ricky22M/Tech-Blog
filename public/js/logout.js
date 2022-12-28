async function logoutButton() {
    const feedback = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'appliction/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logoutButton)