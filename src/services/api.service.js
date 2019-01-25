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
             .then((response) => response.data)
             .catch((error) => {
              console.log(error)
                this.$errorHandler(error.response.data);
                throw error;
            });
  }

  /**
   * Handle all errors coming from a response.
   *
   * @param {Object} data
   */
  $errorHandler(data) {
      let message;
      let stack = [];

      if (data.message) {
          message = data.message;
      } else {
          message = 'Your request could not be processed correctly.';
      }

      if (data.errors) {
          for (const field of Object.values(data.errors)) {
              stack.push(...field);
          }
      }

      flashError(message, stack);
  }
}