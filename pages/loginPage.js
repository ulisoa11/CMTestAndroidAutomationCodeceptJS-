const { I, landingPage } = inject();

module.exports = {

  // insert your locators and methods here
  // setting locators
  fields: {
    textViewEntrar: '//android.widget.TextView[@text="Entrar"]',
    email_login_button: '//android.view.View[@resource-id="email_login_button"]',
    textView_email: '//android.widget.TextView[@text="Tu correo"]',
    editText_email_text: '//android.widget.EditText[@resource-id="email_text_field"]',
    email_confirm_button: '//android.view.View[@resource-id="email_confirm_button"]',
    welcome_dialog_button: '//android.widget.TextView[@text="Entendido"]',
    password_text_field: '//android.widget.EditText[@resource-id="password_text_field"]',
    password_confirm_button: '//android.view.View[@resource-id="password_confirm_button"]',

    btn_to_perfil1: 'Cm image collage one pic',
    btn_to_perfil: '~Cm image collage one pic',
    btn_logout1: '~button_logout',
    btn_logout: '//android.widget.Button[@resource-id="com.telcel.imk:id/button_logout"]'
  },
  alertHome: {
    btnCloseAlert: '//android.widget.ImageView[@content-desc="Close"]',
    btnEntendidoAlert: '//android.widget.TextView[@text="Entendido"]',
    lblBienvenido: 'Bienvenido a',
    lblMusica: 'música',
    lblIlimitado: 'Ilimitado',
    lblBienvenidoGratis: '¡Bienvenido! Disfruta gratis'
  },
  btnCrearCuenta: 'Crear una cuenta',
  btnContinuarSinContraseña: 'Continuar sin contraseña',
  lblCrearContraseña: 'Crear una contraseña',
  lblTitleRecomendations: 'Elige 3 artistas que te gusten',
  btnSkipRecomentadions: "//android.widget.TextView[@text=\"Saltar\"]",
  btnContinueRecomendations: 'Continuar',
  lblLestGoStart: '¡Vamos a empezar!',
  lblSubTitleStart: 'Escucha estas canciones mientras nos conocemos mejor',
  btnNoYet: "//android.widget.TextView[@text=\"Ahora no\"]",
  btnPlayDefaultRecomendation: 'Reproducir ahora',

  loginWithEmailSuscrito(email, password,) {

    landingPage.aceptarPermisos()
    landingPage.tapEntrar()
    this.tapEmailLoginOption()
    this.sendEmail(email)
    this.sendPassword(password)
  },

  tapEmailLoginOption() {
    I.waitForElement(this.fields.email_login_button)
    I.tap(this.fields.email_login_button);
  },

  validarAlertaSuscritoBienvenida() {
    I.waitForVisible(this.alertHome.btnCloseAlert, 8)
    I.see(this.alertHome.lblBienvenido)
    I.see(this.alertHome.lblMusica)
    I.see(this.alertHome.lblIlimitado)
    I.tap(this.alertHome.btnCloseAlert)
    I.saveScreenshot('Home.png')
  },

  validarAlertaRegistradoBienvenida() {
    I.waitForVisible(this.alertHome.btnEntendidoAlert, 8)
    I.see(this.alertHome.lblBienvenidoGratis)
    I.saveScreenshot('HomeFree.png')
    I.click(this.alertHome.btnEntendidoAlert)
  },

  sendEmail(email) {
    I.waitForElement(this.fields.editText_email_text)
    I.fillField(this.fields.editText_email_text, email);
    I.tap(this.fields.email_confirm_button)
  },

  sendPassword(password) {
    I.waitForElement(this.fields.password_text_field)
    I.fillField(this.fields.password_text_field, password)
    I.tap(this.fields.password_confirm_button)
  },

  crearCuenta() {
    I.waitForVisible(this.btnCrearCuenta, 8)
    I.tap(this.btnCrearCuenta)
    I.waitForVisible(this.lblCrearContraseña, 8)
    I.see(this.lblCrearContraseña)
  },

  skipRecomendations() {
    I.waitForVisible(this.lblTitleRecomendations, 8)
    I.see(this.lblTitleRecomendations)
    I.waitForElement(this.btnSkipRecomentadions)
    I.click(this.btnSkipRecomentadions)
  },

  skipLestGoToStart() {
    I.waitForVisible(this.lblLestGoStart, 8)
    I.see(this.lblLestGoStart)
    I.see(this.lblSubTitleStart)
    I.tap(this.btnNoYet)
  },

  playLestGoToStart() {
    I.waitForVisible(this.lblLestGoStart, 10)
    I.see(this.lblLestGoStart)
    I.see(this.lblSubTitleStart)
    I.tap(this.btnPlayDefaultRecomendation)
  },

  createUserReg(email, password) {
    landingPage.aceptarPermisos()
    landingPage.tapEntrar()
    this.tapEmailLoginOption()
    this.sendEmail(email)
    this.crearCuenta()
    this.sendPassword(password)
    this.skipRecomendations()
    this.skipLestGoToStart()
    this.validarAlertaRegistradoBienvenida()
  },
}