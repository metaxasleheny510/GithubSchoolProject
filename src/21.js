// Add this line to add GitHub API access token to the URL query string
const url = 'https://api.github.com/graphql';

// Define your custom GraphQL query and variable values here (replace placeholders with actual data)
// For example:
// const variables = {
//   repo: 'github-school-project',
//   query: `mutation {
//     repository(owner: "github", name: "github-school-project") { title, description }
//   }`
// };

// Make a POST request to the GraphQL API with your custom query and variable values
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    variables: {
      repo: 'github-school-project',
      query: `mutation {
        repository(owner: "github", name: "github-school-project") { title, description }
      }`
    }
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('There was an error with your request:', error));
