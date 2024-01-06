import { create } from "zustand";

interface AnimalState {
    bears: number
    increaseAllAnimals: (by: number) => void;
    cat: number;
    decreaseCats: () => void;
}

export const useAnimalStore = create<AnimalState>()((set) => {

    let cat = 11;

    const increaseAllAnimals = () => set((state) => { return { bears: state.bears + 1, cat: state.cat+2 } })

    const decreaseCats = () => {
        return set((state)=> { return {cat: state.cat -2}})
    }

    return { bears: 2,cat, increaseAllAnimals, decreaseCats }
}

)


