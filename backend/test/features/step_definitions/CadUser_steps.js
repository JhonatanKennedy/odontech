const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

Given('I am at the register page', async () => {
  await driver.get('http://localhost:8080/register');
});

Given('I provide below information during registeration:', async (dataTable) => {
  const data = dataTable.hashes();
  await driver.findElement(By.id('name')).sendKeys(data[0].name);
  await driver.findElement(By.id('age')).sendKeys(data[0].age);
  await driver.findElement(By.id('phone')).sendKeys(data[0].phone);
  await driver.findElement(By.id('email')).sendKeys(data[0].email);
  await driver.findElement(By.id('password1')).sendKeys(data[0].password1);
  await driver.findElement(By.id('password2')).sendKeys(data[0].password2);
});

When('I submit the data', async () => {
  await driver.findElement(By.className('success mx-o mt-3')).click();
  await driver.manage().setTimeouts({ 
    implicit: 10000, 
    pageLoad: 30000, 
    script: 30000, 
  });

});

Then('I should see a text {string}', async (string) => {
  await driver.manage().setTimeouts({implicit: 9000})
  const textAlert = await driver.switchTo().alert().getText();
  assert.equal(textAlert, string)
  
});