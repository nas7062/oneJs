const API_URL = "https://animal-api-two.vercel.app/";
const $content = document.querySelector(".content");
let template = [];
const getData = async () => {
  let res = await fetch(API_URL);
  try {
    if (res) {
      let data = await res.json();
      data.photos.forEach((photo) => {
        template += `<img src=${photo.url} />`;
      });
      $content.innerHTML = template;
    }
  } catch (error) {
    console.log(error);
  }
};

getData();
