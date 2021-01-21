export default class MainApi {
  constructor(config) {
    this.url = config.baseUrl;
    this.headers = config.headers;
  }

  signup(data) {
    return fetch(`${this.url}/signup`, {
      method: 'POST',
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
      .then(() => 'registred')
      .catch((error) => error.json());
  }

  signin(data) {
    return fetch(`${this.url}/signin`, {
      metod: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data[0].value,
        password: data[1].value,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)))
      .then((data) => {
        localStorage.setItem('token', data.token);
        return this.getUserData().then((data) => { localStorage.setItem('userName', data.user.name); return 'autorized'; });
      })
      .catch((error) => error.json());
  }

  getUserData() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)))
      .then((data) => data)
      .catch((error) => error.json());
  }

  getArticles() {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((articles) => {
        const keywords = [];
        articles.forEach((article) => {
          keywords.push(article.keyword);
          article.key = article.keyword;
        });
        const data = {
          articles,
          keywords,
        };
        return data;
      })
      .catch(() => false);
  }
}
