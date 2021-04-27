"use strict";
exports.__esModule = true;
exports.Occurrence = exports.Address = exports.Institution = void 0;
var Institution = /** @class */ (function () {
    function Institution(name, email, phoneNumber, type, street, number, postalCode) {
        this.address = new Address(street, number, postalCode);
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.type = type;
        console.log("institution instantiated!");
        this.clean();
    }
    Institution.prototype.clean = function () { };
    Institution.prototype.show = function () {
        console.log(this.name, this.email, this.phoneNumber, this.type, this.address);
    };
    Institution.prototype.copyFrom = function (from) { };
    return Institution;
}());
exports.Institution = Institution;
var Address = /** @class */ (function () {
    function Address(street, number, postalCode) {
        this.street = street;
        this.number = number;
        this.postalCode = postalCode;
    }
    return Address;
}());
exports.Address = Address;
var Occurrence = /** @class */ (function () {
    function Occurrence() {
    }
    return Occurrence;
}());
exports.Occurrence = Occurrence;
