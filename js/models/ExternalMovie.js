class ExternalMovie {
    constructor(data) {
        this._title_fr = data.title_fr
        this._title_en = data.title_en
        this._synopsis = data.synopsis
        this._medias = data.medias
        this._infos = data.infos
    }

    get title() {
        return this._title_fr ? this._title_fr : this._title_en
    }

    get synopsis() {
        return this._synopsis
    }

    get picture() {
        return `/assets/${this._medias.picture}`
    }

    get thumbnail() {
        return `/assets/thumbnails/${this._medias.thumbnail}`
    }

    get duration() {
        return this._infos.duration
    }

    get released_in() {
        return this._infos.released_in
    }
}