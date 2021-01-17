import { TVSeries, Prize, Studio, Actor, Filmmaker, Series, Season } from "./types";
import {v4 as uuid4} from 'uuid'
export const getRandomIndex = (maxIndex = 5) => Math.floor(Math.random() * 100 % maxIndex);

export const MOCK_PRIZES: Prize[] = [
  {
    id: uuid4(),
    title: 'Золотая статуэтка',
    firstPresentation: new Date(),
    country: 'Россия'
  },
  {
    id: uuid4(),
    title: 'Золотой глобус',
    firstPresentation: new Date(),
    country: 'Польша'
  },
  {
    id: uuid4(),
    title: 'Берлинский орел',
    firstPresentation: new Date(),
    country: 'Германия'
  },
  {
    id: uuid4(),
    title: "Оскар",
    firstPresentation: new Date(),
    country: "США"
  },
  {
    id: uuid4(),
    title: "Прутиковый оскар",
    firstPresentation: new Date(),
    country: 'Вьетнам'
  }
];

export const MOCK_STUDIOS: Studio[] = [
  {
    id: uuid4(),
    dateCreate: new Date(),
    site: 'https://sonypictures.ru/',
    name: 'Sony Pictures',
    chief: 'Иванов Иван Иванович',
    country: "США"
  },
  {
    id: uuid4(),
    dateCreate: new Date(),
    site: 'https://sonypictures.ru/',
    name: 'Мосфильм',
    chief: 'Кирилл Кирилл Кириллович',
    country: "Россия"
  },
  {
    id: uuid4(),
    dateCreate: new Date(),
    site: 'https://sonypictures.ru/',
    name: 'Netflix',
    chief: 'Максимов Максим Максимович',
    country: "США"
  },
  {
    id: uuid4(),
    dateCreate: new Date(),
    site: 'https://sonypictures.ru/',
    name: 'Amazon Origins',
    chief: 'Безис Джек',
    country: "США"
  },
  {
    id: uuid4(),
    dateCreate: new Date(),
    site: 'https://sonypictures.ru/',
    name: 'More TV',
    chief: 'Петров Олег Юрьевич',
    country: "Россия"
  }
];

export const MOCK_ACTORS: Actor[] = [
  {
    id: uuid4(),
    name: "Кирилл Петрович Боярышников",
    birthday: new Date(),
    gender: 'male',
    prizes: [1,2,3].map(() => MOCK_PRIZES[getRandomIndex()])
  },
  {
    id: uuid4(),
    name: "Петров Кирилл Бобиков",
    birthday: new Date(),
    gender: 'male',
    prizes: [1,2,3].map(() => MOCK_PRIZES[getRandomIndex()])
  }, 
  {
    id: uuid4(),
    name: "Ирина Александрова Акулова",
    birthday: new Date(),
    gender: 'female',
    prizes: [1,2,3].map(() => MOCK_PRIZES[getRandomIndex()])
  },
  {
    id: uuid4(),
    name: "Кристина Обходова",
    birthday: new Date(),
    gender: 'female',
    prizes: [1,2,3].map(() => MOCK_PRIZES[getRandomIndex()])
  },
  {
    id: uuid4(),
    name: "Михаил Рачков",
    birthday: new Date(),
    gender: 'male',
    prizes: [1,2,3].map(() => MOCK_PRIZES[getRandomIndex()])
  }
];

export const MOCK_FILMMAKERS: Filmmaker[] = [
  {
    id: uuid4(),
    name: 'Стивен Кубрик',
    birthday: new Date(),
    genre: "Комедия",
    country: "США",
    prizes: [1,2,3].map(() => MOCK_PRIZES[getRandomIndex()])
  },
  {
    id: uuid4(),
    name: 'Никита Михаклов',
    birthday: new Date(),
    genre: "Боевик",
    country: "Россия",
    prizes: [1,2,3].map(() => MOCK_PRIZES[getRandomIndex()])
  },
  {
    id: uuid4(),
    name: 'Тимур Бекмамбетов',
    birthday: new Date(),
    genre: "Боевик",
    country: "Россия",
    prizes: [1,2,3].map(() => MOCK_PRIZES[getRandomIndex()])
  },
  {
    id: uuid4(),
    name: 'Джон Доу',
    birthday: new Date(),
    genre: "Мелодрама",
    country: "Финляндия",
    prizes: [1,2,3].map(() => MOCK_PRIZES[getRandomIndex()])
  },
  {
    id: uuid4(),
    name: 'Сергей Серебряников',
    birthday: new Date(),
    genre: "Драма",
    country: "Россия",
    prizes: [1,2,3].map(() => MOCK_PRIZES[getRandomIndex()])
  },
  {
    id: uuid4(),
    name: 'Роберт Вейд',
    birthday: new Date(),
    genre: "Ужасы",
    country: "Англия",
    prizes: [1,2,3].map(() => MOCK_PRIZES[getRandomIndex()])
  },
  {
    id: uuid4(),
    name: 'Квентин Тарантино',
    birthday: new Date(),
    genre: "Боевик",
    country: "США",
    prizes: [1,2,3].map(() => MOCK_PRIZES[getRandomIndex()])
  }
];

export const MOCK_SERIES: Series[] = [
  {
    id: uuid4(),
    title: 'Пролог',
    actors: [1,2,3].map(() => MOCK_ACTORS[getRandomIndex()]),
    fillmakers: [1,2,3].map(() => MOCK_FILMMAKERS[getRandomIndex(7)]),
    premiere: new Date(),
    raiting: 5.1,
    trailer: 'https://www.youtube.com/watch?v=BmPUqg8A4PM',
    cover: 'Россия'
  },
  {
    id: uuid4(),
    title: 'Начало',
    actors: [1,2,3].map(() => MOCK_ACTORS[getRandomIndex()]),
    fillmakers: [1,2,3].map(() => MOCK_FILMMAKERS[getRandomIndex(7)]),
    premiere: new Date(),
    raiting: 8.1,
    trailer: 'https://www.youtube.com/watch?v=BmPUqg8A4PM',
    cover: 'США'
  },
  {
    id: uuid4(),
    title: 'Предательство Джо',
    actors: [1,2,3].map(() => MOCK_ACTORS[getRandomIndex()]),
    fillmakers: [1,2,3].map(() => MOCK_FILMMAKERS[getRandomIndex(7)]),
    premiere: new Date(),
    raiting: 10,
    trailer: 'https://www.youtube.com/watch?v=BmPUqg8A4PM',
    cover: 'Армения'
  },
  {
    id: uuid4(),
    title: 'Сладкая Ложь',
    actors: [1,2,3].map(() => MOCK_ACTORS[getRandomIndex()]),
    fillmakers: [1,2,3].map(() => MOCK_FILMMAKERS[getRandomIndex(7)]),
    premiere: new Date(),
    raiting: 3,
    trailer: 'https://www.youtube.com/watch?v=BmPUqg8A4PM',
    cover: 'Финляндия'
  },
  {
    id: uuid4(),
    title: 'The End',
    actors: [1,2,3].map(() => MOCK_ACTORS[getRandomIndex()]),
    fillmakers: [1,2,3].map(() => MOCK_FILMMAKERS[getRandomIndex(7)]),
    premiere: new Date(),
    raiting: 7.8,
    trailer: 'https://www.youtube.com/watch?v=BmPUqg8A4PM',
    cover: 'Эстония'
  }
];

export const MOCK_SEASONS: Season[] = [
  {
    id: uuid4(),
    startDate: new Date(),
    releaseDate: new Date(),
    series: [1,2,3].map(() => MOCK_SERIES[getRandomIndex()]),
    title: "Жуткая правда",
    premiere: new Date(),
    raiting: 3,
    trailer: 'https://www.youtube.com/watch?v=BmPUqg8A4PM',
    cover: 'Россия'
  }, 
  {
    id: uuid4(),
    startDate: new Date(),
    releaseDate: new Date(),
    series: [1,2,3].map(() => MOCK_SERIES[getRandomIndex()]),
    title: "Вкусная ложь",
    premiere: new Date(),
    raiting: 6,
    trailer: 'https://www.youtube.com/watch?v=BmPUqg8A4PM',
    cover: 'Сша'
  },
  {
    id: uuid4(),
    startDate: new Date(),
    releaseDate: new Date(),
    series: [1,2,3].map(() => MOCK_SERIES[getRandomIndex()]),
    title: "Безисходность",
    premiere: new Date(),
    raiting: 9,
    trailer: 'https://www.youtube.com/watch?v=BmPUqg8A4PM',
    cover: 'Финляндия'
  },
  {
    id: uuid4(),
    startDate: new Date(),
    releaseDate: new Date(),
    series: [1,2,3].map(() => MOCK_SERIES[getRandomIndex()]),
    title: "Убийца в погонах",
    premiere: new Date(),
    raiting: 4,
    trailer: 'https://www.youtube.com/watch?v=BmPUqg8A4PM',
    cover: 'Франция'
  },
  {
    id: uuid4(),
    startDate: new Date(),
    releaseDate: new Date(),
    series: [1,2,3].map(() => MOCK_SERIES[getRandomIndex()]),
    title: "Сахарная зависимость ",
    premiere: new Date(),
    raiting: 10,
    trailer: 'https://www.youtube.com/watch?v=BmPUqg8A4PM',
    cover: 'Польша'
  }
];

export const MOCK_TVSERIES: TVSeries[] = [
  {
    id: uuid4(),
    title: 'Отступники', 
    lastTitle: 'Поигравшие',
    country: 'Франция',
    genre: 'Мюзикл',
    ageLimits: 18,
    cover: 'Россия',
    studio: MOCK_STUDIOS[getRandomIndex()],
    prizes: [1,2,3].map(() => MOCK_PRIZES[getRandomIndex()]),
    seasons: [1,2,3].map(() => MOCK_SEASONS[getRandomIndex()]),
    startDate: new Date(),
    raiting: 8,
    releaseDate: new Date(),
    trailer: 'https://www.youtube.com/watch?v=BmPUqg8A4PM'
  },
  {
    id: uuid4(),
    title: 'Полицейский с рублевки', 
    lastTitle: 'Полиция',
    country: 'Россия',
    genre: 'Комедия',
    ageLimits: 18,
    cover: 'Россия',
    studio: MOCK_STUDIOS[getRandomIndex()],
    prizes: [1,2,3].map(() => MOCK_PRIZES[getRandomIndex()]),
    seasons: [1,2,3].map(() => MOCK_SEASONS[getRandomIndex()]),
    startDate: new Date(),
    raiting: 10,
    releaseDate: new Date(),
    trailer: 'https://www.youtube.com/watch?v=BmPUqg8A4PM'
  },
  {
    id: uuid4(),
    title: 'Мылодрама', 
    lastTitle: 'Мыло и драма',
    country: 'Россия',
    genre: 'Комедия',
    ageLimits: 16,
    cover: 'Россия',
    studio: MOCK_STUDIOS[getRandomIndex()],
    prizes: [1,2,3].map(() => MOCK_PRIZES[getRandomIndex()]),
    seasons: [1,2,3].map(() => MOCK_SEASONS[getRandomIndex()]),
    startDate: new Date(),
    raiting: 9,
    releaseDate: new Date(),
    trailer: 'https://www.youtube.com/watch?v=BmPUqg8A4PM'
  },
  {
    id: uuid4(),
    title: 'Наркос', 
    lastTitle: 'Наркотики',
    country: 'США',
    genre: 'Боевик',
    ageLimits: 14,
    cover: 'США',
    studio: MOCK_STUDIOS[getRandomIndex()],
    prizes: [1,2,3].map(() => MOCK_PRIZES[getRandomIndex()]),
    seasons: [1,2,3].map(() => MOCK_SEASONS[getRandomIndex()]),
    startDate: new Date(),
    raiting: 10,
    releaseDate: new Date(),
    trailer: 'https://www.youtube.com/watch?v=BmPUqg8A4PM'
  }
];