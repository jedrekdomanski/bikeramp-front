import ApiService from './api.service';

export default class CrudService {

    /**
     * Create a crud service for the specified resource.
     *
     * @param {string} resource
     */
    constructor(resource) {
      this.api = new ApiService(resource);
    }

    /**
     * Fetch the specified record.
     *
     * @param {number} id
     * @returns {Promise}
     */
    fetch(id) {
      return this.api.get(id);
    }

    /**
     * Create a record.
     *
     * @param {Object} data
     * @returns {Promise}
     */
    create(data) {
      return this.api.post('', data);
    }

    /**
     * Update the specified record.
     *
     * @param {number} id
     * @param {Object} data
     * @returns {Promise}
     */
    update(id, data) {
      return this.api.patch(id, data);
    }

    /**
     * Delete the specified record.
     *
     * @param {number} id
     * @returns {Promise}
     */
    destroy(id) {
      return this.api.delete(id);
    }

};