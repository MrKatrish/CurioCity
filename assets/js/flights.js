const clientId = 'KmhjxnEgHLwlIuTkPjAsAFWZXLEZ53f1';
const clientSecret = 'KcdArhDjvbGpR1QK';
let accessToken = { token: "", tokenType: "" };

// Function to get the access token
async function fetchAccessToken() {
    const tokenUrl = "https://test.api.amadeus.com/v1/security/oauth2/token";
    try {
        const response = await fetch(tokenUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const tokenData = await response.json();
        if (tokenData.access_token && tokenData.token_type) {
            accessToken= {
                token: tokenData.access_token,
                tokenType: tokenData.token_type
            };
        } else {
            throw new Error("Failed to retrieve access token");
        }
    } catch (error) {
        console.error("Error fetching access token:", error);
    }
}

/// Function to fetch hotels by city



async function fetchHotels(latitude, longitude) {

    const hotelURL = `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-geocode?latitude=41.397158&longitude=2.160873&radius=5&radiusUnit=KM&hotelSource=ALL`;

    if (!accessToken.token || !accessToken.tokenType) {
        await fetchAccessToken();
        if (!accessToken.token || !accessToken.tokenType) {
            console.error("Unable to retrieve access token");
            return;
        }
    }

    const authString = `${accessToken.tokenType} ${accessToken.token}`;
    try {
        const response = await fetch(hotelURL, {
            headers: {
                'Authorization': authString
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let hotelData = await response.json();
        console.log(hotelData);
        // displayHotels(hotelData);
    } catch (error) {
        console.error("Error fetching points of interest:", error);
    }

}

async function displayHotels(hotelData) {
    // let hotelContainer = $("things-to-do");
    $(".hotel-name").addText("Hotel Name: " + hotelData.data[i].name);

}

fetchHotels();


// /// Function to fetch points of interest
// async function fetchPointsOfInterest(latitude, longitude) {
//     const poiUrl = `https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=${latitude}&longitude=${longitude}&radius=1&page[limit]=5`;

//     if (!accessToken.token || !accessToken.tokenType) {
//         await fetchAccessToken();
//         if (!accessToken.token || !accessToken.tokenType) {
//             console.error("Unable to retrieve access token");
//             return;
//         }
//     }

//     const authString = `${accessToken.tokenType} ${accessToken.token}`;
//     try {
//         const response = await fetch(poiUrl, {
//             headers: {
//                 'Authorization': authString
//             }
//         });
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const poiData = await response.json();
//         displayPointsOfInterest(poiData);
//     } catch (error) {
//         console.error("Error fetching points of interest:", error);
//     }
// }

// // Function to display points of interest
// function displayPointsOfInterest(poiData) {
//     const poiContainer = document.getElementById('points-of-interest');
//     if (poiContainer && poiData.data) {
//         let content = '<h5 class="card-title">Points of Interest</h5>';
//         poiData.data.forEach(poi => {
//             content += `<p>${poi.name} - ${poi.category}</p>`;
//         });
//         poiContainer.innerHTML = content;
//     }
// }