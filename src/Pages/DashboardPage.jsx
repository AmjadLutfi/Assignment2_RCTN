import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux"
import {changeNameStateGlobal} from "../store/action"

export default function DashboardPage(){
    
    const [inputUser, setInputUser] = useState("")
    const globalStateUser = useSelector(state => state.dataUser)
    const dispatch = useDispatch()

    const handleOnclick = (dataUserParam) => {
        dispatch(changeNameStateGlobal(dataUserParam))
    }
    
    const handleInput = (dataInput) =>{
        const hasil = dataInput
        setInputUser(dataInput)
    }


    return(
        <>
            <h1>Ini Dashboard {globalStateUser}</h1>
            <input type="text" onChange={(e)=>handleInput(e.target.value)} />
            <button onClick={()=>{handleOnclick(inputUser)}}>Ubah nama</button>
        </>
    )

}