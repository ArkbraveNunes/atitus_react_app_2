import RequestFactory from '../factory/request-factory';

export default class StarWarsService {
  constructor() {
    this.headers = {};
    this.baseUrl = `https://swapi.dev/api/`;
    this.axios = new RequestFactory({
      baseUrl: this.baseUrl,
    });
  }

  async defaultGetRequest(url, customHeaders = {}) {
    try {
      const result = await this.axios.get(url, {
        headers: { ...this.headers, ...customHeaders },
      });
      return result;
    } catch (error) {
        console.log(error)
    }
  }

  async getFilms() {
    const url = `films/`;
    return this.defaultGetRequest(url);
  }

  async getStarships() {
    const url = `starships/`;
    return this.defaultGetRequest(url);
  }

  async getPeople() {
    const url = `people/`;
    return this.defaultGetRequest(url);
  }

  async getPlanets() {
    const url = `planets/`;
    return this.defaultGetRequest(url);
  }

  async getSpecies() {
    const url = `species/`;
    return this.defaultGetRequest(url);
  }
};
