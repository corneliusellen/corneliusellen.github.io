const baseURL = require('./railsAPI').baseURL()

const fetchToken = (method, email, password) => {
  return fetch(`${baseURL}/api/v1/authenticate?email=${email}&password=${password}`, {
    method: `${method}`,
    headers: {'Content-Type': 'application/json'}
  })
}

const getToken = (email, password) => {
  fetchToken('POST', email, password)
  .then((response) => response.json())
  .then(token => handleToken(token))
}

const handleToken = (token) => {
  var auth_token = token.auth_token;
  localStorage.setItem('token', auth_token);
}

module.exports = {
  getToken
}
