// A self-executing anonymous async function is used here to wrap the logic
// and avoid polluting the global scope.
(async function fetchAndDisplayPosts() {
  // Define the base URL for the API.
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const url = `${baseUrl}/posts`;

  try {
    // Log a message to the console to indicate that the fetch operation is starting.
    console.log('Fetching posts...');

    // Use await to wait for the fetch() promise to resolve.
    const response = await fetch(url);

    // Check if the response was successful (status code 200-299).
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Use await to wait for the JSON data to be parsed.
    const data = await response.json();

    // Log the fetched data for debugging purposes.
    console.log(data);

    // Call the function to display the posts on the page.
    displayPosts(data);

  } catch (error) {
    // Handle any errors that occurred during the fetch operation.
    console.error('There was a problem with the fetch operation:', error);
  }
})(); // The function is immediately invoked.

// Function to display posts on the page
function displayPosts(posts) {
  const postList = document.getElementById('post-list');

  // Ensure the target element exists in the DOM.
  if (!postList) {
    console.error('Target element with ID "post-list" not found.');
    return;
  }

  // Clear any existing list items to prevent duplication.
  postList.innerHTML = '';

  // Loop through the posts and create HTML elements for each.
  posts.forEach(post => {
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = post.title;
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });

  console.log('Posts displayed.');
}



