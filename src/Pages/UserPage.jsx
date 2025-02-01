import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux"
import {getAllDataUser} from "../store/action"
import { useEffect } from "react";

export default function UserPage(){
    
    const allData = useSelector(state => state.allData)
    const dispatch = useDispatch()

    useEffect(() => {
        handleAllData()
    }, [])

    const handleAllData = () => {
        dispatch(getAllDataUser())
    }

    return(
        <>
            <h1>All Users :</h1>
            {/* <button onClick={()=>{handleAllData()}}>Get All Data</button>  */}
            <table className="table table-bordered border-primary">
                <thead className="table-light">
                    <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                {allData.map(el => (
                       <tr key={el.id}>
                       <th scope="row">{el.id}</th>
                       <td>{el.name}</td>
                       <td>{el.phone}</td>
                       <td>{el.email}</td>
                       </tr>
                    )   
                    )
                    }
                </tbody>
            </table>
            
        </>
    )

}