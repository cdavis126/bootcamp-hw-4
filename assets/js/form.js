// TODO: Create a variable that selects the form element (validateForm)
// collect all the info + event listener
document.getElementById('blogSubmission').addEventListener('submit', function(event) {
event.preventDefault();
if (validateForm()){
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const blogPost = {
        username: username,
        title: title,
        content: content,
    };

const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
blogPosts.push(blogPost);
localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

////redirect efforts ---> look at logic.js page
redirectPage("blog.html")
///let redirectURL = './blog.html'
///console.log (redirectURL)
//window.location.href = redirectURL;
///}
}});


function validateForm() {
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const errorElement = document.getElementById('error');

    errorElement.textContent ="";

    if (isEmpty(username) || isEmpty(title) || isEmpty(content))
            errorElement.textContent = "Please complete the form."
            errorElement.style.display ="block";
            return false;
}

function isEmpty(value) {
    return !value;
}



