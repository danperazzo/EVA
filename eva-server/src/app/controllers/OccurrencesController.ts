import * as Yup from 'yup';
//import _ from 'lodash';
import mongoose from 'mongoose';
import { Request, Response } from 'express';
import * as Sentry from '@sentry/node';
import  {Occurrence} from '../schemas/OccurrencesModel';

class OccurrencesController {

/* lista todos as ocorrencias */
  async index(req: Request, res: Response) {

    try {
        const occurrenceList = await Occurrence.find({  
        })
        .select('_id date needsMedicalAssistance needsSecurityAssistance needsPsychologicalAssistance urgencyLevel location')
        .sort({ date: 'desc' });
        
        return res.send(occurrenceList);
      
      } catch (err) {
        Sentry.captureException(err);
        console.log("Erro: Ocorrência não criada");
        return res.send(err);
      }
    }

/* cria uma ocorrência */
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
      const newOccurrence = new Occurrence(data);
      //console.log(data);

      const createdOccurrence = await newOccurrence.save();
      //console.log(createdOccurrence);
      
      return res.send(createdOccurrence);
    
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro: Ocorrência não criada");
      return res.send(err);
    }
  } 


  async getById(req: Request, res: Response) {
    //const { id } = req.params.id;
    try {
      
      const occurrenceById = await Occurrence.findOne({
        _id:req.params.id
      });
      //console.log(occurrenceById);
      
      return res.send(occurrenceById);
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro: Ocorrência não encontrada");
      return res.send(err);
    }
  } 
}

export default new OccurrencesController();
