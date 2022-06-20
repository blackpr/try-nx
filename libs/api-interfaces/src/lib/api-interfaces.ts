export interface BaseEntity {
  id: string | null;
}

export interface UserInfo {
  email: string;
  password: string;
}

export interface Movie {
  id: string;
  Title: string;
  Year: string;
  Genre: string;
  Director: string;
  Poster: string;
  imdbRating: string;
}
