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
        .select('_id date needsMedicalAssistance needsSecurityAssistance needsPsychologicalAssistance urgencyLevel city')
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
    const occurrence1 = {
      "date": "2021-02-25T22:31:09.553Z",
      "needsMedicalAssistance": "true",
      "urgencyLevel": "3",
      "city": "Recife"
    }

    const occurrence2 = {
      "date": "2021-03-19T10:45:28.934Z",
      "needsMedicalAssistance": "true",
      "needsPsychologicalAssistance": "true",
      "urgencyLevel": "5",
      "city": "Recife"
    }

    const occurrence3 = {
      "date": "2021-02-10T12:42:07.193Z",
      "needsSecurityAssistance": "true",
      "urgencyLevel": "4",
      "city": "Jaboatão"
    }

    const occurrence4 = {
      "date": "2021-04-30T20:43:15.346Z",
      "needsMedicalAssistance": "true",
      "needsSecurityAssistance": "true",
      "urgencyLevel": "5",
      "city": "Recife"
    }

    const occurrence5 = {
      "date": "2021-04-01T13:28:12.233Z",
      "needsPsychologicalAssistance": "true",
      "urgencyLevel": "2",
      "city": "Olinda"
    }

    const occurrence6 = {
      "date": "2021-02-13T21:51:14.672Z",
      "needsSecurityAssistance": "true",
      "urgencyLevel": "1",
      "city": "Recife"
    }

    const occurrence7 = {
      "date": "2021-03-19T10:45:28.934Z",
      "needsMedicalAssistance": "true",
      "needsPsychologicalAssistance": "true",
      "urgencyLevel": "5",
      "city": "Jaboatão"
    }

    const occurrence8 = {
      "date": "2021-02-10T12:42:07.193Z",
      "needsSecurityAssistance": "true",
      "urgencyLevel": "4",
      "city": "Olinda"
    }

    const occurrence9 = {
      "date": "2021-01-13T18:38:17.485Z",
      "needsSecurityAssistance": "true",
      "urgencyLevel": "3",
      "city": "Olinda"
    }

    const occurrence10 = {
      "date": "2021-01-27T22:18:53.823Z",
      "needsMedicalAssistance": "true",
      "needsSecurityAssistance": "true",
      "needsPsychologicalAssistance": "true",
      "urgencyLevel": "5",
      "city": "Recife"
    }


    try {
      const newOccurrence1 = new Occurrence(occurrence1);
      const createOccurrence1 = await newOccurrence1.save();

      const newOccurrence2 = new Occurrence(occurrence2);
      const createOccurrence2 = await newOccurrence2.save();

      const newOccurrence3 = new Occurrence(occurrence3);
      const createOccurrence3 = await newOccurrence3.save();

      const newOccurrence4 = new Occurrence(occurrence4);
      const createOccurrence4 = await newOccurrence4.save();

      const newOccurrence5 = new Occurrence(occurrence5);
      const createOccurrence5 = await newOccurrence5.save();

      const newOccurrence6 = new Occurrence(occurrence6);
      const createOccurrence6 = await newOccurrence6.save();

      const newOccurrence7 = new Occurrence(occurrence7);
      const createOccurrence7 = await newOccurrence7.save();

      const newOccurrence8 = new Occurrence(occurrence8);
      const createOccurrence8 = await newOccurrence8.save();

      const newOccurrence9 = new Occurrence(occurrence9);
      const createOccurrence9 = await newOccurrence9.save();

      const newOccurrence10 = new Occurrence(occurrence10);
      const createOccurrence10 = await newOccurrence10.save();

      const occurrencesList = {
        occurrence1,
        occurrence2,
        occurrence3,
        occurrence4,
        occurrence5,
        occurrence6,
        occurrence7,
        occurrence8,
        occurrence9,
        occurrence10
      }
      return res.send(newOccurrence10);
    
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
