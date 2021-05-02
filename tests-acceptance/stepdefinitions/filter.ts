import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import request = require("request-promise");

var base_url = "http://localhost:3333/";

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^O sistema possui "(\d*)" instituições "([^\"]*)" situadas em "([^\"]*)"$/, async (numInstitutions,type,city) => {
        console.log("indooo 1")
    
    });

    When(/^Eu registro minha ocorrência situada em "([^\"]*)"$/, async (city) => {
       console.log("indooo 2")
    });

    Then(/^O sistema retorna "(\d*)" instituição "([^\"]*)"$/, async (numInstitutions, type) => {
        console.log("indooo 3")
    });

})
