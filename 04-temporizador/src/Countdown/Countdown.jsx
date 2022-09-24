import { useEffect, useState } from "react";

function CountDown() {
    let [targetSeconds, setTargetSeconds] = useState(null);
    let [elapsedSeconds, setelapsedSeconds] = useState(0);

    useEffect(function() {
        if (targetSeconds === null) return;

        setelapsedSeconds(0);

        let interval = setInterval(function(){
            setelapsedSeconds((elapsedSeconds) => elapsedSeconds + 1)
        },1000);

        return()=>{
            clearInterval(interval);
        }
    },[targetSeconds]);

    function parseForm(ev) {
        ev.preventDefault();
        let seconds = ev.target.seconds.value;
        setTargetSeconds(parseInt(seconds));
    }

    if (elapsedSeconds >= targetSeconds && targetSeconds !== null) {
        return(
            <div>
                <p>Termino xd</p>
                <button onClick={()=> setTargetSeconds(null)}>Reiniciar</button>
            </div>
        );
    }

    if (targetSeconds !== null) {
        return(
            <p>Quedan {targetSeconds - elapsedSeconds} segundos</p>
        );
    }

   

    return(
        <div>
            <p>Cuantos segundos quiere</p>
            <form action="#" onSubmit={ev => parseForm(ev)}>
                <input type="number" name="seconds" />
                <button>Iniciar</button>
            </form>
        </div>
    );
}

export default CountDown;