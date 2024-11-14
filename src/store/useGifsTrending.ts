import { create } from "zustand";
import { BASE_URL, API_KEY } from "../constants/constantsGiphyApi";
import IGifs from "../interface/IGifs";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface IGifsState {
    gifs: IGifs[];
    error: string;
    offset: number;
    loading: boolean;
    trendingGifs: () => Promise<void>;
    loadMoreGifs: () => Promise<void>;
}

const useGifsTrending = create<IGifsState>((set: any, get: any) => ({
    gifs: [],
    error: "",
    loading: false,
    offset: 0,

    trendingGifs: async () => {
        if (get().gifs.length > 0) return;
        try {
            set({ loading: true });
            const response = await fetch(
                `${BASE_URL}/trending?api_key=${API_KEY}&limit=9&offset=0`
            );
            const data = await response.json();

            const gifs = data.data.map((gif: any) => ({
                id: gif.id,
                url: gif.images.fixed_height.url,
            }));

            set({ gifs, loading: false });
        } catch (error: any) {
            set({ error: error.message });
        }
    },

    loadMoreGifs: async () => {
        try {
            set({ loading: true });
            const newOffset: number = get().offset + 9;

            const response = await fetch(
                `${BASE_URL}/trending?api_key=${API_KEY}&limit=9&offset=${newOffset}`
            );
            const data = await response.json();
            const gifsMore = data.data.map((gif: any) => ({
                id: gif.id,
                url: gif.images.fixed_height.url,
            }));

            set({
                gifs: [...get().gifs, ...gifsMore],
                loading: false,
                offset: newOffset,
            });
        } catch (error: any) {
            set({ error: error.message, loading: false });
        }
    },
}));

export default useGifsTrending;
