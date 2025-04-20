const API_URL = "https://animal-api-two.vercel.app/";

export const getData = async () => {
  let res = await fetch(API_URL);
  try {
    if (res) {
      let data = await res.json();
      return data.photos;
    }
  } catch (error) {
    console.log(error);
  }
};
