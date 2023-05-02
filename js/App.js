class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')

        this.MoviesApi = new MovieApi('/data/new-movie-data.json')
        this.externalMoviesApi = new MovieApi('/data/external-movie-data.json')
    }

    async main() {

        const MoviesData = await this.MoviesApi.getMovies()
        const externalMoviesData = await this.externalMoviesApi.getMovies()

        const Movies = MoviesData.map(movie => new MoviesFactory(movie, 'newApi'))
        const ExternalMovies = externalMoviesData.map(movie => new MoviesFactory(movie, 'externalApi'))

        const FullMovies = Movies.concat(ExternalMovies)

        FullMovies.forEach(movie => {
            const Template = new MovieCard(movie)
            this.$moviesWrapper.appendChild(
                Template.createMovieCard()
            )
        })
    }
}

const app = new App()
app.main()
