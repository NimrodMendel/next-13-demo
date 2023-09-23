import axios from "axios";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "8abf2ee0e9mshbec3fab2e75d5e8p1a2737jsnec5388d9085c",
    "X-RapiAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const options = {
      method: "GET",
      url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
      params: { model: "corolla" },
      headers: {
        "X-RapidAPI-Key": "8abf2ee0e9mshbec3fab2e75d5e8p1a2737jsnec5388d9085c",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
