const api = "https://api.github.com"

export const getRepos = (language) =>
  fetch(`${api}/search/repositories?q=language:${language}`)
      .then(res => res.json())
      .then(data => data.items)
      .catch(function(e) {
        console.log(e);
      })

export const getUser = (username) =>
  fetch(`${api}/users/${username}`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(function(e) {
        console.log(e);
      })
