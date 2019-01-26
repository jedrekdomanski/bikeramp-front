import ApiService from './api.service';

export default class AuthService {

  constructor() {
    this.api = new ApiService('auth');
  }

  login(data) {
    return this.api.post('login', data)
  }

  signup(data) {
    return this.api.post('', data)
  }
};