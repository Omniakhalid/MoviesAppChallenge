import {useQuery} from 'react-query';
import axios from 'axios';
const useMovies = (filterOption = 'popular') => {
  const URL = `https://api.themoviedb.org/3/movie/${filterOption}?api_key=4e8a8cce6437ceb15a135cda0edf856c&language=en-US&page=1`;
  const fetchMovies = async () => {
    const res = await axios.get(URL);
    return res.data.results;
  };
  return useQuery(['movies', filterOption], filter => fetchMovies(filter));
};
export default useMovies;
