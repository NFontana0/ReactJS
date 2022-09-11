import React, {useState, useEffect} from "react"

export default function Test() {

    function handleClick(e) {
        alert('hicieron click')
        console.log(e);
    }

    function handleKeyDown(e) {
        console.log(e);
    }

const [email, setEmail] = useState ('');

    return (
        <div onClick={handleClick} style={{ border: '3px solid red', margin: '20px', padding: '20px' }}>
            Test
            <input onKeyDown={handleKeyDown} type={'text'} placeholder={'Ingrese su nombre'}></input>
            <input type={'number'} placeholder={'Ingrese su telefono'}></input>
            <input type={'email'} 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} placeholder={'Ingrese su email'}></input>
            <button>ENVIAR</button>
        </div>
    )
}
