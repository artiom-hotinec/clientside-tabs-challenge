import axios from 'axios';

const BASE_URL = "https://content.guardianapis.com"

export async function requestUKNews() {
  const response  = await axios.get(
    `${BASE_URL}/uk-news?api-key=test`,
  );
  return response.data.response.results;
}

export async function requestFootball() {
  const response = await axios.get(
    `${BASE_URL}/football?api-key=test`,
  );
  return response.data.response.results;
}

export async function requestTravel() {
  const response = await axios.get(
    `${BASE_URL}/travel?api-key=test`,
  );
  return response.data.response.results;
}
