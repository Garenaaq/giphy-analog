import { API_KEY, BASE_URL } from "./constants";
import {create} from 'zustand';

/* eslint-disable @typescript-eslint/no-explicit-any */

interface IGifs {
    id: string;
    url: string;
  }
  
interface IGifsState {
    gifs: IGifs[];
    loading: boolean;
    error: string | null;
    clearListGifs: () => void
    searchGifs: (query: string) => Promise<void>
}

const useGifsSearch = create<IGifsState>((set: any) => ({
    gifs: [],
    loading: false,
    error: null,

    clearListGifs: () => {
        set({gifs: []});
    },

    searchGifs: async (query: string) => {
        set({loading: true, error: null});
        try {
            const response = await fetch(`${BASE_URL}/search?api_key=${API_KEY}&q=${query}&limit=9`);
            const data = await response.json();
            const gifs = data.data.map((gif: any) => ({
                id: gif.id,
                url: gif.images.fixed_height.url,
            }));
            set({gifs, loading: false});
        } catch(error: any) {
            set({ error: error.message, loading: false });
        }
    },

}));

export default useGifsSearch;