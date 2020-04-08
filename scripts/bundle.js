const bugsnag = require('bugsnag-sourcemaps')
const shell = require('shelljs')
const fs = require('fs')
const args = process.argv
const result = require('dotenv').config()
const path = require('path')


const API_KEY = result.parsed.BUGSNAG
let iosVersion
let androidVersion


let appVersion

function parseAppVersion() {
  let version = fs.readFileSync(path.join(__dirname, '..', 'version.json'))
  version = JSON.parse(version.toString())
  iosVersion = version.ios
  androidVersion = version.android
  appVersion = shell.exec(`git rev-parse --abbrev-ref HEAD | cut -f2 -d"#"`, { silent: true }).stdout
}

function writeAppVersion() {
  const version = {
    ios: iosVersion,
    android: androidVersion
  }
  fs.writeFileSync(path.join(__dirname, '..', 'version.json'), JSON.stringify(version), 'utf-8')
}

function incrementiOSBuild() {
  if (iosVersion) {
    let { build } = iosVersion
    ++build
    iosVersion.build = build
  }
}

function incrementAndroidBuild() {
  if (androidVersion) {
    let { build } = androidVersion
    ++build
    androidVersion.build = build
  }
}



// --minified-url main.jsbundle --upload-sources
// react-native bundle --platform ios --entry-file ./index.js --dev false --bundle-output ios/tokenjar/main.jsbundle --assets-dest ./ios  --sourcemap-output ios-debug.bundle.map

function uploadiOS() {
  bugsnag.upload({
    apiKey: API_KEY,
    appVersion,
    versionCode: iosVersion.build,
    minifiedFile: './ios/tokenjar/main.jsbundle',
    sourceMap: 'ios-debug.bundle.map',
    minifiedUrl: 'main.jsbundle',
    uploadSources: true
  }, (info) => {
    console.log('sourcemaps finished', info)
  })
}

function uploadAndroid() {
  bugsnag.upload({
    apiKey: API_KEY,
    appVersion,
    versionCode: iosVersion.build,
    minifiedFile: 'android/app/src/main/assets/index.android.bundle',
    sourceMap: 'android-debug.bundle.map',
    minifiedUrl: 'index.android.bundle',
    uploadSources: true
  }, (info) => {
    console.log('sourcemaps finished for android', info)
  })
}

function bundleiOS() {
  console.log(shell.exec('yarn run build:ios').stdout)
}

function bundleAndroid() {
  console.log(shell.exec('yarn run build:android').stdout)
}

function getBuildNumber() {
  if (args.indexOf('--get-build-ios') > 0) {
    console.log(iosVersion.build)
  }
  if (args.indexOf('---get-build-android') > 0) {
    console.log(androidVersion.build)
  }
}

function getVersionNumber() {
  if (args.indexOf('--get-version') > 0) {
    console.log(appVersion)
  }
}

parseAppVersion()
getVersionNumber()
getBuildNumber()

if (args.indexOf('--ios') >= 0) {
  incrementiOSBuild()
  bundleiOS()
  uploadiOS()
  writeAppVersion()
}

if (args.indexOf('--android') >= 0) {
  incrementAndroidBuild()
  bundleAndroid()
  uploadAndroid()
  writeAppVersion()
}
