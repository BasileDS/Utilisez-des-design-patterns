class Movie {
  constructor(data) {
    this._title = data.title
    this._synopsis = data.synopsis
    this._picture = data.picture
    this._duration = data.duration
    this._released_in = data.released_in
  }

  get title() {
    return (this._title.fr ? this._title.fr : this._title.en)
  }
  get synopsis() {
    return this._synopsis
  }
  get duration() {
    return `${Math.floor(this._duration/60)}h${this._duration%60}min`
  }
  get released_in() {
    return this._released_in
  }
  get picture() {
    return `/assets/${this._picture}`
  }
  get thumbnail() {
    return `/assets/thumbnails/${this._picture}`
  }
}
