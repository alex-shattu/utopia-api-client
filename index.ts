import { UApiClient } from './src';

if (!process.env.API_TOKEN || !process.env.API_URL) {
  throw Error('API_TOKEN or API_URL is not defined');
}

const uApiClient = new UApiClient({
  token: process.env.API_TOKEN,
  url: process.env.API_URL,
  axiosConfig: {},
  debug: true,
});

uApiClient
  .getProfileStatus()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
