import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(0);
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
    function sum() {
        setStock(stock + 1)
    }
    function res() {
        setStock(stock - 1)
    }
    //boton de sumar y de restar igual que el anterior pero en variables de estado set stock
    function cero() {
        setCount(0)
    }
    function zero() {
        setStock(0)
    }
    return (
        <div className="conteiner">
            <div className="conteiner">
                <button onClick={cero}>
                    0
                </button>
            </div>
            <div className="conteiner">
                <button onClick={remove}>-</button>
                <button onClick={res}></button>
                <h1>
                    {count}/{stock}
                </h1>
                <button onClick={add}>+</button>
                <button onClick={sum}></button>
            </div>
            <div className="conteiner">
                <button onClick={zero}>
                    0
                </button>
            </div>
        </div>
    );
}
