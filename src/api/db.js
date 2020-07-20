const axios = require("axios");
const url = process.env.VUE_APP_HOST + "/player";

export const fetchApi = async () => {
  const successFunc = res => {
    console.log(res.data);
  };

  const errorFunc = err => {
    console.log(err);
  };

  await axios
    .get(url)
    .then(successFunc)
    .catch(errorFunc);
};

export const polling = (apiFunc, millisecond) => {
  return setInterval(apiFunc, millisecond);
};

export const postApi = async point => {
  const successFunc = res => {
    console.log(res.data);
  };

  const errorFunc = err => {
    console.log(err);
  };
  axios
    .post(url, {
      name: "Tanaka Taichi",
      age: 24,
      connecting: true,
      point: point
    })
    .then(successFunc)
    .catch(errorFunc);
};
