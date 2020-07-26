export class Movie {
    coverURL: string;
    description: string;
    duration: string;
    name: string;
    releaseDate: Date;
    trailerURL: string;
    languageId: string;
    statusId: string;
    theatreIds: any[];
    movieId?: number;
  
    constructor(coverURL: string = '', description: string = '', 
      duration: string = '', name: string = '', releaseDate: Date = null,
      trailerURL: string = '', languageId: string = '', statusId: string = '', theatreIds: any[] = []
    ) {
      this.coverURL = coverURL;
      this.description = description;
      this.duration = duration;
      this.name = name;
      this.releaseDate = releaseDate;
      this.trailerURL = trailerURL;
      this.languageId = languageId;
      this.statusId = statusId;
      this.theatreIds = theatreIds;
    }
  }
  
  
