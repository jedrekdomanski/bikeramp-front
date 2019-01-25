import CrudService from './crud.service'

export default class InvoiceService extends CrudService {
  constructor() {
    super('invoices');
  }
}