import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Patient, PatientRelations} from '../models';

export class PatientRepository extends DefaultCrudRepository<
  Patient,
  typeof Patient.prototype.idPatient,
  PatientRelations
> {
  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource,
  ) {
    super(Patient, dataSource);
  }
}
