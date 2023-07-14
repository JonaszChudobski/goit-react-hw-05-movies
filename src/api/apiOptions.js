import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
// const API_KEY = 'd9d9f3ad758344f54539b1cdbfe1d445';
const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWQ5ZjNhZDc1ODM0NGY1NDUzOWIxY2RiZmUxZDQ0NSIsInN1YiI6IjY0YWMyODhhOGEwZTliMDEzYWZjZWIzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b-_Cgx6VROt8MGCyup-HfW68hVnvz512KVMQ_otmzzI',
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `${baseURL}/trending/all/day?language=en-US`,
    options
  );
  return response.data;
};

export const fetchMovieByName = async name => {
  const response = await axios.get(
    `${baseURL}/search/movie?query=${name}&page=1`,
    options
  );
  return response.data;
};

export const fetchMovieById = async id => {
  const response = await axios.get(`${baseURL}/movie/${id}`, options);
  return response.data;
};

export const fetchCast = async id => {
  const response = await axios.get(`${baseURL}/movie/${id}/credits`, options);
  return response.data;
};

export const fetchReviews = async id => {
  const response = await axios.get(
    `${baseURL}/movie/${id}/reviews?page=1`,
    options
  );
  return response.data;
};
