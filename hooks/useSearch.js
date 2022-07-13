import {useQuery} from 'react-query';
import axios from 'axios';
const useSearch = searchValue => {
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=4e8a8cce6437ceb15a135cda0edf856c&language=en-US&query=${searchValue}&page=1&include_adult=false`;
  const fetchMovies = async () => {
    const res = await axios.get(URL);
    return res.data.results;
  };
  const {data} = useQuery(
    ['search', searchValue],
    search => fetchMovies(search),
    {enabled: !!searchValue},
  );
  return {SearchData: data};
};
export default useSearch;
