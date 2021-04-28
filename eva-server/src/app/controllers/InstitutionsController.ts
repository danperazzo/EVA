import * as Yup from 'yup';
//import _ from 'lodash';
import mongoose from 'mongoose';
import { Request, Response } from 'express';
import * as Sentry from '@sentry/node';
import  {Institution} from '../schemas/InstitutionsModel';

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


  async store(req: Request, res: Response) {
    const {
      name, 
      email,
      phoneNumber,
      type,
      address
      } = req.body;

    const data = {
      name, 
      email,
      phoneNumber,
      type,
      address};
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


  async getById(req: Request, res: Response) {
    //const { id } = req.params.id;
    try {
      
      const institutionById = await Institution.findOne({
        _id:req.params.id
      });
      //console.log(institutionByName);
      
      return res.send(institutionById);
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro: Instituição não encontrada");
      return res.send(err);
    }
  } 
}

export default new InstitutionsController();
