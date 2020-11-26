import axios from 'axios';

export default class RequestFactory {
  constructor({ baseUrl, auth, headers, timeout } = {}) {
    this.axios = axios.create({
      baseURL: baseUrl || '',
      auth: auth || null,
      headers: headers || null,
      timeout: timeout || 10000,
    });
  }

  getInstance() {
    return this.axios;
  }

  post(
    url = null,
    data = null,
    config = { auth: null, headers: {}, timeout: this.timeout }
  ) {
    return this.axios.post(url, data, config).then(result => result.data);
  }

  get(url = null, config = { auth: {}, headers: {} }) {
    return this.axios.get(url, config).then(result => result.data);
  }

  put(url = null, data = null, config = { auth: {}, headers: {} }) {
    return this.axios.put(url, data, config).then(result => result.data);
  }

  patch(url = null, data = null, config = { auth: {}, headers: {} }) {
    return this.axios.patch(url, data, config).then(result => result.data);
  }

  delete(url = null, config = { auth: {}, headers: {} }) {
    return this.axios.delete(url, config).then(result => result.data);
  }
};
