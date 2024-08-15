Feature('landing Test');

Scenario('landing: Aceptar permisos',  ({ I , landingPage}) => {
    landingPage.aceptarPermisos()
});

Scenario('landing: label Rechazar permisos Aceptar en Alerta',  ({ I , landingPage}) => {
    landingPage.RechazarPermisosYSalirAceptar()
});

Scenario('landing: label Rechazar permisos Rechazar en Alerta',  ({ I , landingPage}) => {
    landingPage.RechazarPermisosYSalirRechazar()
});