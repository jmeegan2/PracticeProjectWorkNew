import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    name: 'user_credentials', // Correct table name here
  },
})
export class UserCredentials extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  iduser_credentials?: number;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;


  constructor(data?: Partial<UserCredentials>) {
    super(data);
  }
}

export interface UserCredentialsRelations {
  // describe navigational properties here
}

export type UserCredentialsWithRelations = UserCredentials & UserCredentialsRelations;
