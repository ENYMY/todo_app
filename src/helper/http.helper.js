const httpRequest = async (apiURL, method = "GET", body = {}) => {
  var data = {};
  if (method !== "GET") {
    data = await fetch(apiURL, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  } else {
    data = await fetch(apiURL, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  return data;
};

export { httpRequest };
