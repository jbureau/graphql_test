class Service {
  constructor(options) {
    if (options.db) this.dbInstance = options.db
  }
}

module.exports = Service
