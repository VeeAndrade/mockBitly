export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
    .then(response => response.json())
}

export const postUrl = (url) => {
  const long_url = url.urlToShorten
  const title= url.title
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      long_url: long_url,
      title: title
    })
  }
  return fetch('http://localhost:3001/api/v1/urls', options)
    .then(response => response.json())
}
