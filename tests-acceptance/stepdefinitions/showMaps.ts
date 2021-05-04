import { assert } from "console";
import { defineSupportCode } from "cucumber";
import {
  browser,
  $,
  element,
  ElementArrayFinder,
  by,
  ExpectedConditions,
} from "protractor";
let chai = require("chai").use(require("chai-as-promised"));
let expect = chai.expect;
import request = require("request-promise");
import { Occurrence } from "../../common/models";

var base_url = "http://localhost:3333/institutions";

async function clickButtonName(name) {
  var but_pol = element.all(by.name(name)).get(0);
  await but_pol.click();
}

async function clickAnchor() {
  var anchor = element.all(by.tagName("a")).get(0);
  await anchor.click();
}

let sameName = (elem, name) =>
  elem
    .element(by.name("institutionsName"))
    .getText()
    .then((text) => {
      // console.log(text);
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

function waitUrl(myUrl) {
  return function () {
    return browser.getCurrentUrl().then(function (url) {
      return myUrl.test(url);
    });
  };
}

defineSupportCode(function ({ Given, When, Then }) {
  var _result;
  Given(
    /^O servidor possui a instituição de nome "Psicologo 2" com o endereço "Galeria Cordeiro - Praça Doze de Março"$/,

    async () => {
      var options: any = {
        method: "GET",
        uri: base_url + "_name/findbyname?id=Psicologo 2",
        json: true,
      };

      await request(options).then((result: any) => {
        // assert result.institutions >= 1
        // console.log(result);
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
      // assert result.institutions >= 1
      // console.log(result);
      _result = result;
    });
  });

  Then(
    /^O sistema me retorna o objeto com street "Galeria Cordeiro - Praça Doze de Março"$/,
    async () => {
      console.log(_result);
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

  Then(/^Eu vejo o mapa$/, async () => {

    console.log(_result);

    var EC = ExpectedConditions;
    browser.wait(
      EC.urlIs("http://localhost:3333/maps/" + _result.institutions[0]._id),
      5000
    );
    // Waits for the element with id 'abc' to be visible on the dom.
    browser.wait(EC.visibilityOf($("#mapelement")), 5000);
  });
});
