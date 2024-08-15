```sh {"id":"01J59BHGGWX2RKQYP0R9EY160Q"}
1. Setup enviroment 

- Visual studio code >= Versión: 1.80.2 
- Node >= v22.4.0
node -v
v22.4.0

- Instalar java jdk 
java --version
java 17.0.11 2024-04-16 LTS

- Instalar appium
- configurar variables de entorno JAVA_HOME
- Instalar Android Studio
- configurar variables de entorno ANDROID_HOME
- Instalar appium Server
- Instalar appium Inspector
- Crear un emulador en android studio 

pagina oficial https://codecept.io/helpers/Appium/#appium

configurar inizializar codecept 
npx codeceptjs init
<image src="/Users/AMCO/Desktop/setupCodeceptAppium.png" alt="setupCodeceptAppium">

Crar primer test
npx codeceptjs gt

Validar la configuracion con appium doctor
npm i -g appium-doctor

instalar appium global
npm i -g appium

crear un test de prueba ej. login_test.js

correr todos los test npx codeceptjs run  --debug
correr un feature especifico ej login:  npx codeceptjs run --grep "Login" --debug

```