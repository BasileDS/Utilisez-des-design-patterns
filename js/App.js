class FetchMovies {
    async get() {
        return fetch('/data/movie-data.json')
            .then(res => res.json())
            .then(res => res.data)
            .catch(err => console.log('Une erreur est survenue', err))
    }
}

class FetchMoviesProxy {
    constructor() {
        this.cache = []
    }

    async fetchMovies() {
        if (this.cache.length) {
            return this.cache
        }

        const MoviesApi = new FetchMovies()
        const moviesData = await MoviesApi.get()

        this.cache.push(moviesData)
        return moviesData
    }

}

class App {
    async main() {
        const Proxy = new FetchMoviesProxy()
        const data = await Proxy.fetchMovies()

        console.log("Les données sont : ", data)
    }
}

const app = new App()
app.main()
