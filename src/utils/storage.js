class Storage {
  setStorage(key, value) {
    if (typeof value == 'object') {
      value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
  }
  getStorage(key) {
    const value = window.localStorage.getItem(key)
    try {
      return JSON.parse(value)
    } catch (error) {
      return value
    }
  }
  removeItem(key) {
    window.localStorage.removeItem(key)
  }
  clearStorage() {
    window.localStorage.clear()
  }
}

export default new Storage()
