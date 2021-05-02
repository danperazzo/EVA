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
var InstitutionsModel_1 = require("../schemas/InstitutionsModel");
var OccurrencesModel_1 = require("../schemas/OccurrencesModel");
var InstitutionsController = /** @class */ (function () {
    function InstitutionsController() {
    }
    InstitutionsController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var institutionList, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, InstitutionsModel_1.Institution.find({})
                            // .select("name email phoneNumber type adress_id")
                            // .sort({ name: "asc" });
                        ];
                    case 1:
                        institutionList = _a.sent();
                        // .select("name email phoneNumber type adress_id")
                        // .sort({ name: "asc" });
                        return [2 /*return*/, res.send(institutionList)];
                    case 2:
                        err_1 = _a.sent();
                        Sentry.captureException(err_1);
                        console.log("Erro: Instituição não pode ser listada");
                        return [2 /*return*/, res.send(err_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InstitutionsController.prototype.filterInstitutionsOc = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, city, date, needsMedicalAssistance, needsSecurityAssistance, needsPsychologicalAssistance, urgencyLevel, data, newOccurrence, createdInstitution, to_filter, institutionList, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("estou filtrando!");
                        console.log(req.body);
                        _a = req.body, city = _a.city, date = _a.date, needsMedicalAssistance = _a.needsMedicalAssistance, needsSecurityAssistance = _a.needsSecurityAssistance, needsPsychologicalAssistance = _a.needsPsychologicalAssistance, urgencyLevel = _a.urgencyLevel;
                        console.log("passei");
                        data = {
                            date: date,
                            needsMedicalAssistance: needsMedicalAssistance,
                            needsSecurityAssistance: needsSecurityAssistance,
                            needsPsychologicalAssistance: needsPsychologicalAssistance,
                            urgencyLevel: urgencyLevel,
                            city: city,
                        };
                        console.log(data);
                        newOccurrence = new OccurrencesModel_1.Occurrence(data);
                        return [4 /*yield*/, newOccurrence.save()];
                    case 1:
                        createdInstitution = _b.sent();
                        to_filter = [];
                        if (needsPsychologicalAssistance) {
                            to_filter.push("Psi");
                        }
                        if (needsMedicalAssistance) {
                            to_filter.push("Med");
                        }
                        if (needsSecurityAssistance) {
                            to_filter.push("Pol");
                        }
                        console.log("to filter");
                        console.log(to_filter);
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, InstitutionsModel_1.Institution.find({
                                type: { $in: to_filter },
                                address: { city: "Recife" },
                            })
                                .select("name email phoneNumber type address")
                                .sort({ name: "asc" })];
                    case 3:
                        institutionList = _b.sent();
                        console.log("lista");
                        console.log(institutionList);
                        return [2 /*return*/, res.send(institutionList)];
                    case 4:
                        err_2 = _b.sent();
                        Sentry.captureException(err_2);
                        console.log("Erro: Instituição não pode ser listada");
                        return [2 /*return*/, res.send(err_2)];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    InstitutionsController.prototype.store = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, phoneNumber, type, address, data, newInstitution, createdInstitution, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, email = _a.email, phoneNumber = _a.phoneNumber, type = _a.type, address = _a.address;
                        data = {
                            name: name,
                            email: email,
                            phoneNumber: phoneNumber,
                            type: type,
                            address: address,
                        };
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        newInstitution = new InstitutionsModel_1.Institution(data);
                        return [4 /*yield*/, newInstitution.save()];
                    case 2:
                        createdInstitution = _b.sent();
                        return [2 /*return*/, res.send(createdInstitution)];
                    case 3:
                        err_3 = _b.sent();
                        Sentry.captureException(err_3);
                        console.log("Erro: Instituição não criada");
                        return [2 /*return*/, res.send(err_3)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    InstitutionsController.prototype.storeMockedData = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var inst1, inst2, inst3, inst4, inst5, newInst1, createdInstitution1, newInst2, createdInstitution2, newInst3, createdInstitution3, newInst4, createdInstitution4, newInst5, createdInstitution5, institutionList, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inst1 = {
                            name: "Psicologo 1",
                            email: "psi@data.com",
                            phoneNumber: "312345-1223",
                            type: "Psi",
                            // adress_id: "1",
                            address: {
                                name: "teste",
                                number: "123-a",
                                city: "Recife",
                            },
                        };
                        inst2 = {
                            name: "Medic 1",
                            email: "med@data.com",
                            phoneNumber: "212345-1223",
                            type: "Med",
                            // adress_id: "2",
                            address: {
                                name: "teste",
                                number: "123-a",
                                city: "Recife",
                            },
                        };
                        inst3 = {
                            name: "Delegacia De Polícia Varadouro",
                            email: "pol2@data.com",
                            phoneNumber: "112345-1223",
                            type: "Pol",
                            // adress_id: "3",
                            address: {
                                name: "teste",
                                number: "123-a",
                                city: "Recife",
                            },
                        };
                        inst4 = {
                            name: "Psicologo 2",
                            email: "psi2@data.com",
                            phoneNumber: "31312122345-1223",
                            type: "Psi",
                            // adress_id: "4",
                            address: {
                                name: "teste",
                                number: "123-a",
                                city: "Recife",
                            },
                        };
                        inst5 = {
                            name: "PartMed Saúde",
                            email: "med2@data.com",
                            phoneNumber: "212142345-1223",
                            type: "Med",
                            // adress_id: "5",
                            address: {
                                name: "teste",
                                number: "123-a",
                                city: "Recife",
                            },
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        newInst1 = new InstitutionsModel_1.Institution(inst1);
                        return [4 /*yield*/, newInst1.save()];
                    case 2:
                        createdInstitution1 = _a.sent();
                        newInst2 = new InstitutionsModel_1.Institution(inst2);
                        return [4 /*yield*/, newInst2.save()];
                    case 3:
                        createdInstitution2 = _a.sent();
                        newInst3 = new InstitutionsModel_1.Institution(inst3);
                        return [4 /*yield*/, newInst3.save()];
                    case 4:
                        createdInstitution3 = _a.sent();
                        newInst4 = new InstitutionsModel_1.Institution(inst4);
                        return [4 /*yield*/, newInst4.save()];
                    case 5:
                        createdInstitution4 = _a.sent();
                        newInst5 = new InstitutionsModel_1.Institution(inst5);
                        return [4 /*yield*/, newInst5.save()];
                    case 6:
                        createdInstitution5 = _a.sent();
                        institutionList = {
                            inst1: inst1,
                            inst2: inst2,
                            inst3: inst3,
                            inst4: inst4,
                            inst5: inst5,
                        };
                        return [2 /*return*/, res.send(createdInstitution5)];
                    case 7:
                        err_4 = _a.sent();
                        Sentry.captureException(err_4);
                        console.log("Erro: Instituições não criada");
                        return [2 /*return*/, res.send(err_4)];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    InstitutionsController.prototype.getById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var institutionById, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, InstitutionsModel_1.Institution.findOne({
                                _id: req.params.id,
                            })];
                    case 1:
                        institutionById = _a.sent();
                        //console.log(institutionByName);
                        return [2 /*return*/, res.send(institutionById)];
                    case 2:
                        err_5 = _a.sent();
                        Sentry.captureException(err_5);
                        console.log("Erro: Instituição não encontrada");
                        return [2 /*return*/, res.send(err_5)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InstitutionsController.prototype.getByOcurrence = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var institutionById, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, InstitutionsModel_1.Institution.findOne({
                                _id: req.params.id,
                            })];
                    case 1:
                        institutionById = _a.sent();
                        //console.log(institutionByName);
                        return [2 /*return*/, res.send(institutionById)];
                    case 2:
                        err_6 = _a.sent();
                        Sentry.captureException(err_6);
                        console.log("Erro: Instituição não encontrada");
                        return [2 /*return*/, res.send(err_6)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InstitutionsController.prototype.findOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, data, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        console.log(id);
                        return [4 /*yield*/, InstitutionsModel_1.Institution.findById(id).exec()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.json({ id: id, data: data })];
                    case 2:
                        err_7 = _a.sent();
                        return [2 /*return*/, res.status(400).send(err_7)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InstitutionsController.prototype.findByType = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, data, err_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        console.log(id);
                        return [4 /*yield*/, InstitutionsModel_1.Institution.find({
                                type: "Psi",
                            }).exec()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.json({ id: id, data: data })];
                    case 2:
                        err_8 = _a.sent();
                        return [2 /*return*/, res.status(400).send(err_8)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return InstitutionsController;
}());
exports.default = new InstitutionsController();
