class FilterMoviesAdapter {
  constructor (Movies, actor) {
    this._Movies = Movies
    this._actor = actor
  }
  async filterByActor() {
    return await FilterV2.filterByActor(this._actor, this._Movies)
  }
}
