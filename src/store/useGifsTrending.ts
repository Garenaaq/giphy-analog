import {create} from 'zustand';
import { BASE_URL, API_KEY } from './constants';

/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IGifs {
    id: string;
    url: string;
}

interface IGifsState {
    gifs: IGifs[];
    error: string;
    loading: boolean;
    trendingGifs: () => Promise<void>;
}

const useGifsTrending = create<IGifsState>((set: any) => ({
    gifs: [],
    error: "",
    loading: false,
    trendingGifs: async () => {
        try {
            const response = await fetch(`${BASE_URL}/trending?api_key=${API_KEY}&limit=9`);
            const data = await response.json();

            const gifs = data.data.map((gif: any) => ({
                id: gif.id,
                url: gif.images.fixed_height.url,
            }));

            set({gifs});
        } catch (error: any) {
            set({error: error.message});
        }
    },
}));


export default useGifsTrending;