// =========================
// BlogHub JavaScript
// =========================





// =========================
// Login Protection
// =========================

const loggedInUser = localStorage.getItem("loggedInUser");

if (
    !loggedInUser &&
    window.location.pathname.includes("dashboard.html")
) {
    window.location.href = "login.html";
}
// =========================
// Dashboard - Fetch Blogs
// =========================

const blogsContainer = document.getElementById("blogsContainer");

if (blogsContainer) {

    fetch("http://localhost:5000/api/blogs")

        .then(response => {

            if (!response.ok) {
                throw new Error("Failed to fetch blogs");
            }

            return response.json();
        })

        .then(data => {

            blogsContainer.innerHTML = "";

            if (!data.blogs || data.blogs.length === 0) {

                blogsContainer.innerHTML = `
                    <p>No blogs available yet.</p>
                `;

                return;
            }


            data.blogs.forEach(blog => {

                const blogCard = document.createElement("div");

                blogCard.className = "blog-card";

                blogCard.innerHTML = `

                    <h3>${blog.title}</h3>

                    <p>
                        <strong>Category:</strong>
                        ${blog.category}
                    </p>

                    <p>
                        <strong>Author:</strong>
                        ${blog.author}
                    </p>

                    <p>
                        ${blog.content}
                    </p>

                    <button
                        class="auth-button"
                        onclick="viewBlog('${blog._id}')">
                        Read More
                    </button>

                `;

                blogsContainer.appendChild(blogCard);

            });

        })

        .catch(error => {

            console.error("Error fetching blogs:", error);

            blogsContainer.innerHTML = `
                <p>
                    Unable to load blogs. Please make sure the backend server is running.
                </p>
            `;

        });

}


// =========================
// Welcome User
// =========================

if (loggedInUser) {

    const user = JSON.parse(loggedInUser);

    const welcomeMessage = document.getElementById("welcomeMessage");

    if (welcomeMessage) {

        welcomeMessage.textContent =
            `Welcome, ${user.name} 👋`;

    }

}


// =========================
// View Single Blog
// =========================

function viewBlog(id) {

    window.location.href = `blog-details.html?id=${id}`;

}


// =========================
// Logout
// =========================

const logoutLink = document.getElementById("logoutLink");

if (logoutLink) {

    logoutLink.addEventListener("click", function(event) {

        event.preventDefault();

        localStorage.removeItem("loggedInUser");

        window.location.href = "login.html";

    });

}