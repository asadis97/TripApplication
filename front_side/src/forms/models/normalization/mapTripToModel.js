const mapTripToModel = (trip) => {
    return {
      title: trip.title,
      description: trip.description,
      country: trip.country,
      continent: trip.continent,
      imageUrl: trip.tripImage.url,
      imageAlt: trip.tripImage.alt,
    };
};
  
export default mapTripToModel;