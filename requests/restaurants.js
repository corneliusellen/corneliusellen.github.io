const baseURL = require('./railsAPI').baseURL()

const menusAPIFetch = (method, venue_id) => {
  var token = localStorage.getItem('token');
  return fetch(`${baseURL}/api/v1/search/menus`, {
    method: `${method}`,
    headers: {'Content-Type': 'application/json', 'venue_id': `${venue_id}`, 'Authorization': token},
  })
}

const getMenus = () => {
  let venue_id = $('body').find('.marked')[1].getAttribute('value')
  menusAPIFetch('GET', venue_id)
  .then(response => handleResponse(response))
  .then(menus => appendEachMenu(menus))
  .catch(error => console.error({ error }))
}

const appendEachMenu = (menus) => {
  return menus.forEach(menu => {
    appendMenu(menu)
  })
}

const appendMenu = (menu) => {
  $('.menus').append(
    `<div class="menu ${menu.id}">
      <h2>Menu Name: ${menu.name}</h2>
      <p>(click menu name to select all)</p>
    </div>`
  );
  menu.foods.forEach(food => {
    appendFood(menu.id, food)
  })
}
const appendFood = (id, food) => {
  $(`body`).find(`.menu.${id}`).append(
    `<div class="food-button">
      <p>Item: ${food.name}</p>
      <p>Ingredients: ${food.description}</p>
    </div>`
  )
}

const restaurantsAPIFetch = (method, near, query) => {
  var token = localStorage.getItem('token');
  return fetch(`${baseURL}/api/v1/search/restaurants?near=${near}&query=${query}`, {
    method: `${method}`,
    headers: {'Content-Type': 'application/json', 'Authorization': token},
  })
}

const getRestaurants = () => {
  let buttons = $('.restaurant-search').find('input')
  let params = []
  Object.entries(buttons).forEach(([key, value]) => {
    params.push(value.value)
  });
  params.splice(-2,2);
  let near = `${params[1]}`
  let query = `${params[0]}`
  restaurantsAPIFetch('GET', near, query)
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
  $('.options-restaurants').append(
    `<div class="small-box restaurant" value=${restaurant.venue_id}>
      <p>${restaurant.name}</p>
      <p>${restaurant.address}</p>
    </div>`
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
  getRestaurants,
  getMenus
}
