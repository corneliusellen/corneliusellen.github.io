const baseURL = () => {
  const host = window.location.hostname
  if (host === "localhost" || host === "127.0.0.1") {
    return `https://outbreak-ready-be.herokuapp.com`
  } else {
    return `https://outbreak-ready-be.herokuapp.com`
  }

}

module.exports = {
  baseURL
}
