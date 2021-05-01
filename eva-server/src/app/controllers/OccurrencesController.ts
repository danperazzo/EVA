import * as Yup from 'yup';
//import _ from 'lodash';
import mongoose from 'mongoose';
import { Request, Response } from 'express';
import * as Sentry from '@sentry/node';
import  {Occurrence} from '../schemas/OccurrencesModel';
import {occurrencesList} from '../mocks/occurrencesData';

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

/* Inicializa o DB com dados mockados de ocorrências */
  async storeMocks(req: Request, res: Response) {

    try {
      let newOccurrence;
      occurrencesList.map(async (occurrence) => {
        console.log(occurrence);

        newOccurrence = new Occurrence(occurrence);
        let createOccurrence = await newOccurrence.save();
      })
      return res.send(newOccurrence);
    
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro: Ocorrência não criada");
      return res.send(err);
    }
  } 

  async getByUrgencyLevel(req: Request, res: Response){

    try {
      const urgencyLevel: string = req.query.urgencyLevel as string

      const occurrencesFiltered = await Occurrence.find( { urgencyLevel: urgencyLevel } )
      .select('_id date needsMedicalAssistance needsSecurityAssistance needsPsychologicalAssistance urgencyLevel city')
      .sort({ date: 'desc' });
      
      return res.send(occurrencesFiltered);
    
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro: Ocorrência não criada");
      return res.send(err);
    }
  }

  // async getById(req: Request, res: Response) {
  //   //const { id } = req.params.id;
  //   try {
      
  //     const occurrenceById = await Occurrence.findOne({
  //       _id:req.params.id
  //     });
  //     //console.log(occurrenceById);
      
  //     return res.send(occurrenceById);
  //   } catch (err) {
  //     Sentry.captureException(err);
  //     console.log("Erro: Ocorrência não encontrada");
  //     return res.send(err);
  //   }
  // } 
}

export default new OccurrencesController();
