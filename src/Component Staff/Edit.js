import React, {useState, useEffect} from "react";
import FireDB from "../Firebase";

const Edit = (props) => {


    let initialFildValue = {
        firstname : "",
        lastname : "",
        email : "",
        address : "",
        salary : "",
        
    }

    
 let [values, setValues] = useState(initialFildValue);
 let [currentID, SetCurrentID] = useState(props.location.state.curId);
 let [currentOBJ, SetCurrentOBJ] = useState(props.location.state.conTobj);
 let [info, SetInfo] = useState("");

 
 

 useEffect(() => {
   if(currentID == ""){
        setValues({
             ...initialFildValue
        })
   }else {
     setValues({
          ...currentOBJ[currentID]
     })
     
   }

  }, [currentID, currentOBJ]);

 
 const onChangeAllInput = (e) => {

   const man = e.target.name;
   setValues({
    ...values,
    [man]: e.target.value
});

}


const onChangeSubmit = (e) => {
    e.preventDefault();
 if(values.firstname !== "" && values.lastname !== "" && values.email !== "" && values.address !== "" && values.salary !== "") {

  FireDB.child("Add/" + currentID).set(values, err => {
    if(err){
      console.log(err)
    }else {
         SetCurrentID("");
        
    }
  });

 }else{
  alert("fields cannot be empty!");
  SetInfo("fields cannot be empty! please fill in fields");
  
  return null;
 }


}


    return (
       <form onSubmit={onChangeSubmit}>
       <div className="form-row">
         <div className="form-group col-md-6">
           <label htmlFor="name">First name</label>
           <input type="text" className="form-control" id="name" name="firstname" value={values.firstname}  onChange={onChangeAllInput} ></input>
         </div>
         <div className="form-group col-md-6">
           <label htmlFor="lastname">Last name</label>
           <input type="text" className="form-control" id="lastname" name="lastname" value={values.lastname}   onChange={onChangeAllInput}></input>
         </div>

        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email address</label>
            <input type="text" className="form-control" id="email" name="email" value={values.email}   onChange={onChangeAllInput}></input>
          </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" name="address" value={values.address}  onChange={onChangeAllInput} ></input>
        </div>
     
         <div className="form-row">
           <div className="form-group col-md-6">
            <label htmlFor="salary">salary</label>
            <input type="text" className="form-control" id="salary" name="salary" value={values.salary}   onChange={onChangeAllInput}></input>
          </div>
        </div>
     

        </div>
 
        <button type="submit" className="btn btn-primary" >Update</button>

           <br />
           <br />
           
           { 
       
           <div className={info == "" ? "v" : "alert alert-danger"} role="alert">{info}</div>

           }            
      </form>
     )


}

export default Edit;