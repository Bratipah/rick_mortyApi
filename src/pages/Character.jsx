import React from "react";

function Characters() {
    
    const [characters, setCharacters] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

    const getCharactersRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setCharacterss(responseJson.Search);
		}
	};

	useEffect(() => {
		getCharactersRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const charactersFavourites = JSON.parse(
			localStorage.getItem('react-characters-app-favourites')
		);

		if (charactersFavourites) {
			setFavourites(charactersFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-characters-app-favourites', JSON.stringify(items));
	};

	const addFavouriteCharacters = (characters) => {
		const newFavouriteList = [...favourites, characters];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouritecharacters = (characters) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== characters.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

    return (
        <>
        </>
    )
}
export default Characters