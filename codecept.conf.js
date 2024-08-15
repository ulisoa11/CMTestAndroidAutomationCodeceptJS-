/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: "Android",
      desiredCapabilities: {
        appPackage: "com.telcel.imk",
        appActivity: "com.amco.activities.NewSplashActivity",
        deviceName: "moto1",
        platformVersion: "11",
      }
    }
  },
  include: {
    //I: './steps_file.js',
    //loginPagePage: "./pages/loginPage.js",
    landingPage: "./pages/landingPage.js"
  },
  name: 'CMAS-AutomationCodeceptJSAppium'
}