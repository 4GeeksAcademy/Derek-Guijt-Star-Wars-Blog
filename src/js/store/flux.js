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
		fetchStarships: async() => {
			const response = await fetch("https://www.swapi.tech/api/starships/")
			const data = await response.json()
			setStore({starships: data.results})
		},
		fetchPersonDetail: async (uid) => {
			const response = await fetch(`https://www.swapi.tech/api/people/${uid}`)
			const data = await response.json();
			console.log(data)
			setStore({ currentPerson: data.result.properties });
		},
  
  
		fetchPlanetDetail: async (uid) => {
			const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`)
			const data = await response.json();
			console.log(data)
			setStore({ currentPlanet: data.result.properties });
		},
  

		fetchStarshipDetail: async (uid) => {
			const response = await fetch(`https://www.swapi.tech/api/starships/${uid}`)
			const data = await response.json();
			console.log(data)
			setStore({ currentStarship: data.result.properties });
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
  