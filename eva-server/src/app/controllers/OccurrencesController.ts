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
        console.log("Erro ao listar ocorrências!\n" + err);
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
      console.log("Erro ao inserir ocorrências!\n" + err);
      return res.send(err);
    }
  } 

  async countByUrgencyInDate(req: Request, res: Response){

    try {
      const dateFilter: string = req.query.dateFilter as string;

      const occurrencesAggregated = await Occurrence.aggregate([
        {
          $project: {
            "date_str": { 
              "$dateToString": { 
                      "format": "%Y-%m-%d", 
                      "date": "$date" 
              } 
            },
            urgencyLevel: "$urgencyLevel",
            date: "$date"
          }
        },
        {
          $match: {
            date_str: dateFilter
          }
        },
        {
          $group: {
            _id: "$urgencyLevel",
            countOccurrences: { $sum : 1 }
          }
        }
      ])
      
      return res.send(occurrencesAggregated);
    
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro ao agregar ocorrências por data!\n" + err);
      return res.send(err);
    }
  }

  async filterByDateRange(req: Request, res: Response){
    try {
      const startDate: Date = new Date(req.query.startDate as string);
      const endDate: Date = new Date(req.query.endDate as string);

      const occurrenceFiltered = await Occurrence.find({  
        "date": {
          $gte: startDate,
          $lt: endDate,      
        }
      });
      
      return res.send(occurrenceFiltered);
    
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro ao filtrar ocorrências por datas!\n" + err);
      return res.send(err);
    }
  }

  async countByTypeInYear(req: Request, res: Response){

    try {
      const yearFilter: Number = parseInt(req.query.yearFilter as string);

      const occurrencesAggregated = await Occurrence.aggregate([
        {
          $project: {
            year: { $year: "$date" },
            typePsy: "$needsPsychologicalAssistance",
            typePol: "$needsSecurityAssistance",
            typeMed: "$needsMedicalAssistance"
          }
        },
        {
          $match: {
            year: yearFilter
          }
        },
        {
          $group: {
            _id: "$year",
            countMedOccurrences: { $sum : { $cond: ["$typeMed", 1, 0]} },
            countPolOccurrences: { $sum : { $cond: ["$typePol", 1, 0]} },
            countPsyOccurrences: { $sum : { $cond: ["$typePsy", 1, 0]} }
          }
        }
      ])
      
      return res.send(occurrencesAggregated);
    
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro ao agregar ocorrências por ano!\n" + err);
      return res.send(err);
    }
  }
  
}

export default new OccurrencesController();
