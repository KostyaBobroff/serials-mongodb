import { 
  RawStudioReqest, 
  TVSeries, 
  Studio, 
  Season, 
  Prize, 
  Series, 
  Actor, 
  Gender,
  Filmmaker
} from "./types";
import {v4 as uuidv4} from 'uuid';

export const normalizeStudio = (res: RawStudioReqest): Studio => {
  const {
    studio_chief,
    studio_country,
    studio_dateCreate,
    studio_name,
    studio_site,
  } = res;

  return {
    chief: studio_chief,
    country: studio_country,
    dateCreate: new Date(studio_dateCreate),
    name: studio_name,
    site: studio_site,
    id: uuidv4()
  }
}

export const normalizeSerialPrizes = (res: RawStudioReqest): Prize[] => {
  const {
    prize_serial_country,
    prize_serial_firstPresentation,
    prize_serial_title
  } = res;

  return [{
    id: uuidv4(),
    country: prize_serial_country,
    firstPresentation: new Date(prize_serial_firstPresentation),
    title: prize_serial_title
  }];
};

export const normalizeActorPrizes = (res: RawStudioReqest): Prize[] => {
  const {
    prize_actors_country,
    prize_actors_firstPresentation,
    prize_actors_title
  } = res;

  return [{
    id: uuidv4(),
    country: prize_actors_country,
    firstPresentation: new Date(prize_actors_firstPresentation),
    title: prize_actors_title
  }];
}

export const normalizeActors = (res: RawStudioReqest): Actor[] => {
  const {
    actors_birthday,
    actors_gender,
    actors_name,
  } = res;

  return [{
    id: uuidv4(),
    birthday: new Date(actors_birthday),
    gender: actors_gender as Gender,
    name: actors_name,
    prizes: normalizeActorPrizes(res)
  }]
} 

export const normalizeFilmmakerPrizes = (res: RawStudioReqest): Prize[] => {
  const {
    prize_fillmakers_country,
    prize_fillmakers_firstPresentation,
    prize_fillmakers_title
  } = res;

  return [{
    id: uuidv4(),
    country: prize_fillmakers_country,
    firstPresentation: new Date(prize_fillmakers_firstPresentation),
    title: prize_fillmakers_firstPresentation
  }];
}

export const normalizeFilmakers = (res: RawStudioReqest): Filmmaker[] => {
  const {
    fillmakers_birthday, fillmakers_name, fillmakers_genre, fillmakers_country
  } = res;

  return [{
    id: uuidv4(),
    birthday: new Date(fillmakers_birthday),
    name: fillmakers_name,
    genre: fillmakers_genre,
    country: fillmakers_country,
    prizes: normalizeFilmmakerPrizes(res)
  }]
} 

export const normalizeSeries = (res: RawStudioReqest): Series[] => {
  const {
    series_title,
    series_premiere,
    series_raiting,
    series_trailer,
    series_cover
  } = res;

  return [{
    title: series_title,
    premiere: new Date(series_premiere),
    raiting: Number(series_raiting),
    trailer: series_trailer,
    cover: series_cover,
    actors: normalizeActors(res),
    fillmakers: normalizeFilmakers(res),
    id: uuidv4()
  }]
}

export const normalizeSeassons = (res: RawStudioReqest): Season[] => {
  const {
    seassons_cover,
    seassons_premiere,
    seassons_raiting,
    seassons_title,
    seassons_trailer
  } = res;

  return [{
    id: uuidv4(),
    cover: seassons_cover,
    premiere: new Date(seassons_premiere),
    raiting: Number(seassons_raiting),
    title: seassons_title,
    trailer: seassons_trailer,
    startDate: new Date(),
    releaseDate: new Date(),
    series: normalizeSeries(res)
  }]
}


export const normalizeTVSerials = (res: RawStudioReqest): TVSeries => {
  const {
    serial_ageLimits,
    serial_country,
    serial_cover,
    serial_lastTitle,
    serial_genre,
    serial_trailer,
    serial_title,
    serial_raiting,
    serial_startDate, serial_releaseDate
  } = res;

  return {
    ageLimits: Number(serial_ageLimits),
    country: serial_country,
    cover: serial_cover,
    lastTitle: serial_lastTitle,
    releaseDate: new Date(serial_releaseDate),
    startDate: new Date(serial_startDate),
    genre: serial_genre,
    trailer: serial_trailer,
    title: serial_title,
    raiting: Number(serial_raiting),
    studio: normalizeStudio(res),
    seasons: normalizeSeassons(res),
    id: uuidv4(),
    prizes: normalizeSerialPrizes(res)
  }
}