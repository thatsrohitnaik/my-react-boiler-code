import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AnimalState {
    bears: number
    increaseAllAnimals: (by: number) => void;
    cat: number;
    decreaseCats: () => void;
}

export const useAnimalStore = create<AnimalState>()(persist((set) => {

    let cat = 11;

    const increaseAllAnimals = () => set((state) => { return { bears: state.bears + 1, cat: state.cat + 2 } })

    const decreaseCats = () => {
        return set((state) => { return { cat: state.cat - 2 } })
    }

    return { bears: 2, cat, increaseAllAnimals, decreaseCats }
}
    , {
        name: 'food-storage', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },

))
