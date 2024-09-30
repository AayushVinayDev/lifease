import axios from 'axios';

const API_URL = 'http://localhost:3000'; 

export const api = {
  // Matches
  createMatch: (matchData) => axios.post(`${API_URL}/matches`, matchData),
  getMatches: () => axios.get(`${API_URL}/matches`),
  getMatch: (id) => axios.get(`${API_URL}/matches/${id}`),
  updateMatch: (id, matchData) => axios.put(`${API_URL}/matches/${id}`, matchData),
  deleteMatch: (id) => axios.delete(`${API_URL}/matches/${id}`),

  // Scores
  recordScore: (scoreData) => axios.post(`${API_URL}/scores`, scoreData),
};