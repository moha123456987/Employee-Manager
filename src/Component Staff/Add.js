import React, {Component} from "react";
import FireDB from "../Firebase";



class Add extends Component {
constructor(props) {
    super(props);
    this.onChangeAllInput = this.onChangeAllInput.bind(this);
    this.onChangeSubmit = this.onChangeSubmit.bind(this);
     
    this.state = {
        firstname : "",
        lastname : "",
        email : "",
        address : "",
        salary : "",
        info: ""
    }
}






onChangeAllInput(e){
   const man = e.target.name;
   
      this.setState({
        [man]: e.target.value
    })
  
}




onChangeSubmit(e){
    e.preventDefault();
    const obj = {
      firstname: this.state.firstname, 
      lastname: this.state.lastname,
      email: this.state.email,
      address: this.state.address,
      salary: this.state.salary,
  }
  if(this.state.firstname !== "" && this.state.lastname !== "" && this.state.email !== "" && this.state.addres !== "" && this.state.salary !== "") {

    FireDB.child("Add").push(obj, err => {
      if(err){
        console.log(err)
      }
    });

  }else {
    alert("fields cannot be empty!");
    this.setState({
      info: "fields cannot be empty! please fill in fields "
    })
    return null;
  }

    this.setState({
      firstname : "",
      lastname : "",
      email : "",
      address : "",
      salary : "",
  })

 

  
}


  
  



render () {

       return (
        <form onSubmit={this.onChangeSubmit}>
        <div className="form-row">

          <div className="form-group col-md-6">
            <label htmlFor="name">First name</label>
            <input type="text" className="form-control" id="name" name="firstname" value={this.state.firstname} onChange={this.onChangeAllInput} ></input>
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="lastname">Last name</label>
            <input type="text" className="form-control" id="lastname" name="lastname" value={this.state.lastname} onChange={this.onChangeAllInput}></input>
          </div>

        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email address</label>
            <input type="text" className="form-control" id="email" name="email"  value={this.state.email} onChange={this.onChangeAllInput}></input>
          </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" name="address" value={this.state.address} onChange={this.onChangeAllInput} ></input>
        </div>
     
         <div className="form-row">
           <div className="form-group col-md-6">
            <label htmlFor="salary">salary</label>
            <input type="text" className="form-control" id="salary" name="salary"  value={this.state.salary} onChange={this.onChangeAllInput}></input>
          </div>
        </div>
        </div>
 
        <button type="submit" className="btn btn-primary" >Submit</button>
        <br />
        <br />
        <br />
         
        
        {
          <div className={this.state.info == "" ? "v" : "alert alert-danger"} role="alert">{this.state.info }</div>
        }
         
      </form>
      
     

     )
}
     
}

export default Add;