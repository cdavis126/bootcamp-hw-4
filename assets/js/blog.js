// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector('main');
const backButton = document.getElementById('back');

// TODO: Create a function that builds an element and appends it to the DOM
function addArticle(username, title, content) {
    const article = document.createElement('article');
    article.classList.add('card');

    const articleTitle = document.createElement('h2');
    articleTitle.textContent = title;
    
    const articleContent = document.createElement('blockquote');
    articleContent.textContent = content;

    const articleUsername = document.createElement('p');
    articleUsername.textContent = `Posted by: ${username}`;

    article.appendChild(articleTitle);
    article.appendChild(articleContent);
    article.appendChild(articleUsername);

    mainElement.appendChild(article);
}

// TODO: Create a function that handles the case where there are no blog posts to display
function displayNoPostsMessage() {
    mainElement.innerHTML = '';

    const noPostsMessage = document.createElement('p');
    noPostsMessage.textContent = 'No blog posts available at this time.';
    noPostsMessage.style.textAlign = 'center';

    mainElement.appendChild(noPostsMessage);
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList(blogPosts) {
    if (blogPosts.length === 0) {
        displayNoPostsMessage();
    } else {
        mainElement.innerHTML = ''; 
        console.log('blogPosts', blogPosts)
        blogPosts.forEach(post => {
            addArticle(post.username, post.title, post.content);
        });
    }
}
// TODO: Call the `renderBlogList` function
///function renderBlogList(blogPosts) {
//     if (blogPosts.length === 0) {
//         displayNoPostsMessage();
//     } else {
//         mainElement.innerHTML = ''; 
//         blogPosts.forEach(post => {
//             addArticle(post.title, post.content); // Use post.content instead of summary
//         });
//     }
// }
document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = readLocalStorage()
    renderBlogList(blogPosts);
});

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener("click" , ()=>{
    redirectPage("index.html")
})