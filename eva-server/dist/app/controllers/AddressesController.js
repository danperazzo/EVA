"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sentry = __importStar(require("@sentry/node"));
var AddressModel_1 = require("../schemas/AddressModel");
var AddressesController = /** @class */ (function () {
    function AddressesController() {
    }
    /* lista todos os endereços */
    AddressesController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var addressesList, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, AddressModel_1.Address.find({})
                                .select('_id street number postalCode city')
                                .sort({ city: 'asc' })];
                    case 1:
                        addressesList = _a.sent();
                        return [2 /*return*/, res.send(addressesList)];
                    case 2:
                        err_1 = _a.sent();
                        Sentry.captureException(err_1);
                        console.log("Erro: Endereços não listados");
                        return [2 /*return*/, res.send(err_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /* cria endereços */
    AddressesController.prototype.store = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var address1, address2, address3, address4, address5, newAddress1, createdAddress1, newAddress2, createdAddress2, newAddress3, createdAddress3, newAddress4, createdAddress4, newAddress5, createdAddress5, addressesList, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        address1 = {
                            "adress_id": "1",
                            "street": "Rua das Pernambucanas",
                            "number": "407",
                            "postalCode": "52011-010",
                            "city": "Recife"
                        };
                        address2 = {
                            "adress_id": "2",
                            "street": "Rua Dr. Arthur Gonçalves",
                            "number": "46",
                            "postalCode": "50610-560",
                            "city": "Recife"
                        };
                        address3 = {
                            "adress_id": "3",
                            "street": "Rua Beco do Batman",
                            "number": "233",
                            "postalCode": "81811-123",
                            "city": "Jaboatão dos Guararapes"
                        };
                        address4 = {
                            "adress_id": "4",
                            "street": "Galeria Cordeiro - Praça Doze de Março",
                            "number": "23",
                            "postalCode": "53030-110",
                            "city": "Olinda"
                        };
                        address5 = {
                            "adress_id": "5",
                            "street": "Av. Pres. Getúlio Varga",
                            "number": "999",
                            "postalCode": "53030-010",
                            "city": "Olinda"
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        newAddress1 = new AddressModel_1.Address(address1);
                        return [4 /*yield*/, newAddress1.save()];
                    case 2:
                        createdAddress1 = _a.sent();
                        newAddress2 = new AddressModel_1.Address(address2);
                        return [4 /*yield*/, newAddress2.save()];
                    case 3:
                        createdAddress2 = _a.sent();
                        newAddress3 = new AddressModel_1.Address(address3);
                        return [4 /*yield*/, newAddress3.save()];
                    case 4:
                        createdAddress3 = _a.sent();
                        newAddress4 = new AddressModel_1.Address(address4);
                        return [4 /*yield*/, newAddress4.save()];
                    case 5:
                        createdAddress4 = _a.sent();
                        newAddress5 = new AddressModel_1.Address(address5);
                        return [4 /*yield*/, newAddress5.save()];
                    case 6:
                        createdAddress5 = _a.sent();
                        addressesList = {
                            address1: address1, address2: address2, address3: address3, address4: address4, address5: address5
                        };
                        return [2 /*return*/, res.send(newAddress5)];
                    case 7:
                        err_2 = _a.sent();
                        Sentry.captureException(err_2);
                        console.log("Erro: Endereço não criado");
                        return [2 /*return*/, res.send(err_2)];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return AddressesController;
}());
exports.default = new AddressesController();
