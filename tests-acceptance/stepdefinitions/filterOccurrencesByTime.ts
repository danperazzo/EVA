import { defineSupportCode } from "cucumber";
import { browser, $, element, ElementArrayFinder, by } from "protractor";
let chai = require("chai").use(require("chai-as-promised"));
let expect = chai.expect;
import request = require("request-promise");

var serverURL = "http://localhost:3333/occurrences";
var responseServer;

defineSupportCode(function ({ Given, When, Then }) {
  Given(
    /^O sistema possui "(\d*)" ocorrências armazenadas entre as datas "([^\"]*)" e "([^\"]*)"$/,
    async (numOccurrences, startDate, endDate) => {
      var occurrences = [
        {
          city: "Recife",
          date: "2021-04-26T20:43:15.346Z",
          needsMedicalAssistance: "true",
          needsSecurityAssistance: "true",
          urgencyLevel: 4,
        },
        {
          city: "Jaboatão do Guararapes",
          date: "2021-04-28T10:45:28.934Z",
          needsPsychologicalAssistance: "true",
          urgencyLevel: 5,
        }
      ];
      var delete_options: any = { method: "DELETE", uri: serverURL, json: true };
      var post_options: any = {
        method: "POST",
        uri: serverURL,
        body: occurrences,
        json: true,
      };

      await request(delete_options).then((response) =>
        console.log(response.body)
      );

      await request(post_options).then((response) =>
        console.log(response.body)
      );
    }
  );

  Given(
    /^O sistema possui armazenada "(\d*)" ocorrências na data "([^\"]*)"$/,
    async (numOccurrences, date) => {
        var occurrence = [{
            city: "Olinda",
            date: date + "T11:45:28.934Z",
            needsSecurityAssistance: "true",
            urgencyLevel: 3,
        }]
        var post_options: any = {
            method: "POST",
            uri: serverURL,
            body: occurrence,
            json: true,
          };

        await request(post_options).then((response) =>
            console.log(response.body)
        );
    
    });

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
});
