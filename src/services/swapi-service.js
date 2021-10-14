export default class SwapiService {
  _apiBase = 'https://swapi.dev/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if(!res.ok) throw new Error(`Could not fetch ${url}`);
    const body = await res.json();
    return body;
  }

  getPersonImage = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`
  }

  getStarShipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`
  }

  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
     return res.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
     return res.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  getAllStarShips = async () => {
    const res = await this.getResource(`/starships/`);
     return res.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
    const starShip = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starShip);
  }

  _extractId (item) {
    return item.split("/").slice(-2, -1).join();
  }

  _transformPlanet = (planetData) => {
    return {
      id: this._extractId(planetData.url),
      name: planetData.name,
      population: planetData.population,
      rotationPeriod: planetData.rotation_period,
      diameter: planetData.diameter
    }
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship.url),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person.url),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }

}
