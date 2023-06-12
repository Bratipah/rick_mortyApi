import React from "react";

function Search() {
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState([]);

    const fetchSearch = async () => {
        const data = await fetch(
            `https://rickandmortyapi.com/api/character/&status=alive&query=${searchText}`
          `https://api.themoviedb.org/3/search/multi?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=en-US&query=${searchText}&page=${page}&include_adult=false`
        );
        const { results } = await data.json();
        setContent(results);
      };
    
      useEffect(() => {
        fetchSearch();
      }, []);
    
      const Search = () => {
        fetchSearch();
      };
    
      const Trigger = (e) => {
        setSearchText(e.target.value);
      };
    return (
        <>
        </>
    )
}

export default Search