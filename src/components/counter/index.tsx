import React, { useState } from 'react'

export const Counter:any = ({stock,name,imagen,price}) => {
    const [count, setCount] = useState(0);
    function add() {
        console.log("Hola");
        if (count < stock) {
            setCount(count + 1);
        }
    }
    function remove() {
        console.log();
        if (count > 0) {
            setCount(count - 1);
        }
    }
    //boton de sumar y de restar igual que el anterior pero en variables de estado set stock
    function cero() {
        setCount(0)
    }
    return (
        <div className="conteiner">
            <img height={150} width={150} src={imagen} alt="" />
            precio: ${price*count}
            {name}
            <div className="conteiner">
                <button onClick={cero}>
                    0
                </button>
            </div>
            <div className="conteiner">
                <button onClick={remove}>-</button>
                <h1>
                    {count}/{stock}
                </h1>
                <button onClick={add}>+</button>
            </div>
        </div>
    );
}
