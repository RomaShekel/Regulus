
export default function getGeolocation():  Promise<{ lat: number; lon: number }> {

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            resolve({
                lat:position.coords.latitude,
                lon:position.coords.longitude
            })
        },
    (error) => reject(error))
    })    
}

