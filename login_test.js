Feature('login');

Scenario('test something',  ({ I }) => {
    I.waitForVisible('//android.widget.Button[@resource-id="com.telcel.imk:id/button_accept"]',5)
    I.tap('//android.widget.Button[@resource-id="com.telcel.imk:id/button_accept"]');
});
