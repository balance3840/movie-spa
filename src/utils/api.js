const CONFIG = {
    headers: {
        'Accept': '*/*',
        'Access-Control-Allow-Origin':'*',
        'cache': 'no-cache'
    }
}

export const APIKEY = 'PUT API KEY HERE'

const BASEURL = 'http://api.themoviedb.org/3'

export const IMAGE_BASEURL = 'https://image.tmdb.org/t/p/w600_and_h600_bestv2/'

export function get(endpoint) {
    return fetch(`${BASEURL}${endpoint}?api_key=${APIKEY}`, {...CONFIG, method: 'GET'})
        .then(function (response) {
            return response.json()
        })
}

export function getMoviePoster(path) {
    return `${IMAGE_BASEURL}${path}`
}
