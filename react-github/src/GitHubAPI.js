const repos = "https://https://api.github.com/search/repositories?q=language:"

export const getRepos = (language) =>
  fetch(`${repos}${language}`)
      .then(res => res.json())
      .then(data => data.repos)
