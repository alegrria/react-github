const api = "https://api.github.com/"

export const getUsers = () =>
  fetch(`${api}/users`)
      .then(res => res.json())
      .then(data => data.books)
