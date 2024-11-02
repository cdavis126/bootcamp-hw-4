// ! Use the following function whenever you need to redirect to a different page
///redirecting from index to blog page
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function toggleTheme() {
  const currentMode = document.body.classList.contains('dark') ? 'dark' : 'light';

  if (currentMode === 'dark') {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    localStorage.setItem('theme', 'light'); 
} else {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark'); 
}}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light'; // Default to 'light'
  document.body.classList.add(savedTheme);
}

document.getElementById('toggle').addEventListener('click', toggleTheme);
document.addEventListener('DOMContentLoaded', loadTheme);

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
///form submission info
function readLocalStorage() {
  const storedData = localStorage.getItem('blogPosts');

if (storedData) {
  return JSON.parse(storedData);

} else {
  return [];
}
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
////form submission info
function storeLocalStorage(newPost) {
  const blogPosts = readLocalStorage();
  blogPosts.push(newPost);

  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
}



