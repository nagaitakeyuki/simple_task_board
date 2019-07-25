import $http from '../utils/http'

export default class {
  constructor(resource) {
    this.resource = resource
  }

  async ajax({type = 'get', path = '', body = null}) {
    const {data} = await $http[type](this.resource + path, body)
    return data
  }

  async get(path = '') {
    return await this.ajax({path})
  }

  async post(body, path = '') {
    return await this.ajax({type: 'post', body, path})
  }

  async delete(path) {
    return await this.ajax({type: 'delete', path})
  }
}
