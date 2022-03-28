export interface IBoulder {
    boulderId: number,
    difficulty: number,
    routeSetter: {
        routeSetter: number
    },
    location: {
        location: number
    },
    ratingsMean: number
}

export interface IRatings {
    ratingsId: number,
    rating: number,
    review: string,
    boulder: {
        boulderId: number
    },
    user: {
        userId: number
    }
}

export interface IUsers {
    userId: number,
    firstName: string,
    lastName: string,
    emailId: string
}

export interface ILocations {
    locationId: number,
    locationName: String
}

export interface IRouteSetter {

}