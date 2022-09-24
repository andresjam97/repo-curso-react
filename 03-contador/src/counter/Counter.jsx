import { useState } from "react";

function Counter() {
const[contador, setContador] = useState(0);
    return(
        <div>
            <p>Haz hecho click {contador} veces xd</p>
            <button onClick={()=>{setContador(contador + 1)}}>Increase</button>
        </div>
    );
}

export default Counter;