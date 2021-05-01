import * as Yup from "yup";
//import _ from 'lodash';
import mongoose from "mongoose";
import { Request, Response } from "express";
import * as Sentry from "@sentry/node";
import { Institution } from "../schemas/InstitutionsModel";
import { Occurrence } from "../schemas/OccurrencesModel";
import { Address } from "../schemas/AddressModel";


class InstitutionsController {
  async index(req: Request, res: Response) {
    try {
        const institutionList = await Institution.find({  
        })
        .select('name email phoneNumber type adress_id')
        .sort({ name: 'asc' });
        
        return res.send(institutionList);
      
      } catch (err) {
        Sentry.captureException(err);
        console.log("Erro: Instituição não pode ser listada");
        return res.send(err);
    }
  }

  async filterInstitutionsOc(req: Request, res: Response) {

    console.log("estou filtrando!")

    const {
      date,
      needsMedicalAssistance,
      needsSecurityAssistance,
      needsPsychologicalAssistance,
      urgencyLevel,
      city
    } = req.body;

    const data = {
      date,
      needsMedicalAssistance,
      needsSecurityAssistance,
      needsPsychologicalAssistance,
      urgencyLevel,
      city
    };

    const newOccurrence = new Occurrence(data);

    const createdInstitution = await newOccurrence.save();

    var to_filter = [];
    console.log(data.needsSecurityAssistance)

    if (needsPsychologicalAssistance){
      to_filter.push("Psi");
    }

    if(needsMedicalAssistance){
      to_filter.push("Medic");
    }

    if(needsSecurityAssistance){
      to_filter.push("Police")
    }

    console.log(to_filter)

    var id_adresses = await Address.find({city: city}).select('adress_id');

    var id_addresses_name = [];
    for (var dict_name of id_adresses) {
      id_addresses_name.push(dict_name.get('adress_id'))
    }

    console.log(id_addresses_name)
    try {
      const institutionList = await Institution
      .find({
        type: {$in: to_filter },
        adress_id: {$in: id_addresses_name}

      })
      .select('name email phoneNumber type adress_id')
      .sort({ name: 'asc' });
      
      return res.send(institutionList);
    
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro: Instituição não pode ser listada");
      return res.send(err);
  }


  }

  async store(req: Request, res: Response) {
    const { name, email, phoneNumber, type, address } = req.body;

    const data = {
      name,
      email,
      phoneNumber,
      type,
      address,
    };
    //console.log(data);

    try {
      const newInstitution = new Institution(data);

      const createdInstitution = await newInstitution.save();

      return res.send(createdInstitution);
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro: Instituição não criada");
      return res.send(err);
    }
  }

  async storeMockedData(req: Request, res: Response) {
    
    const inst1 = {
      "name": "Psicologo 1",
      "email": "psi@data.com",
      "phoneNumber": "312345-1223",
      "type": "Psi",
      "adress_id": "1",
      }

    const inst2 = {
      "name": "Medic 1",
      "email": "med@data.com",
      "phoneNumber": "212345-1223",
      "type": "Med",
      "adress_id": "2",
    }         

    const inst3 = {
      "name": "Delegacia De Polícia Varadouro",
      "email": "pol2@data.com",
      "phoneNumber": "112345-1223",
      "type": "Pol",
      "adress_id": "3",
    }

    const inst4 = {
      "name": "Psicologo 2",
      "email": "psi2@data.com",
      "phoneNumber": "31312122345-1223",
      "type": "Psi",
      "adress_id": "4",
    }

    const inst5 = {
      "name": "PartMed Saúde",
      "email": "med2@data.com",
      "phoneNumber": "212142345-1223",
      "type": "Med",
      "adress_id": "5",
    }

    try {
      const newInst1 = new Institution(inst1);
      const createdInstitution1 = await newInst1.save();

      const newInst2 = new Institution(inst2);
      const createdInstitution2 = await newInst2.save();

      const newInst3 = new Institution(inst3);
      const createdInstitution3 = await newInst3.save();

      const newInst4 = new Institution(inst4);
      const createdInstitution4 = await newInst4.save();

      const newInst5 = new Institution(inst5);
      const createdInstitution5 = await newInst5.save();

      const institutionList = {
        inst1,
        inst2,
        inst3,
        inst4,
        inst5
      };

      return res.send(createdInstitution5);
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro: Instituições não criada");
      return res.send(err);
    }
  }

  async getById(req: Request, res: Response) {
    //const { id } = req.params.id;
    try {
      const institutionById = await Institution.findOne({
        _id: req.params.id,
      });
      //console.log(institutionByName);

      return res.send(institutionById);
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro: Instituição não encontrada");
      return res.send(err);
    }
  }

  async getByOcurrence(req: Request, res: Response) {
    //const { id } = req.params.id;
    try {
      const institutionById = await Institution.findOne({
        _id: req.params.id,
      });
      //console.log(institutionByName);

      return res.send(institutionById);
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro: Instituição não encontrada");
      return res.send(err);
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      console.log(id);

      const data = await Institution.findById(id).exec();

      return res.json({ id: id, data });
    } catch (err) {
      return res.status(400).send(err);
    }
  }

  async findByType(req: Request, res: Response) {
    try {
      const { id } = req.params;
      console.log(id);

      const data = await Institution.find({
        type: "Psi",
      }).exec();

      return res.json({ id: id, data });
    } catch (err) {
      return res.status(400).send(err);
    }
  }
}

export default new InstitutionsController();
