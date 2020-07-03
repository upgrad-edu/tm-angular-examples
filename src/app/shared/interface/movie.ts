export interface Movie {
  coverURL: string;
  description: string;
  duration: string;
  name: string;
  releaseDate: string;
  trailerURL: string;
  languageId: string;
  statusId: string;
  theatres: any[];
  id?: number;
}

export class Movie {
  coverURL: string;
  description: string;
  duration: string;
  name: string;
  releaseDate: string;
  trailerURL: string;
  languageId: string;
  statusId: string;
  theatres: any[];
  id?: number;

  constructor(coverURL: string, description: string, 
    duration: string, name: string, releaseDate: string,
    trailerURL: string, languageId: string, statusId: string, theatres: any[]
  ) {
    this.coverURL = coverURL;
    this.description = description;
    this.duration = duration;
    this.name = name;
    this.releaseDate = releaseDate;
    this.trailerURL = trailerURL;
    this.languageId = languageId;
    this.statusId = statusId;
    this.theatres = theatres;
  }
}
