import { ObjectID } from 'mongodb';

export type Studio = {
  id: string;
  name: string;
  site: string;
  dateCreate: Date;
  country: string;
  chief: string;
};

export type Prize = {
  id: string;
  title: string;
  country: string;
  firstPresentation: Date;
};

export type Gender = 'male' | 'female';

export type Actor = {
  id: string;
  name: string;
  birthday: Date;
  gender: Gender;
  prizes: Prize[];
}

export type Filmmaker = {
  genre: string;
  country: string;
} & Omit<Actor, 'gender'>;

export type CommonSeriesEntity = {
  id: string;
  title: string;
  premiere: Date;
  raiting: number;
  trailer: string;
  cover: string;
}

export type Series = {
  actors: Actor[];
  fillmakers: Filmmaker[];
} & CommonSeriesEntity;

export type Season = {
  startDate: Date;
  releaseDate: Date;
  series: Series[];
} & CommonSeriesEntity;


export type TVSeries = {
  _id?: ObjectID;
  lastTitle: string;
  country: string;
  genre: string;
  ageLimits: number;
  cover: string;
  studio: Studio;
  prizes: Prize[];
  seasons: Season[];
} & Omit<Season, 'premiere' | 'series'>;

export type MongoSchema<T> = T & {
  _id: ObjectID;
};

export type TVSeriesView = {
  _id?: ObjectID;
  title: string;
  genre: string;
  ageLimits: number;
  startDate: Date;
  lastTitle: string;
}

export type RawStudioReqest = {
  serial_title: string;
  serial_raiting: string;
  serial_trailer: string;
  serial_cover: string;
  serial_startDate: string;
  serial_releaseDate: string;
  serial_lastTitle: string;
  serial_country: string;
  serial_genre: string;
  serial_ageLimits: string;
  prize_serial_firstPresentation: string;
  prize_serial_country: string;
  prize_serial_title: string
  studio_name: string;
  studio_site: string;
  studio_dateCreate: string;
  studio_country: string;
  studio_chief: string;
  seassons_title: string;
  seassons_premiere: string;
  seassons_raiting: string;
  seassons_trailer: string;
  seassons_cover: string;
  series_title: string;
  series_premiere: string;
  series_raiting: string;
  series_trailer: string;
  series_cover: string;
  actors_name: string;
  actors_birthday: string;
  actors_gender: string;
  prize_actors_title: string;
  prize_actors_country: string;
  prize_actors_firstPresentation: string;
  fillmakers_name: string;
  fillmakers_birthday: string;
  fillmakers_genre: string;
  fillmakers_country: string;
  prize_fillmakers_title: string;
  prize_fillmakers_country: string;
  prize_fillmakers_firstPresentation: string;
}
