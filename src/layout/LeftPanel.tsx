import { ReactNode } from 'react';
import { useAnimalStore } from "../store/animalStore";

type LeftPanelProps = {
  children: ReactNode;
};

export const LeftPanelComponent = ({ children }: LeftPanelProps) => {
  const bears = useAnimalStore().bears;
  const increaseBears = useAnimalStore().increaseAllAnimals;
  const cats = useAnimalStore().cat;
  const decreasecats = useAnimalStore().decreaseCats;

  return <>
    <div>
      Bears : {bears}
      <br/>
      <br/>
      Cats : {cats}
      <br/>
      <br/>
      <button onClick={()=>{increaseBears(1)}}>Increase All Animals</button>
      <br/>
      <br/>
      <button onClick={()=>{decreasecats()}}>Decrease Cats</button>
    </div>
    {children}
  </>;
};
