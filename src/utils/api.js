import { APIKEY, BASEURL, IMAGE_BASEURL } from "../../env"

const CONFIG = {
    headers: {
        'Accept': '*/*',
        'Access-Control-Allow-Origin':'*',
        'cache': 'no-cache'
    }
}

export function get(endpoint) {
    return fetch(`${BASEURL}${endpoint}?api_key=${APIKEY}`, {...CONFIG, method: 'GET'})
        .then(function (response) {
            return response.json()
        })
}

export function getMoviePoster(path) {
    return `${IMAGE_BASEURL}${path}`
}
