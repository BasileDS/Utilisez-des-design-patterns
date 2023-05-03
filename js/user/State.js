class UserConnectedState {
  constructor() {
    this.isConnected = true
    this.User = new User()
  }

  getuser() {
    return new User()
  }
}

class AnonymousUserState {
  constructor() {
    this.isConnected = false
    this.User = new User()
  }

  getuser() {
    return new User()
  }
}
