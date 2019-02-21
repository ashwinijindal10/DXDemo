export class Person {
  id?:number;
  name: string;
  sex: string;
  dob: Date;
  bio: string;
}

// export class Actor extends Person {
// }

// export class Producer extends Person {
// }

export class Movie {
  id?:number;
  name: string;
  year_of_release: number;
  plot: string;
  poster: string;
}


export enum PersonType{
  Producer ='p',
  Actor='a'
}

export enum ActionStatus{
  Success=1,
  Failed=2
}

export class CofirmationDialogData{
  Message:string;
  Result:ActionStatus;
}