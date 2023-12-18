import React, { useState } from "react";
export default function StateHoldObjects()
{
    const[college,setCollege]=useState({cid:1,cname:"skct",year:2023})
    const changeCollege=()=>setCollege((prevState)=>{return{...prevState,year:2024}})
    return(
        <div>
            <h1>College Id is {college.cid}</h1>
            <h1>College name is {college.cname}</h1>
            <h1>Year {college.year}</h1>
            <button onClick={changeCollege}>changeYear</button>
           
        </div>
    )
}