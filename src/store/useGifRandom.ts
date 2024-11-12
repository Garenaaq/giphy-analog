import { create } from "zustand";
import IGifs from "../interface/IGifs";
import { BASE_URL, API_KEY } from "../constants/constantsGiphyApi";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface IGifRandomState {
    gif: IGifs | null;
    error: string;
    loading: boolean;
    getRandomGif: () => Promise<void>;
}

const useGifRandom = create<IGifRandomState>((set: any) => ({
    gif: null,
    error: "",
    loading: false,
    getRandomGif: async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/random?api_key=${API_KEY}`
            );
            const data = await response.json();

            const gif = {
                id: data.data.id,
                url: data.data.images.fixed_height.url,
            };

            set({ gif });
        } catch (error: any) {
            set({ error: error.message });
        }
    },
}));

export default useGifRandom;
