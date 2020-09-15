import { APIKEY, BASEURL, IMAGE_BASEURL } from "../../env"

export function get(endpoint) {
    return fetch(`${BASEURL}${endpoint}?api_key=${APIKEY}`)
        .then(function (response) {
            return response.json()
        })
}

export function getMoviePoster(path) {
    return `${IMAGE_BASEURL}${path}`
}
