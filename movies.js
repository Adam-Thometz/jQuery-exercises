// const { expr } = require("jquery")

let currID = 0;
const movieList = [];

$(function() {
  // get movie data and add it to DOM and memory
  $('#movie-form').on('submit', function(e) {
    e.preventDefault();
    let movie = $('#movie').val();
    let rating = $('#rating').val();

    let movieData = {movie, rating, currID};
    const HTMLToAppend = createMovieHTML(movieData);

    currID++;
    movieList.push(movieData);

    $('tbody').append(HTMLToAppend);
    $('#movie-form').trigger('reset');
  })
  // delete event
  $('tbody').on('click', '.delete', function(e) {
    let idxToFind = movieList.findIndex(movie => movie.currID === parseInt(e.target.id))

    movieList.splice(idxToFind, 1)

  $(e.target).closest('tr').remove()
  })
})

function createMovieHTML(data) {
  return `
  <tr>
    <td>${data.movie}</td>
    <td>${data.rating}</td>
    <td><button class="delete" id="${data.currID}">Delete</button></td>
  </tr>`
}