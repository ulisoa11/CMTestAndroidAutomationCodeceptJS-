const { I, landingPage } = inject();

module.exports = {
  // setting locators
  buttonElement: {
    btnAceptarYContinuar: '//android.widget.Button[@resource-id="com.telcel.imk:id/button_accept"]',
    btnEntrar: '//android.widget.TextView[@text="Entrar"]',
    btnEscuchaGratis: '//android.widget.TextView[@text="Entrar"]',
    btnAceptarPermiso: 'Aceptar permisos',
    btnRechazarPermiso: 'Rechazar permisos'
  },
  labelElement: {
    lblBienvenido: '¡Bienvenido al nuevo Claro música!',
    lblRechazarPermisosYSalir: 'Rechazar permisos y salir',
    lblEstasSeguro: "¿Estás seguro?"
},
  

  // introducing methods
  aceptarPermisos() {
    I.waitForVisible(this.buttonElement.btnAceptarYContinuar,8)
    I.see(this.labelElement.lblBienvenido)
    I.tap(this.buttonElement.btnAceptarYContinuar);
  },

  RechazarPermisosYSalirAceptar() {
    I.waitForVisible(this.labelElement.lblRechazarPermisosYSalir,8)
    I.see(this.labelElement.lblBienvenido)
    I.tap(this.labelElement.lblRechazarPermisosYSalir);
    I.see(this.labelElement.lblEstasSeguro)
    I.saveScreenshot('RechazarPermisosYSalirAceptar.png')
    I.tap(this.buttonElement.btnAceptarPermiso)
  },

  RechazarPermisosYSalirRechazar() {
    I.waitForVisible(this.labelElement.lblRechazarPermisosYSalir,8)
    I.see(this.labelElement.lblBienvenido)
    I.tap(this.labelElement.lblRechazarPermisosYSalir);
    I.see(this.labelElement.lblEstasSeguro)
    I.saveScreenshot('RechazarPermisosYSalirRechazar.png')
    I.tap(this.buttonElement.btnRechazarPermiso)
  },

}