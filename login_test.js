Feature('login');

Scenario('Login: con email usuario SUSCRITO',  ({ I , loginPagePage}) => {
    loginPagePage.loginWithEmailSuscrito("ulisoa11@gmail.com", "ClaroMusica1")
    loginPagePage.validarAlertaSuscritoBienvenida()
});