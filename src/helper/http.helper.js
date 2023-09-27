const httpRequest = async (apiURL, method = "GET", body = {}) => {
    const data = await fetch(apiURL, {
        method: method,
        body: body,
        headers: {
            "Content-Type": "application/json"
        }
    })

    return data;
}

export {
    httpRequest
}