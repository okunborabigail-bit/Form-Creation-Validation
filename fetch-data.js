// Step 1: Initialize the async function
async function fetchUserData() {
    // Step 2: API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    // Step 3: Select the HTML container
    const dataContainer = document.getElementById('api-data');
    try {
        // Step 4: Fetch data
        const response = await fetch(apiUrl);
        const users = await response.json();
        // Step 5: Clear loading text
        dataContainer.innerHTML = '';
        // Step 6: Create and append list
        const userList = document.createElement('ul');
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });
        dataContainer.appendChild(userList);
    } catch (error) {
        // Step 7: Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}
// Step 8: Run function after page loads
document.addEventListener('DOMContentLoaded', fetchUserData);

