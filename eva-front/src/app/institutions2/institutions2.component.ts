import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institutions2',
  templateUrl: './institutions2.component.html',
  styleUrls: ['./institutions2.component.css'],
})
export class Institutions2Component implements OnInit {
  institution: { name: string };
  institutions: { name: string }[] = [
    { name: 'Hospital das Clínicas' },
    { name: 'Delegacia da Mulher' },
    { name: 'Delegacia da Mulher' },
    { name: 'Delegacia da Mulher' },
    { name: 'Delegacia da Mulher' },
  ];

  constructor() {
    this.institution = this.institutions[0];
  }

  ngOnInit(): void {}
}
