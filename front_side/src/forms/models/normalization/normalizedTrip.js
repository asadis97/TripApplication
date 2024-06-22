const normalizedTrip = (trip) => ({
    title: trip.title,
    description: trip.description,
    country: trip.country,
    continent: trip.continent,
tripImage:{
    url: trip.imageUrl,
    alt: trip.imageAlt
}
})

export default normalizedTrip

