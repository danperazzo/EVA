import * as Yup from "yup";
//import _ from 'lodash';
import mongoose from 'mongoose';
import { Request, Response } from 'express';
import * as Sentry from '@sentry/node';
import  {Occurrence} from '../schemas/OccurrencesModel';
import {Institution} from '../schemas/InstitutionsModel'
import {occurrencesList} from '../mocks/occurrencesData';

export class OccurrencesController {

/* lista todos as ocorrencias */

    async postOccurrence(req: Request, res: Response) {
    const {
      city,
      date,
      needsMedicalAssistance,
      needsSecurityAssistance,
      needsPsychologicalAssistance,
      urgencyLevel,
    } = req.body;

    const data = {
      date,
      needsMedicalAssistance,
      needsSecurityAssistance,
      needsPsychologicalAssistance,
      urgencyLevel,
      city,
    };

    const newOccurrence = new Occurrence(data);

    const createdInstitution = await newOccurrence.save();

    var to_filter = [];

    if (needsPsychologicalAssistance) {
      to_filter.push("Psi");
    }

    if (needsMedicalAssistance) {
      to_filter.push("Med");
    }

    if (needsSecurityAssistance) {
      to_filter.push("Pol");
    }



    try {
      const institutionList = await Institution.find({
        type: { $in: to_filter },
        "address.city": city,
      })
      
      return res.send(institutionList);
    } catch (err) {
      Sentry.captureException(err);
      return res.send(err);
    }
  }

  async index(req: Request, res: Response) {
    try {
      const occurrenceList = await Occurrence.find({})
        .select(
          "_id date needsMedicalAssistance needsSecurityAssistance needsPsychologicalAssistance urgencyLevel city"
        )
        .sort({ date: "desc" });

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
      });
      return res.send(newOccurrence);
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro ao inserir ocorrências!\n" + err);
      return res.send(err);
    }
  }

  async store(req: Request, res: Response) {
    try {
      let receivedOccurrence;
      let receivedOccurrences = req.body;
      receivedOccurrences.map(async (occurrence: any) => {
        receivedOccurrence = new Occurrence(occurrence);
        let createOccurrence = await receivedOccurrence.save();
      });
      return res.send(receivedOccurrence);
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro ao inserir ocorrênfcias!\n" + err);
      return res.send(err);
    }
  }

  async dropTable(req: Request, res: Response) {
    try {
      const tableDeleted = await Occurrence.remove({}, function (err) {
        console.log("collection removed");
      });

      return res.send(tableDeleted);
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro ao deletar a tabela!\n" + err);
      return res.send(err);
    }
  }

  async countByUrgencyInDateRange(req: Request, res: Response) {
    try {
      let startDate_str =
        (req.query.startDate as string) + "T00:00:00.000+0000";
      let endDate_str = (req.query.endDate as string) + "T23:59:59.999+0000";

      const startDate: Date = new Date(Date.parse(startDate_str));
      const endDate: Date = new Date(Date.parse(endDate_str));

      const occurrencesAggregated = await Occurrence.aggregate([
        {
          $project: {
            urgencyLevel: "$urgencyLevel",
            date: "$date",
          },
        },
        {
          $match: {
            date: {
              $gte: startDate,
              $lt: endDate,
            },
          },
        },
        {
          $group: {
            _id: "$urgencyLevel",
            countOccurrences: { $sum: 1 },
          },
        },
      ]);
      return res.send(occurrencesAggregated);
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro ao agregar ocorrências por data!\n" + err);
      return res.send(err);
    }
  }

  async filterByDateRange(req: Request, res: Response) {
    try {
      const startDate: Date = new Date(req.query.startDate as string);
      const endDate: Date = new Date(req.query.endDate as string);


      const occurrenceFiltered = await Occurrence.find({
        date: {
          $gte: startDate,
          $lt: endDate,
        },
      });

      return res.send(occurrenceFiltered);
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro ao filtrar ocorrências por datas!\n" + err);
      return res.send(err);
    }
  }

  async countByTypeInYear(req: Request, res: Response) {
    try {
      const yearFilter: Number = parseInt(req.query.yearFilter as string);

      const occurrencesAggregated = await Occurrence.aggregate([
        {
          $project: {
            year: { $year: "$date" },
            typePsy: "$needsPsychologicalAssistance",
            typeSec: "$needsSecurityAssistance",
            typeMed: "$needsMedicalAssistance",
          },
        },
        {
          $match: {
            year: yearFilter,
          },
        },
        {
          $group: {
            _id: "$year",
            countMedOccurrences: { $sum: { $cond: ["$typeMed", 1, 0] } },
            countSecOccurrences: { $sum: { $cond: ["$typeSec", 1, 0] } },
            countPsyOccurrences: { $sum: { $cond: ["$typePsy", 1, 0] } },
          },
        },
      ]);

      return res.send(occurrencesAggregated);
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro ao agregar ocorrências por ano!\n" + err);
      return res.send(err);
    }
  }
}

export default new OccurrencesController();
