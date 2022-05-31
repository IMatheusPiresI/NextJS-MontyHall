import { createContext, useEffect, useState} from "react";
import { useRouter } from "../../node_modules/next/router";

export interface IDoor {
    door: {
        num: number;
        active: boolean;
        haveGift: boolean;
        opened: boolean;
    }
}

interface DoorContextProps {
    createDoors: () => void,
    doors: IDoor[],
    newDoors: IDoor[],
    setDoors: (newState: IDoor[]) => void,
    setNewDoors: (newState: IDoor[]) => void,
}

const initialValue = {
    createDoors: () => {},
    doors: [],
    newDoors: [],
    setDoors: (newState: IDoor[]) => {},
    setNewDoors: (newState: IDoor[]) => {},
}
export const DoorContext = createContext<DoorContextProps>(initialValue);

export const DoorContextProvider = ({children}) => {
    const router = useRouter();
    const [doors, setDoors] = useState<IDoor[]>([]);
    const [newDoors, setNewDoors] = useState<IDoor[]>([]);

    async function createDoors(){
        const initialDoors: IDoor[] = []
        const currentArray = JSON.parse(localStorage.getItem('doors'))
        console.log(currentArray)
            if(currentArray === null || currentArray.length === 0){
                for(let i = 0; i < +router.query.doors; i++){
                    const num = i + 1;
                    const haveGift = num === +router.query.haveGift;
                    const door: IDoor = {
                        door: {
                            num,
                            active: false,
                            haveGift,
                            opened: false,
                        }
                    }
                    initialDoors.push(door);
                }
                console.log(initialDoors)
                localStorage.setItem('doors', JSON.stringify(initialDoors));
                const Array = await JSON.parse(localStorage.getItem('doors'));
                setDoors(Array);
                console.log(Array)
            }else {
                const Array = await JSON.parse(localStorage.getItem('doors'));
                setDoors(Array);
            }
            }


    useEffect(() => {
       if(router.query !== {}){
        createDoors();
       }
    },[router.query, newDoors])

    return(
        <DoorContext.Provider value={{createDoors, doors, setDoors, newDoors, setNewDoors}}>
            {children}
        </DoorContext.Provider>
    )
}