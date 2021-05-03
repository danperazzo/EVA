import { assert } from "console";
import { defineSupportCode } from "cucumber";
import { browser, $, element, ElementArrayFinder, by } from "protractor";
let chai = require("chai").use(require("chai-as-promised"));
let expect = chai.expect;
import request = require("request-promise");
import { Occurrence } from "../../common/models";

var base_url = "http://localhost:3333/";

async function clickButtonName(name) {
  var but_pol = element.all(by.name(name)).get(0);
  await but_pol.click();
}

let sameName = (elem, name) =>
  elem
    .element(by.name("institutionsName"))
    .getText()
    .then((text) => {
      return text === name;
    });

async function assertTamanhoEqual(set, n) {
  await set.then((elems) =>
    expect(Promise.resolve(elems.length)).to.eventually.equal(n)
  );
}

async function assertElementsWithSameName(n, name) {
  var allalunos: ElementArrayFinder = element.all(by.name("institutionlist"));
  var samenames = allalunos.filter((elem) => sameName(elem, name));
  await assertTamanhoEqual(samenames, n);
}

defineSupportCode(function ({ Given, When, Then }) {
  Given(
    /^O sistema não possui ocorrências$/,

    async () => {
      var occurrences = [];

      var delete_options: any = {
        method: "DELETE",
        uri: base_url + "occurrences",
        json: true,
      };
      var post_options: any = {
        method: "POST",
        uri: base_url,
        body: occurrences,
        json: true,
      };

      await request(delete_options);
    }
  );

  When(
    /^Eu envio para o sistema minha ocorrência situada em "([^\"]*)"$/,
    async (city) => {
      let occurrence = {
        needsMedicalAssistance: false,
        needsSecurityAssistance: false,
        needsPsychologicalAssistance: true,
        urgencyLevel: 2,
        date: "2021-05-02T18:44:55.576Z",
        city: city,
      };

      var options: any = {
        method: "POST",
        uri: base_url + "occurrence/postOccurrence",
        body: occurrence,
        json: true,
      };

      await request(options).then();
    }
  );

  Then(
    /^O sistema possui alguma ocorrência situada em "([^\"]*)"$/,
    async (city) => {
      await request
        .get(base_url + "occurrences")
        .then((body) =>
          expect(body.includes('"city":"Recife"')).to.equal(true)
        );
    }
  );

  Given(/^Eu estou no menu inicial$/, async () => {
    await browser.get("http://localhost:4200/");
    await expect(browser.getTitle()).to.eventually.equal("EVAGui");
  });

  When(
    /^Eu adiciono que preciso de "([^\"]*)" e "([^\"]*)"$/,
    async (checkbox1: string, checkbox2: string) => {
      await clickButtonName("polhelp");
      await clickButtonName("psihelp");
    }
  );

  When(/^Eu insiro que estou em "([^\"]*)"$/, async (city: string) => {
    var formlocation = element.all(by.name("locationform")).get(0);
    await formlocation.sendKeys(city);
  });

  When(/^Clico em "([^\"]*)"$/, async (botao: string) => {
    await clickButtonName("botaosubmeter");
  });

  Then(/^Eu visualizo "([^\"]*)"$/, async (name: string) => {
    await assertElementsWithSameName(1, name);
  });
});
