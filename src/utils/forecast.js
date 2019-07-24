const request = require('request');

const forecast = ( lat, long, k) => {
    const url = 'https://api.darksky.net/forecast/978f937c04d4333e87dd16036b79a1d9/' + lat + ',' + long;

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            k('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            k('Unable to find location', undefined)
        } else {
            let low = body.daily.data[0].temperatureLow
            let high = body.daily.data[0].temperatureHigh

            k(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability * 100 + '% chance of rain.', "The high today is " + high + " with a low of " + low + ".");
        }
    })
}

module.exports = forecast
