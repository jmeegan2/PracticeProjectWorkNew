import {Entity, model, property} from '@loopback/repository';

@model()
export class Provider extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  providerName: string;

  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  ID: number;


  constructor(data?: Partial<Provider>) {
    super(data);
  }
}

export interface ProviderRelations {
  // describe navigational properties here
}

export type ProviderWithRelations = Provider & ProviderRelations;
