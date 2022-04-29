import"./input.css"

import { useState } from "react"

export const Todosinput = ({ getdata }) => {

    const [text, setText] = useState("");

    return (
        <div className="searchbar">

            <input className="datainp" onChange={(e) => {
                setText(e.target.value)

            }} type="text" placeholder="Write Something" />


            
            <button className="add" onClick={() => {
                getdata(text);
            }}>+</button>

        </div>
    )
}