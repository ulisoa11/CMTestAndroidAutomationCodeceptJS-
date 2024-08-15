const { faker } = require('@faker-js/faker');

class UserData {

    randomUserEmail() {
        const emailFake = faker.internet.email();
        console.log("Paswword faker  " + emailFake);
        return emailFake;
    }

    randomUserPassword() {
        const passwordFake = faker.internet.password();
        console.log("Paswword faker  " + passwordFake);
        return passwordFake;
    }

    randomUserName() {
        const nameFake = faker.internet.userName();
        console.log("name faker  " + nameFake);
        return nameFake
    }
}
// Crea una instancia de la clase UserData
const userFakeData = new UserData();
const users = {
    sus: { email: 'ulisoa11@gmail.com', password: 'ClaroMusica1' },
    reg: { email: 'mx20240801@gmail.com', password: 'ClaroMusica1' },
    ramdonReg: { email: userFakeData.randomUserEmail(), password: userFakeData.randomUserPassword() }
};

// Exporta la clase y el objeto
module.exports = {
    UserData,
    users
};