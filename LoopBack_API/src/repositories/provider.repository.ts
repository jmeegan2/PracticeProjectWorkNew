import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Provider, ProviderRelations} from '../models';

export class ProviderRepository extends DefaultCrudRepository<
  Provider,
  typeof Provider.prototype.ID,
  ProviderRelations
> {
  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource,
  ) {
    super(Provider, dataSource);
  }
}
