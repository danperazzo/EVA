
import { Request, Response } from 'express';
import * as Sentry from '@sentry/node';
import  {Address} from '../schemas/AddressModel';

class AddressesController {

/* lista todos os endereços */
  async index(req: Request, res: Response) {

    try {
        const addressesList = await Address.find({  
        })
        .select('_id street number postalCode city')
        .sort({ city: 'asc' });
        
        return res.send(addressesList);
      
      } catch (err) {
        Sentry.captureException(err);
        console.log("Erro: Endereços não listados");
        return res.send(err);
      }
    }

/* cria endereços */
  async store(req: Request, res: Response) {

    const address1 = {
        "adress_id":"1",
        "street": "Rua das Pernambucanas",
        "number": "407",
        "postalCode": "52011-010",
        "city": "Recife"
    }

    const address2 = {
        "adress_id":"2",
        "street": "Rua Dr. Arthur Gonçalves",
        "number": "46",
        "postalCode": "50610-560",
        "city": "Recife"
    }

    const address3 = {
        "adress_id":"3",
        "street": "Rua Beco do Batman",
        "number": "233",
        "postalCode": "81811-123",
        "city": "Jaboatão dos Guararapes"
    }

    const address4 = {
        "adress_id":"4",
        "street": "Galeria Cordeiro - Praça Doze de Março",
        "number": "23",
        "postalCode": "53030-110",
        "city": "Olinda"
    }

    const address5 = {
        "adress_id":"5",
        "street": "Av. Pres. Getúlio Varga",
        "number": "999",
        "postalCode": "53030-010",
        "city": "Olinda"
    }

    try {
      const newAddress1 = new Address(address1);
      

      /*
      const streetAdd = newAddress1.street;
      const existingAddress = await Address.find({ 
        street: streetAdd});
        if(existingAddress){
          console.log("endereço ja cadastrado")
        }
      */
      const createdAddress1 = await newAddress1.save();

      const newAddress2 = new Address(address2);
      const createdAddress2 = await newAddress2.save();

      const newAddress3 = new Address(address3);
      const createdAddress3 = await newAddress3.save();

      const newAddress4 = new Address(address4);
      const createdAddress4 = await newAddress4.save();

      const newAddress5 = new Address(address5);
      const createdAddress5 = await newAddress5.save();
      
      const addressesList = {
        address1, address2, address3, address4, address5
      }
      return res.send(newAddress5);
    
    } catch (err) {
      Sentry.captureException(err);
      console.log("Erro: Endereço não criado");
      return res.send(err);
    }
  } 

/*
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
  */ 
}

export default new AddressesController();
