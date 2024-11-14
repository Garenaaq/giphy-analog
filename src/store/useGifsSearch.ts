import { API_KEY, BASE_URL } from "../constants/constantsGiphyApi";
import { create } from "zustand";
import IGifs from "../interface/IGifs";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface IGifsState {
    gifs: IGifs[];
    offset: number;
    loading: boolean;
    query: string;
    error: string | null;
    clearListGifs: () => void;
    searchGifs: (query: string) => Promise<void>;
    loadMoreGifs: () => Promise<void>;
}

const useGifsSearch = create<IGifsState>((set: any, get: any) => ({
    gifs: [],
    loading: false,
    error: null,
    offset: 0,
    query: "",

    clearListGifs: () => {
        set({ gifs: [], offset: 0, query: "" });
    },

    searchGifs: async (query: string) => {
        try {
            set({ loading: true, error: null, query });
            const response = await fetch(
                `${BASE_URL}/search?api_key=${API_KEY}&q=${query}&limit=9&offset=0`
            );
            const data = await response.json();
            const gifs = data.data.map((gif: any) => ({
                id: gif.id,
                url: gif.images.fixed_height.url,
            }));
            set({ gifs, loading: false });
        } catch (error: any) {
            set({ error: error.message, loading: false });
        }
    },

    loadMoreGifs: async () => {
        try {
            set({ loading: true, error: null });
            const newOffset = get().offset + 9;
            const response = await fetch(
                `${BASE_URL}/search?api_key=${API_KEY}&q=${
                    get().query
                }&limit=9&offset=${newOffset}`
            );
            const data = await response.json();
            const gifsMore = data.data.map((gif: any) => ({
                id: gif.id,
                url: gif.images.fixed_height.url,
            }));

            const gifs = [...get().gifs, ...gifsMore];

            set({ gifs, loading: false, offset: newOffset });
        } catch (error: any) {
            set({ error: error.message, loading: false });
        }
    },
}));

export default useGifsSearch;
