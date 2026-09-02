// =========================
// BlogHub JavaScript
// =========================

// Login Form
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if (email && password) {

            alert("Login successful!");

            window.location.href = "dashboard.html";

        }

    });

}


// =========================
// Register Form
// =========================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;


        if (password !== confirmPassword) {

            alert("Passwords do not match!");

            return;

        }


        if (name && email && password) {

            alert("Registration successful!");

            window.location.href = "login.html";

        }

    });

}


// =========================
// Create Blog Form
// =========================

const blogForm = document.getElementById("blogForm");

if (blogForm) {

    blogForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const title = document.getElementById("blogTitle").value;
        const category = document.getElementById("blogCategory").value;
        const content = document.getElementById("blogContent").value;


        if (title && category && content) {

            alert("Blog published successfully!");

            window.location.href = "dashboard.html";

        }

    });

}