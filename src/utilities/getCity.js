const getCity = (data) => {
    const updatedData = data.flatMap(item => item.cities.map(city => `${city}, ${item.country}`));
    return updatedData;
}
export default getCity;