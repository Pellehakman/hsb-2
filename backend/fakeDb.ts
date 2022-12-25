export type Booking = {
    date: string,
    id: string,
    userId: string,
    slot: string
}
export type Schema = {
    bookings: Booking[];
}
const fakeData: Schema = {
    bookings: [
        { date: '21415', id: '1', userId: '11', slot: 'slot1' },
        { date: '21416', id: '2', userId: '22', slot: 'slot2' },
        { date: '21417', id: '2', userId: '22', slot: 'slot3' },

    ]
    
}

export { fakeData }