import { Component, OnInit } from '@angular/core';
import { Patient } from '../../api/models/patient'; // Import the Patient interface
import { PatientControllerService } from '../../api/services/patient-controller.service'; // Import the service

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.scss']
})
export class AllPatientsComponent implements OnInit {

  patients: Patient[] = []; // Initialize the patients array

  constructor(private patientService: PatientControllerService) { }

  ngOnInit(): void {
    this.getPatients(); // Call the getPatients method on initialization
  }

  getPatients(): void {
    this.patientService.find().subscribe(patients => this.patients = patients); // Subscribe to the service to get patients
  }
}



// export class TodolistComponent implements OnInit {
//   // add `todos` variable which holds the todo list 
//   todos: Todo[];
//   // add a todoService parameter of type TodoControllerService to the constructor
//   constructor(private todoService: TodoControllerService) { }
//   // update this method to get the todo list on init
//   ngOnInit(): void {
//      this.getTodos();
//   }
//   // add a new function getTodos to get the todo list from the service
//   getTodos(): void {
//      this.todoService.findTodos().subscribe(todos => this.todos = todos);
//   }
// }