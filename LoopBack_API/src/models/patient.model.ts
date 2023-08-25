import {Entity, model, property} from '@loopback/repository';

@model()
export class Patient extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idPatient?: number;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'date',
    required: true,
  })
  DOB: string;

  @property({
    type: 'string',
    required: true,
  })
  sex: string;
  
  @property({
    type: 'string',
    required: true,
  })
  providerName: string;


  constructor(data?: Partial<Patient>) {
    super(data);
  }

  
}

export interface PatientRelations {
  // describe navigational properties here
}

export type PatientWithRelations = Patient & PatientRelations;
