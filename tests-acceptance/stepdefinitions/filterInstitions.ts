import { assert } from 'console';
import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import request = require("request-promise");
import {Occurrence} from '../../common/models';

var base_url = "http://localhost:3333/";

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^O sistema não possui ocorrências situadas em "([^\"]*)"$/, async (city) => {
        await request.get(base_url + "occurrences")
                .then(body => {
                        console.log(body)
                        expect(body.includes('"city":"Recife"')).to.equal(false)
                });
    
    });

    When(/^Eu registro minha ocorrência situada em "([^\"]*)"$/, async (city) => {

        let occurrence = {
            "needsMedicalAssistance": false,
            "needsSecurityAssistance": false,
            "needsPsychologicalAssistance": true,
            "urgencyLevel": 2,
            "date": "2021-05-02T18:44:55.576Z",
            "city": city
        }

        var options:any = {method: 'POST', uri: (base_url + "occurrence/postOccurrence"), body:occurrence, json: true};

        await request(options)
              .then();
        
    });

    Then(/^O sistema possui alguma ocorrência situada em "([^\"]*)"$/, async (city) => {
        await request.get(base_url + "occurrences")
                .then(body => 
                    expect(body.includes('"city":"Recife"')).to.equal(true));
    });


    Given(/^O usuário está no menu inicial$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('EVAGui');
    })



})
