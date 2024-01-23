// const url = `https://travel-info-api.p.rapidapi.com/country-details?country=Turkey`;
// const countrySelection = $('#cityInput');
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2d893bbeb4msh0f9af45ec884752p144f74jsnc8748a3ba010',
// 		'X-RapidAPI-Host': 'travel-info-api.p.rapidapi.com'
// 	}
// };

// async function getDescription() {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// }
// getDescription();

const url = 'https://travel-info-api.p.rapidapi.com/country?country=istanbul';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2d893bbeb4msh0f9af45ec884752p144f74jsnc8748a3ba010',
		'X-RapidAPI-Host': 'travel-info-api.p.rapidapi.com'
	}
};

async function getDescription() {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
}

getDescription();