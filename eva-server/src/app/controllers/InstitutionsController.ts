import * as Yup from "yup";
//import _ from 'lodash';
import mongoose from "mongoose";
import { Request, Response } from "express";
import * as Sentry from "@sentry/node";
import { Institution } from "../schemas/InstitutionsModel";
import { Occurrence } from "../schemas/OccurrencesModel";

class InstitutionsController {
  async index(req: Request, res: Response) {
    try {
        const institutionList = await Institution.find({  
        })
        .select('name email phoneNumber type address')
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
      to_filter.push({type:"Psi"});
    }

    if(needsMedicalAssistance){
      to_filter.push({type:"Medic"});
    }

    if(needsSecurityAssistance){
      to_filter.push({type:"Police"})
    }


    try {
      const institutionList = await Institution.find({
        //type: "Psi" 
        $or: to_filter 
        
      })
      .find({
        
        //address.city : "122"
      })
      .select('name email phoneNumber type address')
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
      //console.log(data);

      const createdInstitution = await newInstitution.save();
      //console.log(createdInstitution);

      return res.send(createdInstitution);
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro: Instituição não criada");
      return res.send(err);
    }
  }

  async storeMockedData(req: Request, res: Response) {
    const inst1 = {
      name: "Psicologo 1",
      email: "psi@data.com",
      phoneNumber: "12345-1223",
      type: "Psi",
      address: "608d6697c6a99357d790420b",
    };

    const inst2 = {
      name: "Psicologo 2",
      email: "psi@data.com",
      phoneNumber: "12345-1223",
      type: "Psi",
      address: "608d6697c6a99357d790420b",
    };

    const inst3 = {
      name: "Psicologo 3",
      email: "psi@data.com",
      phoneNumber: "12345-1223",
      type: "Psi",
      address: "608d6697c6a99357d790420b",
    };

    try {
      const newInst1 = new Institution(inst1);
      const createdInstitution1 = await newInst1.save();

      const newInst2 = new Institution(inst2);
      const createdInstitution2 = await newInst2.save();

      const newInst3 = new Institution(inst3);
      const createdInstitution3 = await newInst3.save();

      const institutionList = {
        inst1,
        inst2,
        inst3,
      };

      return res.send(createdInstitution3);
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
