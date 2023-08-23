document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector(".login-box form");
    const loginUsername = document.getElementById('login_username');
    const loginPassword = document.getElementById('login_password');
    
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const login_Username = loginUsername.value;
        const user_password = loginPassword.value;

        try {
            const response = await fetch(`http://localhost:8081/api/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    loginUsername:login_Username,
                    password: user_password
                })
            });

            if (response.status === 200) {
                const userData = await response.json();
                // Check if userData is authenticated or has an error message
                if (userData.authenticated) {
                    window.location.href = "http://localhost:5500/stoc/portfolio.html";
                } else {
                    // Display an error message to the user
                    alert("Invalid credentials. Please try again.");
                }
            } else {
                // Display a general error message to the user
                alert("An error occurred. Please try again later.");
            }
        } catch (error) {
            console.log('Request error:', error);
            // Display a general error message to the user
            alert("An error occurred. Please try again later.");
        }
    });
});
