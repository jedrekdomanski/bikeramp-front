import ApiService from './api.service';

export default class AuthService {

  constructor() {
    this.api = new ApiService('login');
  }

  fetchCurrentUser() {
    return this.api.get('user');
  }

  logout() {
    return this.api.post('logout');
  }

};