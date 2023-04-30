class OldMovie {
  constructor(data) {
    this._title = data.title
    this._synopsis = data.synopsis
    this._picture = data.picture
    this._duration = data.duration
    this._release_in = data.release_in
  }

  get title() {
    return this._title
  }

  get synopsis() {
    return this._synopsis
  }

  get duration() {
    return this._duration
  }

  get release_in() {
    return this._release_in
  }

  get picture() {
    return `/assets/${this._picture}`
  }

  get thumbnail() {
    return `/assets/thumbnails/${this._picture}`
  }
}
