import { useState } from "react";

// ini adalah tempat untuk belajar useState

export default function Counter(){
    const[count, setCounter] = useState(0)

    const style = {padding : "10px", margin : "10px", fontWeight : "bold"}
    console.log(count)

    return(
        <>
        <button style={style} onClick={() => setCounter(count+1)}>tambah 1</button>
        <h1>{count}</h1>
        <button style={style} onClick={() => setCounter(count-1)}>kurang 1</button>
        <br />
        <button style={style} onClick={() => setCounter(0)}>reset</button>
        </>
    )
}