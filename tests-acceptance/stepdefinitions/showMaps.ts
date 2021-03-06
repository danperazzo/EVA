import { assert } from "console";
import { defineSupportCode } from "cucumber";
import { browser, $, element, by, ExpectedConditions } from "protractor";
let chai = require("chai").use(require("chai-as-promised"));
let expect = chai.expect;
import request = require("request-promise");

var base_url = `http://localhost:3333/institutions`;
var getInstitutionByNameEndpoint = (name: string) =>
  base_url + `_name/findbyname?id=${name}`;

async function clickButtonName(name) {
  var but_pol = element.all(by.name(name)).get(0);
  await but_pol.click();
}

async function assertGreaterThan(set, n) {
  await expect(set).to.be.at.least(1);
}

async function assertEqual(a, b) {
  await expect(a).to.equal(b);
}

defineSupportCode(function ({ Given, When, Then }) {
  var _result;
  Given(
    /^O servidor possui a instituição de nome "([^\"]*)" com o endereço "Galeria Cordeiro - Praça Doze de Março"$/,

    async (institutionName: string) => {
      var options: any = {
        method: "GET",
        uri: getInstitutionByNameEndpoint(institutionName),
        json: true,
      };

      await request(options).then((result: any) => {
        assertGreaterThan(result.institutions.length, 1);
      });
    }
  );

  When(/^Eu envio para o sistema o nome "Psicologo 2"$/, async () => {
    var options: any = {
      method: "GET",
      uri: base_url + "_name/findbyname?id=Psicologo 2",
      json: true,
    };

    await request(options).then((result: any) => {
      assertGreaterThan(result.institutions.length, 1);
      _result = result;
    });
  });

  Then(
    /^O sistema me retorna o objeto com street "([^\"]*)"$/,
    async (name: string) => {
      assertEqual(name, _result.institutions[0].address.street);
    }
  );

  Given(/^Eu estou no menu inicial$/, async () => {
    await browser.get("http://localhost:4200/");
    await expect(browser.getTitle()).to.eventually.equal("EVAGui");
  });

  Given(
    /^Eu adiciono que preciso de "([^\"]*)" e "([^\"]*)"$/,
    async (checkbox1: string, checkbox2: string) => {
      await clickButtonName("polhelp");
      await clickButtonName("psihelp");
    }
  );

  Given(/^Eu insiro que estou em "([^\"]*)"$/, async (city: string) => {
    var formlocation = element.all(by.name("locationform")).get(0);
    await formlocation.sendKeys(city);
  });

  Given(/^Clico em "([^\"]*)"$/, async (botao: string) => {
    await clickButtonName("botaosubmeter");
  });

  Given(/^Clico no endereço "([^\"]*)"$/, async (index: string) => {
    await clickButtonName("institutionAddressString");
    await browser.sleep(1000);
  });

  Then(/^Eu vou para a pagina "([^\"]*)"$/, async (pageName: string) => {
    var EC = ExpectedConditions;
    browser.wait(EC.urlContains(pageName), 5000);
  });

  Then(/^Eu vejo o mapa$/, async () => {
    var EC = ExpectedConditions;
    browser.wait(EC.visibilityOf($("#mapelement")), 5000);
  });
});
