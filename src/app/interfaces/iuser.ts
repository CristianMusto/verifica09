export interface IUser {
  id? : number,
  name : string,
  username : string,
  email : string,
  phone : string,
  website : string,
}

export interface IUserRes {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}
