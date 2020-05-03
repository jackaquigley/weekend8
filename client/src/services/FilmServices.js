const baseURL = 'http://localhost:3000/api/films/'

export default {
  selectFilm(id){
    return fetch(baseURL + id, {  method: 'GET'
    })
    .then(res => res.json())
  }
}
