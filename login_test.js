const { UserData, users } = require('./users');
Feature('login');

Scenario('Login: con email usuario SUSCRITO',  ({ I , loginPagePage}) => {
    loginPagePage.loginWithEmailSuscrito(users.sus.email,users.sus.password)
    loginPagePage.validarAlertaSuscritoBienvenida()
});

Scenario('login: con email usuario REGISTRADO',  ({ I , loginPagePage}) => {
    loginPagePage.createUserReg(users.ramdonReg.email, users.ramdonReg.password)
});