const api = "https://api.github.com"

export const getRepos = (language) =>
  fetch(`${api}/search/repositories?q=language:${language}`)
      .catch(function(e) {
        console.log(e);
      })
      .then(res => res.json())
      .then(data => data.repos)

export const getUser = (username) =>
  fetch(`${api}/users/${username}`)
      .catch(function(e) {
        console.log(e);
      })
      .then(res => res.json())
      .then(data => data.user)
