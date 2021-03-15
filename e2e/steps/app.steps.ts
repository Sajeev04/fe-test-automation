const { Given, When, Then, And } = require('cucumber');
const { browser, by } = require('protractor');
import { HomePageObject } from "../pages/homePage";
const chai = require('chai');
chai.use(require('chai-as-promised'));

const homePage: HomePageObject = new HomePageObject();

Given('The app is open on {string}', { timeout: 25 * 1000 }, async (string) => {
    await browser.get('http://' + string + ':4200/');
    await browser.sleep(2000); 
});

Given('the heading must be displayed in the homepage', async function () {
    await chai.expect(homePage.heading.isDisplayed()).to.eventually.be.true;
  });

  Given('the heading must have the text as {string}', async function (title) {
    await chai.expect(homePage.heading.getText()).to.eventually.equal(title);
  });

  When('planet option is selected', async function () {
    await homePage.planetRadioButton.click();
  });

  When('people option is selected', async function () {
    await homePage.peopleRadioButton.click();
  });

  When('{string} is input in the search box', async function (text) {
    await homePage.querySearchBox.sendKeys(text);
  });

  When('the search button is clicked', async function () {
    await homePage.searchButton.click();
  });
  
  Then('the planet name {string} must be displayed in the result set', async function (respText) {
    await chai.expect(homePage.resultText.getText()).to.eventually.equal(respText);
  });

  Then('the planet population must be present', async function () {
    await chai.expect(homePage.planetPopulation.isDisplayed()).to.eventually.be.true;
  });

  Then('the planet climate must be present', async function () {
    await chai.expect(homePage.planetClimate.isDisplayed()).to.eventually.be.true;
  });

  Then('the planet gravity must be present', async function () {
    await chai.expect(homePage.planetGravity.isDisplayed()).to.eventually.be.true;
  });

  Then('the planet name not found text is displayed', async function () {
    await chai.expect(homePage.notFound.isDisplayed()).to.eventually.be.true;
  });

  Then('the no of planet in result set must be {string} in number', async function (noOfPlanet) {
    await chai.expect(homePage.resultSets.count()).to.eventually.equal(parseInt(noOfPlanet));
  });

  Then('the remove the text from searchBox', async function () {
    await homePage.querySearchBox.clear();
  });

  Then('the result set must not be displayed', async function () {
    await chai.expect(homePage.resultText.isDisplayed()).to.eventually.be.false;
  });

  Then('the people name not found text is displayed', async function () {
    await chai.expect(homePage.notFound.isDisplayed()).to.eventually.be.true;
  });

