import * as Yup from 'yup';
//import _ from 'lodash';
import mongoose from 'mongoose';
import { Request, Response } from 'express';
import * as Sentry from '@sentry/node';
import  {Occurence} from '../schemas/OccurencesModel';

class OccurencesController {

/* lista todos as ocorrencias */
  async index(req: Request, res: Response) {

    try {
        const occurenceList = await Occurence.find({  
        })
        .select('_id date needsMedicalAssistance needsSecurityAssistance needsPsychologicalAssistance urgencyLevel location')
        .sort({ date: 'desc' });
        
        return res.send(occurenceList);
      
      } catch (err) {
        Sentry.captureException(err);
        console.log("Erro: Instituição não criada");
        return res.send(err);
      }
    }

/* cria uma ocorrencia */
  async store(req: Request, res: Response) {
    const {
      needsMedicalAssistance,
      needsSecurityAssistance,
      needsPsychologicalAssistance,
      urgencyLevel,
      location
      } = req.body;

    const data = {
        needsMedicalAssistance,
        needsSecurityAssistance,
        needsPsychologicalAssistance,
        urgencyLevel,
        location};
    //console.log(data);

    try {
      const newOccurence = new Occurence(data);
      //console.log(data);

      const createdOccurence = await newOccurence.save();
      //console.log(createdOccurence);
      
      return res.send(createdOccurence);
    
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro: Occorencia não criada");
      return res.send(err);
    }
  } 


  async getById(req: Request, res: Response) {
    //const { id } = req.params.id;
    try {
      
      const occurenceById = await Occurence.findOne({
        _id:req.params.id
      });
      //console.log(occurenceById);
      
      return res.send(occurenceById);
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro: Ocorrencia não encontrada");
      return res.send(err);
    }
  } 
}

export default new OccurencesController();
