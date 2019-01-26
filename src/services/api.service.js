import axios from 'axios';

export default class ApiService {
  constructor(resource = '/') {
    this.address = '/api/' + resource + '/';
  }

  get(uri, query = {}) {
    return this.$send(uri, 'get', query);
  }

  post(uri, data = {}) {
    return this.$send(uri, 'post', data);
  }

  patch(uri, data) {
    return this.$send(uri, 'patch', data);
  }

  delete(uri, query = {}) {
    return this.$send(uri, 'delete', query);
  }

  $send(uri, method, data) {
    let params = {};

    if (method === 'get' || method === 'delete') {
      params = data;

      data = {};
    }

    return axios({
              url: this.address + uri,
              method,
              data,
              params,
           })       
  }
}