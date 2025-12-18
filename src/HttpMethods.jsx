import React from "react";
import axios from 'axios';

const HttpMethods = () => {
    const baseUrl = "http://localhost:7000/";
    const getStudents = () => {
        axios.get(`${baseUrl}get-student`).then((result)=>{
            console.log(result.data);
        }).catch((error)=>console.log(error))
    }
    const myUser = {
        "Name":"Ramcharan",
        "age":23
    }
    const addStudents = () => {
        axios.post(`${baseUrl}add-student`,myUser).then((result)=>{
            console.log(result);
        }).catch((error)=>console.log(error))
    }
     return <>
        <h1>This is the frontend</h1>
        <button onClick={getStudents}>get student</button>
        <button onClick={addStudents}>add student</button>
     </>
}
export default HttpMethods;