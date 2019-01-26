import CrudService from './crud.service'

export default class StatisticsService extends CrudService {
  constructor() {
    super('stats');
  }

  ridesForCurrentWeek() {
    return this.api.get('current_week')
  }
  
  ridesForCurrentYear() {
    return this.api.get('monthly')
  }
}