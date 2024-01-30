const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		people: [],
		planets: [],
		starships: [],
		favorites: [],
		currentPerson: {},
		currentPlanet: {},
		currentStarship: {},
	  },
	  actions: {
		
		fetchPeople: async() => {
			const response = await fetch("https://www.swapi.tech/api/people/")
			const data = await response.json()
			setStore({people: data.results})
		},
		fetchPlanets: async() => {
			const response = await fetch("https://www.swapi.tech/api/planets/")
			const data = await response.json()
			setStore({planets: data.results})
		},
		fetchStarShips: async() => {
			const response = await fetch("https://www.swapi.tech/api/starships/")
			const data = await response.json()
			setStore({starships: data.results})
		},
		fetchPersonDetail: async (uid) => {
		  try {
			const url = `https://www.swapi.tech/api/people/${uid}/`;
			const response = await fetch(url);
			if (!response.ok) {
			  throw new Error("Failed to fetch person details");
			}
			const data = await response.json();
			console.log(data)
			setStore({ currentPerson: data.result.properties });
		  } catch (error) {
			console.error("Error fetching person details: ", error);
		  }
		},
  
  
		fetchPlanetDetail: async (uid) => {
		  try {
			const url = `https://www.swapi.tech/api/planets/${uid}/`; // Update the API endpoint to fetch planet details
			const response = await fetch(url);
			if (!response.ok) {
			  throw new Error("Failed to fetch planet details"); // Update the error message
			}
			const data = await response.json();
			setStore({ currentPlanet: data }); // Set the currentPlanet in the store
		  } catch (error) {
			console.error("Error fetching planet details: ", error); // Update the error message
		  }
		},
  

		fetchStarshipDetail: async (uid) => {
		  try {
			const url = `https://www.swapi.tech/api/starships/${uid}/`; // Update the API endpoint to fetch starship details
			const response = await fetch(url);
			if (!response.ok) {
			  throw new Error("Failed to fetch starship details"); // Update the error message
			}
			const data = await response.json();
			setStore({ currentStarship: data }); // Set the currentStarship in the store
		  } catch (error) {
			console.error("Error fetching starship details: ", error); // Update the error message
		  }
		},
		addFavorites: (name, uid, type) => {
		  const store = getStore();
		  const newFavorite = { name, uid, type }; // Include a type ('person', 'planet', 'starship')
		  const newFavorites = [...store.favorites, newFavorite];
		  setStore({ favorites: newFavorites });
		},
  
		removeFavorites: (name) => {
		  const store = getStore();
		  const newFavorites = store.favorites.filter(
			(favorite) => favorite.name !== name
		  );
		  setStore({ favorites: newFavorites });
		},
	  },
	};
  };
  
  export default getState;
  