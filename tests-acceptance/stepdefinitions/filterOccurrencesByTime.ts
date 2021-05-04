import { defineSupportCode } from "cucumber";
import { browser, $, element, ElementArrayFinder, by, ExpectedConditions } from "protractor";
let chai = require("chai").use(require("chai-as-promised"));
let expect = chai.expect;
import request = require("request-promise");

var serverURL = "http://localhost:3333/occurrences";
var responseServer;
var delete_options: any = {
  method: "DELETE",
  uri: serverURL,
  json: true,
};
var post_options: any = {
  method: "POST",
  uri: serverURL,
  json: true,
};


let sameQtyAndType = (elem, name, type: string) =>
  elem
    .element(by.name(type))
    .getText()
    .then((text) => {
      return text === name;
    });

async function assertSameLength(set, n) {
  await set.then((elems) =>
    expect(Promise.resolve(elems.length)).to.eventually.equal(n)
  );
}

async function assertElementsWithsameQtyAndType(n, name, type:string) {
  var rows: ElementArrayFinder = element.all(by.name("rows"));
  var sameQtyAndTypes = rows.filter((elem) => sameQtyAndType(elem, name, type));
  await assertSameLength(sameQtyAndTypes, n);
}


defineSupportCode(function ({ Given, When, Then }) {
  Given(
    /^O sistema possui "(\d*)" ocorrências armazenadas entre as datas "([^\"]*)" e "([^\"]*)"$/,
    async (numOccurrences: string, startDate, endDate) => {
      let numOccurr = parseInt(numOccurrences) 
      let occurrences:any = [];

      for (var i = 0; i < numOccurr; i++) {
        occurrences[i] = {
          city: "Recife",
          date: startDate + "T18:43:15.346Z",
          needsMedicalAssistance: "true",
          needsSecurityAssistance: "true",
          needsPsychologicalAssistance: "true",
          urgencyLevel: 4,
        }
      }   
      expect(occurrences.length).to.equal(numOccurr);

      await request(delete_options).then((response) => {
        expect(response["ok"]).to.equal(1);
      });

      post_options["body"] = occurrences;
      await request(post_options).then(response => {
        expect(Array(response).length).to.equal(1);
      });
    }
  );

  Given(
    /^O sistema possui armazenada "(\d*)" ocorrências na data "([^\"]*)"$/,
    async (numOccurrences: string, date) => {
      var occurrence = [
        {
          city: "Olinda",
          date: date + "T11:45:28.934Z",
          needsSecurityAssistance: "true",
          urgencyLevel: 3,
        },
      ];
      expect(occurrence.length).to.equal(parseInt(numOccurrences)); 

      post_options["body"] = occurrence;
      await request(post_options).then(response => {
        expect(Array(response).length).to.equal(1);
      });
    }
  );

  When(
    /^O usuário solicita as ocorrências entre as datas "([^\"]*)" e "([^\"]*)"$/,
    async (startDate, endDate) => {
      var url =
        serverURL +
        "/filterByDateRange?startDate=" +
        startDate +
        "&endDate=" +
        endDate;
      var options: any = { uri: url };

      await request
        .get(options)
        .then((response) => (responseServer = JSON.parse(response)));
    }
  );

  Then(
    /^O sistema retorna uma lista com "(\d*)" ocorrências$/,
    async (numOccurrences: string) => {
      expect(responseServer.length).to.equal(parseInt(numOccurrences));
    }
  );

  Given(/^O usuário está na página "([^\"]*)"$/, async (pageName) => {
    await browser.get("http://localhost:4200/" + pageName);
    await browser.sleep(500);
    await expect(browser.getCurrentUrl()).to.eventually.equal("http://localhost:4200/" + pageName);
    await element.all(by.name('aba1')).get(0).click();
  });

  Given(/^O usuário consegue ver "([^\"]*)" ocorrências para os tipos "([^\"]*)"$/, async (values: string, types: string) =>{
    let allTypes = types.split(',');
    let allValues = values.split(',');

    for (var index in allTypes){
      await assertElementsWithsameQtyAndType(1, allValues[index], allTypes[index]);
    }
  });

  Given(
    /^O sistema possui "([^\"]*)" ocorrências para os tipos "([^\"]*)" armazenadas com o ano "(\d*)"$/,
    async (numOccurrences: string, types: string, year: string) => {
      let allTypes = types.split(',');
      let expectedNumOccurrences = numOccurrences.split(',').length;
      let occurrences:any = [];

      for (var index in allTypes){
        let type = allTypes[index];
        occurrences[index] = {
          city: "Recife",
          date: year + "-02-10T18:43:15.346Z",
          urgencyLevel: 4,
        }
        occurrences[index][type] = "true"
      }
      expect(occurrences.length).to.equal(expectedNumOccurrences);

      await request(delete_options).then((response) => {
        expect(response["ok"]).to.equal(1);
      });

      post_options["body"] = occurrences;
      await request(post_options).then(response => {
        expect(Array(response).length).to.equal(1);
      });
    }
  );

  When(/^O usuário filtra pelo ano de "(\d*)"$/, async (year: string) =>{
    var yearSelector = element.all(by.name("yearSelector")).get(0);
    await yearSelector.clear();
    await yearSelector.sendKeys(year);
    await element.all(by.name("yearFilterButton")).get(0).click();
    await browser.sleep(3000);
  });
});
