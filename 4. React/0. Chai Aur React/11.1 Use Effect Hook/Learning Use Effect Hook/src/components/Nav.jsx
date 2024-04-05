import React, { useEffect } from "react";

export default function Nav({count2}){

    useEffect(()=>{
        console.log("Nav Component - Case 1: No dependencies array, will run this useEffect block code with each render")
      })
      
      useEffect(()=>{
        console.log("Nav Component - Case 2: Empty array [] dependencies, will run this useEffect block only first time when page render.")
      },[])
    
      useEffect(()=>{
        console.log("Nav Component - Case 3: filled array [count2], will run the useEffect block code when dependencies change")
      },[count2])


    return(<>
        <h3>This is nav bar {count2}</h3>
    </>)
}