import axios from 'axios';

const API_URL = 'http://localhost:3000';

const api = {
  getMatch: async (matchId: string) => {
    try {
      const response = await axios.get(`${API_URL}/matches/${matchId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching match data:', error);
    }
  },
  recordScore: async (data: any) => {
    try {
      const response = await axios.post(`${API_URL}/scores`, data);
      return response.data;
    } catch (error) {
      console.error('Error recording score:', error);
    }
  },
};

export { api };