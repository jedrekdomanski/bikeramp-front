import CrudService from './crud.service'

export default class RideService extends CrudService {
  constructor() {
    super('trips');
  }
}