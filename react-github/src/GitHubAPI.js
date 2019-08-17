const repos = "https://api.github.com/search/repositories?q=language:"

export const getRepos = (language) =>
  fetch(`${repos}${language}`)
      .catch(function(e) {
        console.log(e);
      })
      .then(res => res.json())
      .then(data => data.repos)
