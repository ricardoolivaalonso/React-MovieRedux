const initialFetch = {
    loading: false,
    error: '',
    movies: [
        {
            id: 'tt1431045', 
            title: 'Deadpool', 
            image: 'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.7273_AL_.jpg'
        }
    ]
}
const initialComing = {
    loading: false,
    error: '',
    coming: {
        id: "tt10872600",
		title: "Spider-Man: No Way Home",
        image: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_Ratio0.6716_AL_.jpg.jpg'
    }
}
const initialMovie = {
    liked: [
        {
            id: 'tt1431045', 
            title: 'Deadpool', 
            image: 'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.7273_AL_.jpg'
        }
    ]
}

export { initialFetch, initialMovie, initialComing  }
