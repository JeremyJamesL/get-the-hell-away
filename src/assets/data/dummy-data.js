const dummyData = [
      {
        flightNumber: "ABC123",
        airline: "Example Airlines",
        departureAirport: "JFK",
        departureCity: "New York",
        departureCountry: "United States",
        departureTime: "2023-05-25T09:30:00",
        arrivalAirport: "LAX",
        arrivalCity: "Los Angeles",
        arrivalCountry: "United States",
        arrivalTime: "2023-05-25T12:45:00",
        duration: "3 hours 15 minutes",
        status: "On-time",
        price: 350.50,
        destinationWeather: "Sunny",
        destinationTemperature: 32,
        destinationImage: "https://i.natgeofe.com/n/f7145fb3-d6ad-41bb-8065-1d7312e72bf4/hollywood-boulevard-los-angeles-california_4x3.jpg"
      },
      {
        flightNumber: "DEF456",
        airline: "Sample Airways",
        departureAirport: "LHR",
        departureCity: "London",
        departureCountry: "United Kingdom",
        departureTime: "2023-05-26T14:20:00",
        arrivalAirport: "CDG",
        arrivalCity: "Paris",
        arrivalCountry: "France",
        arrivalTime: "2023-05-26T16:00:00",
        duration: "1 hour 40 minutes",
        status: "Delayed",
        price: 250.75,
        destinationWeather: "Overcast",
        destinationTemperature: 32,
        destinationImage: "https://media.cntraveler.com/photos/63e6b44a71cc5230e7788d4f/1:1/w_3571,h_3571,c_limit/Paris_GettyImages-601762971.jpg"
      },
      {
        flightNumber: "GHI789",
        airline: "Test Airlines",
        departureAirport: "SFO",
        departureCity: "San Francisco",
        departureCountry: "United States",
        departureTime: "2023-05-27T08:00:00",
        arrivalAirport: "SEA",
        arrivalCity: "Seattle",
        arrivalCountry: "United States",
        arrivalTime: "2023-05-27T10:15:00",
        duration: "2 hours 15 minutes",
        status: "On-time",
        price: 180.90,
        destinationWeather: "Rainy",
        destinationTemperature: 32,
        destinationImage: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/12/06/09/seattle-cityscape.jpg"
      },
      {
        flightNumber: "ABC123",
        airline: "Example Airlines",
        departureAirport: "JFK",
        departureCity: "New York",
        departureCountry: "United States",
        departureTime: "2023-05-25T09:30:00",
        arrivalAirport: "LAX",
        arrivalCity: "Los Angeles",
        arrivalCountry: "United States",
        arrivalTime: "2023-05-25T12:45:00",
        duration: "3 hours 15 minutes",
        status: "On-time",
        price: 350.50,
        destinationWeather: "Sunny",
        destinationTemperature: 32,
        destinationImage: "https://i.natgeofe.com/n/f7145fb3-d6ad-41bb-8065-1d7312e72bf4/hollywood-boulevard-los-angeles-california_4x3.jpg"
      },
      {
        flightNumber: "DEF456",
        airline: "Sample Airways",
        departureAirport: "LHR",
        departureCity: "London",
        departureCountry: "United Kingdom",
        departureTime: "2023-05-26T14:20:00",
        arrivalAirport: "CDG",
        arrivalCity: "Paris",
        arrivalCountry: "France",
        arrivalTime: "2023-05-26T16:00:00",
        duration: "1 hour 40 minutes",
        status: "Delayed",
        price: 250.75,
        destinationWeather: "Overcast",
        destinationTemperature: 32,
        destinationImage: "https://media.cntraveler.com/photos/63e6b44a71cc5230e7788d4f/1:1/w_3571,h_3571,c_limit/Paris_GettyImages-601762971.jpg"
      },
      {
        flightNumber: "GHI789",
        airline: "Test Airlines",
        departureAirport: "SFO",
        departureCity: "San Francisco",
        departureCountry: "United States",
        departureTime: "2023-05-27T08:00:00",
        arrivalAirport: "SEA",
        arrivalCity: "Seattle",
        arrivalCountry: "United States",
        arrivalTime: "2023-05-27T10:15:00",
        duration: "2 hours 15 minutes",
        status: "On-time",
        price: 180.90,
        destinationWeather: "Rainy",
        destinationTemperature: 32,
        destinationImage: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/12/06/09/seattle-cityscape.jpg"
      },
      {
        flightNumber: "ABC123",
        airline: "Example Airlines",
        departureAirport: "JFK",
        departureCity: "New York",
        departureCountry: "United States",
        departureTime: "2023-05-25T09:30:00",
        arrivalAirport: "LAX",
        arrivalCity: "Los Angeles",
        arrivalCountry: "United States",
        arrivalTime: "2023-05-25T12:45:00",
        duration: "3 hours 15 minutes",
        status: "On-time",
        price: 350.50,
        destinationWeather: "Sunny",
        destinationTemperature: 32,
        destinationImage: "https://i.natgeofe.com/n/f7145fb3-d6ad-41bb-8065-1d7312e72bf4/hollywood-boulevard-los-angeles-california_4x3.jpg"
      },
      {
        flightNumber: "DEF456",
        airline: "Sample Airways",
        departureAirport: "LHR",
        departureCity: "London",
        departureCountry: "United Kingdom",
        departureTime: "2023-05-26T14:20:00",
        arrivalAirport: "CDG",
        arrivalCity: "Paris",
        arrivalCountry: "France",
        arrivalTime: "2023-05-26T16:00:00",
        duration: "1 hour 40 minutes",
        status: "Delayed",
        price: 250.75,
        destinationWeather: "Overcast",
        destinationTemperature: 32,
        destinationImage: "https://media.cntraveler.com/photos/63e6b44a71cc5230e7788d4f/1:1/w_3571,h_3571,c_limit/Paris_GettyImages-601762971.jpg"
      },
      {
        flightNumber: "GHI789",
        airline: "Test Airlines",
        departureAirport: "SFO",
        departureCity: "San Francisco",
        departureCountry: "United States",
        departureTime: "2023-05-27T08:00:00",
        arrivalAirport: "SEA",
        arrivalCity: "Seattle",
        arrivalCountry: "United States",
        arrivalTime: "2023-05-27T10:15:00",
        duration: "2 hours 15 minutes",
        status: "On-time",
        price: 180.90,
        destinationWeather: "Rainy",
        destinationTemperature: 32,
        destinationImage: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/12/06/09/seattle-cityscape.jpg"
      }
]

export default dummyData;