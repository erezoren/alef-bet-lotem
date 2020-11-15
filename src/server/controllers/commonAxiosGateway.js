const axios = require("axios");

async function getData(config) {
  try {
    let response = await axios(config);
    let data = response.data;
    return data;
  } catch (error) {
    let errorMessage = ""
    if (error.response) {
      let errorData = error.response.data;
      if (errorData.error) {
        if (errorData.error.stacktrace) {
          errorMessage = errorData.error.stacktrace;
        }
        else {
          errorMessage = errorData.error.error;
        }
      }
      else {
        errorMessage = errorData;
      }

    } else if (error.request) {
      errorMessage = error.request;
    } else {
      errorMessage = error.message;
    }
    console.error(errorMessage)
    return {error: errorMessage}
  }
}

module.exports.getData = getData;
