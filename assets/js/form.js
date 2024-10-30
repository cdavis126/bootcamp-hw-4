// TODO: Create a variable that selects the form element (validateForm)
// collect all the info + event listener
// TODO: Create a variable that selects the form element (validateForm)
// collect all the info + event listener
// TODO: Create a variable that selects the form element (validateForm)
// collect all the info + event listener
console.log("JavaScript file loaded successfully.");
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('blogSubmission').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve values
        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        // Check if fields are filled
        if (!username || !title || !content) {
            document.getElementById('error').textContent = "Please complete the form.";
            document.getElementById('error').style.display = "block"; 
            return; 
        }

        // Create blog post object
        const blogPost = { username, title, content };

        // Retrieve existing posts or initialize an empty array
        const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push(blogPost); // Add the new blog post
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts)); 

        // Redirect to the blog page
        window.location.href = "blog.html"; // Simple redirect
    });
});