const { I, landingPage } = inject();

module.exports = {

  // insert your locators and methods here
  // setting locators
  fields: {
    buttonAccept: '//android.widget.Button[@resource-id="com.telcel.imk:id/button_accept"]',
    textViewEntrar: '//android.widget.TextView[@text="Entrar"]',
    email_login_button:'//android.view.View[@resource-id="email_login_button"]',
    textView_email:  '//android.widget.TextView[@text="Tu correo"]',
    editText_email_text: '//android.widget.EditText[@resource-id="email_text_field"]',
    email_confirm_button: '//android.view.View[@resource-id="email_confirm_button"]',
    welcome_dialog_button:  '//android.widget.TextView[@text="Entendido"]',
    password_text_field: '//android.widget.EditText[@resource-id="password_text_field"]',
    password_confirm_button: '//android.view.View[@resource-id="password_confirm_button"]',
    
    btn_to_perfil1: 'Cm image collage one pic',
    btn_to_perfil: '~Cm image collage one pic',
    btn_logout1: '~button_logout',
    btn_logout: '//android.widget.Button[@resource-id="com.telcel.imk:id/button_logout"]'
  },
  alertHome: {
    btnCloseAlert: '//android.widget.ImageView[@content-desc="Close"]',
    lblBienvenido: 'Bienvenido a',
    lblMusica: 'música',
    lblIlimitado: 'Ilimitado',
  },

  loginWithEmailSuscrito(email, password) {

   landingPage.aceptarPermisos()

    I.waitForVisible(this.fields.textViewEntrar,5)
    I.click(this.fields.textViewEntrar);

    I.waitForElement(this.fields.email_login_button)
    I.tap(this.fields.email_login_button);

    I.waitForElement(this.fields.textView_email)
    I.tap(this.fields.textView_email)

    I.waitForElement(this.fields.editText_email_text)
    I.fillField(this.fields.editText_email_text, email);
    I.tap(this.fields.email_confirm_button)

    I.wait(3)
    I.fillField(this.fields.password_text_field, password)
    I.tap(this.fields.password_confirm_button)

  },

    validarAlertaSuscritoBienvenida(){
      I.waitForVisible(this.alertHome.btnCloseAlert,8)
      I.see(this.alertHome.lblBienvenido)
      I.see(this.alertHome.lblMusica)
      I.see(this.alertHome.lblIlimitado)
      I.tap(this.alertHome.btnCloseAlert)
      I.saveScreenshot('Home.png')
    },
}