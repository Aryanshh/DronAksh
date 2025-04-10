// After successful login in auth.js
const urlParams = new URLSearchParams(window.location.search);
const redirect = urlParams.get('redirect') || 'index.html';
window.location.href = redirect;

// Add to auth.js - Route protection
const protectedRoutes = ['concert.html'];

if (protectedRoutes.some(route => window.location.pathname.includes(route))) {
    if (!checkAuth()) {
        window.location.href = `login.html?redirect=${encodeURIComponent(window.location.pathname)}`;
    } else {
        // Show username in navbar
        document.getElementById('usernameDisplay').textContent = 
            localStorage.getItem('dronakshUser');
    }
}