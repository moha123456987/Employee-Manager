import React, {useState, useEffect} from "react";
import {Route, Link} from "react-router-dom";
import FireDB from "../Firebase";
import Edit from "./Edit";


const View = (props) => {

let [ContactObject, setContactObject] = useState({});

let [CurrentId, SetCurrentId] = useState(";")

useEffect(() => {

     FireDB.child("Add").on("value", snapshot => {
          if(snapshot.val() != null){

               setContactObject({
                  ...snapshot.val()
             })
          }else{
               setContactObject({})
          }
     })
}, []);

const HandelDelete = (ele) => {

     FireDB.child("Add/" + ele).remove( err => {
          if(err){
            console.log(err)
          }else {
              
              
          }
        });
}

     return (
 <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      <th scope="col">Email address</th>
      <th scope="col">Address</th>
      <th scope="col">Salary</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
       {
            Object.keys(ContactObject).map(ele => {

                return (
                    <tr key={ele}>
                    <th scope="row"> {ContactObject[ele].firstname} </th>
                    <td>{ContactObject[ele].lastname}</td>
                    <td>{ContactObject[ele].email}</td>
                    <td>{ContactObject[ele].address}</td>
                    <td>{ContactObject[ele].salary}</td>
                    <td>
                    
                    <button type="button" className="btn btn-outline-warning" ><Link  to={{
  pathname: '/edit',
  state: {
    
    curId: ele,
    conTobj: ContactObject

  }
}} >Edit</Link></button>
                     &nbsp;
                    <button type="button" className="btn btn-outline-danger" onClick={() => HandelDelete(ele)}>Delete</button>
                   
                    </td>
                  </tr>
                  )
                
            })
       }


  </tbody>
</table>
     )

     
}

export default View;