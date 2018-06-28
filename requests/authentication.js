const baseURL = require('./railsAPI').baseURL()

const fetchToken = (method, email, password) => {
  return fetch(`${baseURL}/api/v1/authenticate?email=${email}&password=${password}`, {
    method: `${method}`,
    headers: {'Accept': 'application/json', 'credentials': 'same-origin'}
  })
}

const getToken = (email, password) => {
  fetchToken('POST', email, password)
  .then(response => {
    handleResponse(response)
  })
  .then(token => handleToken(token))
  .catch(error => console.error({ error }))
}

const handleToken = (token) => {
  var auth_token = token.auth_token;
  localStorage.setItem('token', auth_token);
}

const handleResponse = (response) => {
  return response.json()
    .then(json => {
      if (!response.ok) {
        const error = {
          status: response.status,
          statusTest: response.statusText,
          json
        }
        return Promise.reject(error)
      }
      return json
    })
}

module.exports = {
  getToken
}
