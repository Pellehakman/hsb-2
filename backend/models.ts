export type Credentials = {
    username: string,
    password: string,
}

export type Booking = {
    date: string,
    id: string,
    userId: string,
    slot: string
}


export type Schema = {
    booking: Booking[];
    credentials: Credentials[]
  };
  

