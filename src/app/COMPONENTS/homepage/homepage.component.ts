import { Component, forwardRef } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DbService } from '../../SERVICES/db.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    MatTableModule,
    HttpClientModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],

  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  //pos temporanea per la modifica
  pos: number;

  //variabile che mi aiuta a capire quando mostrare il form o meno
  action: string = 'Visualizza';

  //per il form
  actionForm: FormGroup;

  //dove vanno a finire i dati della get
  dataSource: any[];

  displayedColumns: string[] = [
    'id',
    'title',
    'desc',
    'status',
    'contentType',
    'dateCreated',
    'dateUpdated',
    'url',
    'actions',
  ];

  constructor(private dbService: DbService, private formBuilder: FormBuilder) {
    this.actionForm = this.formBuilder.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
      status: ['', Validators.required],
      contentType: ['', Validators.required],
      dateCreated: ['', Validators.required],
      dateUpdated: [''],
      url: [''],
    });
  }

  ngOnInit() {
    this.dbService.getData().subscribe({
      next: (result) => {
        console.log('Get Andata a buon fine');
        this.dataSource = Object.values(result);
        console.log(this.dataSource);
      },
      error: (error) => {
        console.log('Get non riuscita, ' + error);
      },
    });
  }

  //qui creo dei metodi per cambiare la visualizzazione e mostrare il form
  changeViewAdd(): void {
    this.action = 'Aggiungi';
  }

  changeViewMod(pos: any): void {
    this.action = 'Modifica';
    this.pos = pos;
  }

  changeViewVisual(): void {
    this.action = 'Visualizza';
  }

  //add
  sendForm() {
    if (this.action === 'Aggiungi') {
      this.dbService.postData(this.actionForm.value).subscribe({
        next: (result) => {
          console.log('Post Avvenuta con successo');
          this.update();
        },
        error: (error) => {
          console.log('Post non avvenuta con successo.');
        },
      });
    }

    if (this.action === 'Modifica') {
      this.actionForm.value.id = this.dataSource.at(this.pos).id;
      this.dbService
        .putData(this.dataSource.at(this.pos).id, this.actionForm.value)
        .subscribe({
          next: (result) => {
            console.log('Put Avvenuta');
            this.update();
          },
          error: (error) => {
            console.log('Put non avvenuta');
          },
        });
    }
    this.action = 'Visualizza';
  }

  //delete method
  deleteByPos(pos: number) {
    this.dbService.deleteData(this.dataSource.at(pos).id).subscribe({
      next: (result) => {
        console.log('Delete Avvenuta');
        this.update();
      },
      error: (error) => {
        console.log('Delete non funzionante');
      },
    });
    this.action = 'Visualizza';
  }

  update() {
    this.dbService.getData().subscribe({
      next: (result) => {
        console.log('Get Andata a buon fine');
        this.dataSource = Object.values(result);
        console.log(this.dataSource);
      },
      error: (error) => {
        console.log('Get non riuscita, ' + error);
      },
    });
  }
}
