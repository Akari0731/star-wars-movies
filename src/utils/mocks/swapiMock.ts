import { Films } from '../../hooks/useGetFilms';

export const swapiApiMock: Films = {
  count: 6,
  next: null,
  previous: null,
  results: [
    {
      title: 'A New Hope',
      episode_id: 4,
      opening_crawl: 'It is a period of civil war.',
      director: 'George Lucas',
      producer: 'Gary Kurtz, Rick McCallum',
      release_date: '1977-05-25',
      characters: ['https://swapi.dev/api/people/1/', 'https://swapi.dev/api/people/2/'],
      planets: ['https://swapi.dev/api/planets/1/'],
      starships: ['https://swapi.dev/api/starships/2/'],
      vehicles: ['https://swapi.dev/api/vehicles/4/'],
      species: ['https://swapi.dev/api/species/1/'],
      created: '2014-12-10T14:23:31.880000Z',
      edited: '2014-12-20T19:49:45.256000Z',
      url: 'https://swapi.dev/api/films/1/'
    },
    {
      title: 'The Empire Strikes Back',
      episode_id: 5,
      opening_crawl: 'It is a dark time for the\r\nRebellion.',
      director: 'Irvin Kershner',
      producer: 'Gary Kurtz, Rick McCallum',
      release_date: '1980-05-17',
      characters: ['https://swapi.dev/api/people/1/', 'https://swapi.dev/api/people/2/'],
      planets: ['https://swapi.dev/api/planets/1/'],
      starships: ['https://swapi.dev/api/starships/2/'],
      vehicles: ['https://swapi.dev/api/vehicles/8/', 'https://swapi.dev/api/vehicles/14/'],
      species: ['https://swapi.dev/api/species/1/'],
      created: '2014-12-12T11:26:24.656000Z',
      edited: '2014-12-15T13:07:53.386000Z',
      url: 'https://swapi.dev/api/films/2/'
    },
    {
      title: 'Return of the Jedi',
      episode_id: 6,
      opening_crawl:
        'Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend',
      director: 'Richard Marquand',
      producer: 'Howard G. Kazanjian, George Lucas, Rick McCallum',
      release_date: '1983-05-25',
      characters: ['https://swapi.dev/api/people/1/'],
      planets: ['https://swapi.dev/api/planets/1/'],
      starships: ['https://swapi.dev/api/starships/2/'],
      vehicles: ['https://swapi.dev/api/vehicles/8/', 'https://swapi.dev/api/vehicles/16/'],
      species: ['https://swapi.dev/api/species/1/'],
      created: '2014-12-18T10:39:33.255000Z',
      edited: '2014-12-20T09:48:37.462000Z',
      url: 'https://swapi.dev/api/films/3/'
    },
    {
      title: 'The Phantom Menace',
      episode_id: 1,
      opening_crawl: 'Turmoil has engulfed the\r\nGalactic Republic.',
      director: 'George Lucas',
      producer: 'Rick McCallum',
      release_date: '1999-05-19',
      characters: ['https://swapi.dev/api/people/2/'],
      planets: ['https://swapi.dev/api/planets/9/'],
      starships: ['https://swapi.dev/api/starships/41/'],
      vehicles: ['https://swapi.dev/api/vehicles/33/'],
      species: ['https://swapi.dev/api/species/1/'],
      created: '2014-12-19T16:52:55.740000Z',
      edited: '2014-12-20T10:54:07.216000Z',
      url: 'https://swapi.dev/api/films/4/'
    }
  ]
};
