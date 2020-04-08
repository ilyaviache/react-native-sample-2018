import { Client, Configuration } from 'bugsnag-react-native'

// TODO: think about config in ReactNative .env varibales are unavailable

const BUGSNAG_API = 'f618b2c2830cf9a40c1dca639b8cb442'

class ErrorService {
  init() {
    const config = new Configuration()
    config.notifyReleaseStages = ['beta', 'production', 'release']
    config.apiKey = BUGSNAG_API
    config.releaseStage = 'production'
    this.bugsnag = new Client(config)
  }
  handleUncaughtErrors(error) {
    this.bugsnag.handleUncaughtErrors(error)
  }
  notify(error) {
    this.bugsnag.notify(error)
  }
}

export default new ErrorService()