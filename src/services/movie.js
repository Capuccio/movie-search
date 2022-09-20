/** @format */

export const getMovies = (search) => {
	return fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDBAPI_KEY}&s=${search}&type=movie`)
}

export const getMovieDetail = (id) => {
	return fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDBAPI_KEY}&i=${id}`)
}
