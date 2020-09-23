import React, {useState, useEffect} from "react";
import FireDB from "../Firebase";

function Test(){
  
 let [CurrentIdd, SetCurrentIdd] = useState({})
  useEffect(() => {
  FireDB.child("Add").on("value", function(snapshot) { 
    SetCurrentIdd({...snapshot.val()});
    //numberOfEmployee += snapshot.numChildren();
})

}, []);

      let avg = 0;
      let numberOfEmployee = [];
      Object.keys(CurrentIdd).map(ele => {
        avg += parseInt(CurrentIdd[ele].salary);
        numberOfEmployee.push(CurrentIdd[ele].salary)
      })
    let calculate =  avg / numberOfEmployee.length;
        

    return (
      <div>
           <h4>average employee salary = {calculate}</h4>
           <h4>total employee salaries = {avg}</h4>
     </div>
    )
}

export default Test;