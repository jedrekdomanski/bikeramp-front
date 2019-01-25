import CrudService from './crud.service'

export default class UserService extends CrudService {
  constructor() {
    super('users');
  }
  
  fetchCurrentUser(){
    let id = JSON.parse(localStorage.getItem('user')).id
    return this.api.get(id)
  }
}