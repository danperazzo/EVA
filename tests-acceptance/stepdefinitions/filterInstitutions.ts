import { defineSupportCode } from "cucumber";
import { browser, $, element, ElementArrayFinder, by } from "protractor";
let chai = require("chai").use(require("chai-as-promised"));
let expect = chai.expect;
import request = require("request-promise");
import { Institution } from "../../common/models";

var base_url = "http://localhost:3333/institutions";
var responseBody ;

defineSupportCode(function ({ Given, When, Then }) {

    Given(/^O sistema possui instituicoes$/, 
    async () => {
        /* var institutionObject1 = institution1.split(',');
        var institutionObject2 = institution2.split(',');

        for(var i in institutionObject1){
          console.log("institution items", institutionObject1[i]);
        }
        for(var i in  institutionObject2){
          console.log("institutions2 items", institutionObject2[i]);
        } */
        var deleteOptions: any = {
          method: "DELETE",
          uri: "http://localhost:3333/institutions_name?city=Recife",
          json: true,
        };
        await request(deleteOptions).then((response) =>
        console.log(response.body)
        );

        var postOptions: any = {
          method: "POST",
          uri: (base_url + "/storeMocked"),
          json: true,
        };
  
       // await request(postOptions).then((response) => (console.log(response.body)));
       await request(postOptions);
      
    });
  
    When(/^Eu solicito as instituições filtradas por "([^\"]*)" e "([^\"]*)"$/,
      async (city: string, name: string) => {  
        
        var getOptions: any = {
          method: "GET",
          uri: ("http://localhost:3333/institutions_name/findbyname/findbycity?id="+ name + "&city=" + city),
          json: true,
        };
  
        await request(getOptions).then((response) => (
          responseBody = response
        
          ));
        console.log(responseBody); 
    });
  
    Then(
      /^O sistema retorna a instituição com os parâmetros "([^\"]*)" e "([^\"]*)"$/,
      async (name, city) => {
       console.log("to  AQUI");
       console.log("RESPONSE BODY:  ", responseBody.institutions, responseBody.institutions.lenght);
       expect(responseBody.institutions.length).to.equal(1);
       expect(responseBody.institutions[0].address.city).to.equal(city);
       //expect(responseBody.city).to.equal(city);
       expect(responseBody.institutions[0].name).to.includes(name);
      
      }
    );
  
    
    });