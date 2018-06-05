const baseURL = () => {
  const host = window.location.hostname
  if (host === "localhost" || host === "127.0.0.1") {
    return `https://outbreak-ready-be.herokuapp.com`
  } else {
    return `http://localhost:3000`
  }

}

module.exports = {
  baseURL
}
