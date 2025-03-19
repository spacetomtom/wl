import axios from 'axios';

const API_KEY = import.meta.env.VITE_RIJKSMUSEUM_API_KEY;
const BASE_URL = import.meta.env.VITE_RIJKSMUSEUM_API_URL;

export interface ArtworkResponse {
  artObjects: Array<{
    id: string;
    title: string;
    principalOrFirstMaker: string;
    webImage?: {
      url: string;
      guid: string;
    };
  }>;
  count: number;
}

export const searchArtworks = async (query: string, page: number = 1, culture: string = 'en') => {
  const response = await axios.get<ArtworkResponse>(`${BASE_URL}/${culture}/collection`, {
    params: {
      key: API_KEY,
      q: query,
      ps: 20, // page size
      p: page,
      format: 'json',
    },
  });
  return response.data;
};