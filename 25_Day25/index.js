const api_key = "";
const api_url = `https://www.omdbapi.com/?apikey=[yourkey]&`;

// parameters :
// Variation 1 :-----------
//    s  ->  movie name (required)
// Variation 2 :-----------
//    t  ->  movie name
//    i  ->  IMDB id of movie
//       (atleast 1 of above 2 are required)

//    type  ->  "movie" / "series" / "episode"
//    y  ->  year of release

//  Search by name  -->  list of movies
//  Click on any 1 title .. link it with corresponding movie-name url

// wrappers ----------------
const movieListWrapper = document.getElementById("movie-list-wrapper");
const singleMovieWrapper = document.getElementById("single-movie-wrapper");
const searchWrapper = document.getElementById("search-wrapper");

const movieInput = document.getElementById("movie-name");
const searchBtn = document.getElementById("search-btn");
const movieList = document.getElementById("movie-list");
const singleMovie = document.getElementById("single-movie");
var movieCards = document.getElementsByClassName("movie-card");
const errorMsg = document.getElementById("error-msg");

// Movie-name search (movie-list)
// ---------------------------------------------
const fetchMovies = async () => {
    try {
        // remove error-message
        errorMsg.classList.remove("flex");
        var movieName = movieInput.value;
        var api_url = `https://www.omdbapi.com/?apikey=${api_key}&s=${movieName}`;
        var response = await fetch(api_url);
        var data = await response.json();
        data = data.Search;
        // reset movie-list first
        movieList.innerHTML = "";
        // Then add current search results, else previous results will pile up along
        data.forEach((movie) => {
            var movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");
            movieCard.innerHTML = `
              <span class="movie-card-left">
                <img src="${movie.Poster}" alt="Poster" class="movie-card-poster" />
              </span>
              <span class="movie-card-right">
                <h2 class="movie-card-title">${movie.Title}</h2>
                <p class="movie-card-text">${movie.Year} <i>(${movie.Type})</i></p>
              </span>
            `;
            movieList.appendChild(movieCard);
            var horz = document.createElement("hr");
            movieList.appendChild(horz);
        });
        // update movieCards
        updateMovieCards();
        // hide single-movie-section
        singleMovieWrapper.classList.add("hidden");
        // show movie-list section -------------
        movieListWrapper.classList.remove("hidden");
        console.log("Movie-name search data : ", data);
    } catch (err) {
        errorMsg.classList.add("flex");
        errorMsg.classList.remove("hidden");
        console.log("Error : ", err);
    }
};

// Single-movie details (movie-list)
// ---------------------------------------------
const fetchMovieDetails = async (movieTitle = "") => {
    if (movieTitle === "") {
        movieTitle = movieInput.value;
    }
    // remove error-message
    errorMsg.classList.remove("flex");
    var api_url = `https://www.omdbapi.com/?apikey=${api_key}&t=${movieTitle}`;
    fetch(api_url)
        .then((response) => response.json())
        .then((data) => {
            // clear singleMovie-data
            singleMovie.innerHTML = "";
            singleMovie.innerHTML = `
                <div id="single-movie-content">
                    <img src="${data.Poster}" id="movie-poster" />
                    <span id="movie-content">
                        <h1>${data.Title}</h1>
                        <p>${data.Year} , Runtime : ${data.Runtime}</p>
                        <i>Genre : ${data.Genre}</i>
                        <p>Director : ${data.Director}</p>
                        <p>Writer : <i>${data.Writer}</i></p>
                        <p>Cast : <i>${data.Actors}</i></p>
                        <p>Languages : <i>${data.Language}</i></p>
                        <p>Country : <i>${data.Country}</i></p>
                        <p>IMDb Rating : <b>${data.imdbRating}</b> (${data.imdbVotes} votes)</p>
                        <p>BoxOffice : ${data.BoxOffice}</p>
                        <p><b>Plot : </b>${data.Plot}</p>
                    </span>
                </div>
            `;
            // make movie-list section hidden
            movieListWrapper.classList.add("hidden");
            // make singleMovie-section visible
            singleMovieWrapper.classList.remove("hidden");
            console.log("Single movie data : ", data);
        })
        .catch((err) => {
            errorMsg.classList.add("flex");
            errorMsg.classList.remove("hidden");
            console.log("Error : ", err);
        });
};

const updateMovieCards = () => {
    // remove error-message
    errorMsg.classList.remove("flex");
    var newMovieCards = document.getElementsByClassName("movie-card");
    console.log("New movie cards : ", newMovieCards, typeof newMovieCards);
    movieCards = newMovieCards;

    // Add event-listeners to the updated-cards
    var movieCardTitles = document.getElementsByClassName("movie-card-title");
    for (movieCardTitle of movieCardTitles) {
        movieCardTitle.addEventListener("click", async (e) => {
            try {
                console.log(
                    "movie-card-title e : ",
                    e.target.childNodes[0].nodeValue
                );
                var movieTitle = e.target.childNodes[0].nodeValue;
                await fetchMovieDetails(movieTitle);
            } catch (err) {
                errorMsg.classList.add("flex");
                console.log("Error : ", err);
            }
        });
    }
};

searchBtn.addEventListener("click", async (e) => {
    try {
        e.preventDefault();
        await fetchMovies();
    } catch (err) {
        // errorMsg.classList.add("flex");
        console.log("Error : ", err);
    }
});
