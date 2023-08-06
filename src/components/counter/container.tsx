import { Counter } from "."

export const CounterContainer=()=>{
    return(
        <div>Hola
            <Counter price={10} stock={3} name='ivan' imagen='https://images.pexels.com/photos/1741206/pexels-photo-1741206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></Counter>
            <Counter price={20} stock={15} name='beren' imagen='https://images.pexels.com/photos/2361952/pexels-photo-2361952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></Counter>
            <Counter price={30} stock={25} name='dota' imagen='https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></Counter>
        </div>
        
    )
}