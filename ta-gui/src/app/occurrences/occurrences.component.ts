import { Component, OnInit } from '@angular/core';
import { AdminServices } from './admin.service';
import { Occurrence } from '../../../common/models';

  @Component({
   selector: 'occurrences',
   templateUrl: './occurrences.component.html',
   styleUrls: ['./occurrences.component.css']
 })
export class OccurrencesComponent implements OnInit {
  occurrences: Occurrence[] = [];
  cpfduplicado: boolean = false;
   
  constructor(private adminService: AdminServices) {}

  addOccurrence(occurence: Occurrence){}

  filterOccurrencesByYear(year: number) {}
  filterOccurrenceByDateRange(from : Date, to : Date) {}
  filterOcurrencesByUrgencyLevel(urgencyLevel : number) {}
   
  ngOnInit(): void {}  
  
  /*  criarAluno(a: Occurrence): void {
       /* Clone feito para que atraso na resposta da requisição
          não permita que alterações feitas no textfield após a
          solicitação do cadastro afetem o objeto ar a ser 
          adicionado ao array.
          
          Sem o clone, a e ar estariam apontando para o mesmo
          objeto apontado por this.alunos. Qualquer mudança nos
          campos de texto são refletidas no objeto apontado por 
          this.alunos, e consequentemente seriam também 
          refletidas em ar.
        */  
      //  this.alunoService.criar(a.clone())
      //        .subscribe(
      //           ar => {
      //             if (ar) {
      //               this.alunos.push(ar);
      //               this.aluno = new Aluno();
      //             } else {
      //               this.cpfduplicado = true;
      //             } 
      //           },
      //           msg => { alert(msg.message); }
      //         );    
    //} 
/*
    onMove(): void {
       this.cpfduplicado = false;
    }
*/
     /* Executado após clicar no botão Alunos, 
        mas logo antes é feita a inicialização dos 
        atributos do componente.  
      */

        /*
     ngOnInit(): void {
       this.alunoService.getAlunos()
             .subscribe(
               as => { this.alunos = as; },
               msg => { alert(msg.message); }
              );
     }
     */

     

  }