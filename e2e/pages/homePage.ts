
import { $,$$, browser, by, ElementArrayFinder, ElementFinder } from "protractor";

export class HomePageObject {
    public heading: ElementFinder;
    public peopleRadioButton: ElementFinder;
    public peopleRadioButtonLabel: ElementFinder;
    public planetRadioButton: ElementFinder;
    public planetRadioButtonLabel: ElementFinder;
    public querySearchBox: ElementFinder;
    public searchButton: ElementFinder;
    public radioButtonText: ElementFinder;
    public resultText: ElementFinder;
    public planetPopulation: ElementFinder;
    public planetClimate: ElementFinder;
    public planetGravity: ElementFinder;
    public peopleGender: ElementFinder;
    public peopleBirthYear: ElementFinder;
    public peopleEyeColor: ElementFinder;
    public peopleSkinColor: ElementFinder;
    public resultSets: ElementArrayFinder
    public notFound: ElementFinder;

    constructor() {
        this.heading = $("h1");
        this.peopleRadioButton = $("#people");
        this.planetRadioButton = $("#planets");
        this.querySearchBox = $("#query");
        this.searchButton = $("button");
        this.resultText = $("h6");
        this.resultSets = $$("h6");
        this.planetPopulation = browser.element(by.xpath('//div[@test-data-id = "populationLabel"]'))
        this.planetClimate = browser.element(by.xpath('//div[@test-data-id = "climateLabel"]'))
        this.planetGravity = browser.element(by.xpath('//div[@test-data-id = "gravityLabel"]'))
        this.notFound = browser.element(by.xpath('//div[contains(text(),"Not found.")]'))
    }
}
