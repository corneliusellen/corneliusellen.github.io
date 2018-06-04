const baseURL = require('./railsAPI').baseURL()

const restaurantsAPIFetch = (method, parameters, body) => {
  return fetch(`${baseURL}/api/v1/search/restaurants?near=denver&query=${parameters}`, {
    method: `${method}`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  })
}

const getRestaurants = () => {
  let params = $('.restaurant-search').children().val()
  restaurantsAPIFetch('GET', params)
  .then(response => handleResponse(response))
  .then(restaurants => appendEachRestaurant(restaurants))
  .catch(error => console.error({ error }))
}

const appendEachRestaurant = (restaurants) => {
  return restaurants.forEach(restaurant => {
    appendRestaurant(restaurant)
  })
}

const appendRestaurant = (restaurant) => {
  $('.exposure.options').prepend(
    `<p>${restaurant.name}</p>`
  )
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
  getRestaurants
}
