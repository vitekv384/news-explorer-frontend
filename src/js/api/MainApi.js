export default class MainApi {
  constructor(config) {
    this.url = config.baseUrl;
    this.headers = config.headers;
  }

  signup() {
    return fetch(`${this.url}/signup`, {
      metod: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data[0].value,
        password: data[1].value,
        name: data[2].value,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)))
      .catch((error) => error.json());
  }
}
