document.getElementById("registerBtn").addEventListener('click', (e) => {
    e.preventDefault();

    const user_name = document.getElementById('username').value;
    const user_email = document.getElementById('email').value;
    const user_password = document.getElementById('password').value;
    const user_confirm_password = document.getElementById('confirmPassword').value;
    
    if (user_name === "" || user_email === "" || user_password === "" || user_confirm_password === "") {
        alert("All fields are required");
    } else if (user_password !== user_confirm_password) {
        alert("Passwords do not match");
    } else {
        const users = {
            name: user_name,
            email: user_email,
            password: user_password,
            confirmPassword: user_confirm_password
        };
        
        const url = `http://localhost:8081/api/users`;
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = () => {
            if (xhr.status === 200 && xhr.readyState === 4) {
                const res = JSON.parse(xhr.responseText);
                console.log(res);
            }
        };
        
        xhr.send(JSON.stringify(users));
        window.location.href = "http://localhost:5500/login.html";
    }
});
