class MovieFactory {
  constructor(data, type) {
    if (type === "oldApi") {
      return new OldMovie(data)
    } else if (type === "newApi") {
      return new Movie(data)
    } else {
      throw "Unknown format type"
    }
  }
}
