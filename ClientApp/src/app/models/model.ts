export class Person {
  name: string;
  sex: string;
  dob: Date;
  bio: string;
}

export class Actor extends Person {
}

export class Producer extends Person {
}

export class Movie {
  name: string;
  year_of_release: Date;
  plot: string;
  poster: string;
}


