import React,{Component} from 'react';
import "./Style.css";

class Form extends Component{
    //1. creating state variable
    state={
        name: "",
        department:"",
        rating:"",
        data: []
    }

    handleChange=(event)=>{
       this.setState({[event.target.name]: event.target.value , 
        [event.target.department]: event.target.value, 
        [event.target.rating]: event.target.value })
    }

    handleClick=()=>{
      const saveData = {
        name: this.state.name,
        department: this.state.department,
        rating: this.state.rating
      }    
      const arr = this.state.data;
      arr.push(saveData);
      this.setState({data:arr});
    }

    render(){
        return(
           <>
           <h1 className='head'>Employee Feedback Form</h1>
           <div className="form_edit">
             <label className='label' htmlFor='f_name'>Name: </label>
             <input id="f_name" type="text" placeholder='Enter your name' name='name' onChange={this.handleChange}/>
             <br/> <br/>
             <label className='label' htmlFor='dept'>Department: </label>
             <input id='dept' type="text" placeholder='Enter department' name='department'onChange={this.handleChange}/> 
             <br/> <br/>
             <label  className='label'htmlFor='rate'>Rating: </label>
             <input id="rate" type="number" placeholder='Give your rating' name="rating" onChange={this.handleChange}/>
             <br/> <br/>
             <button className="btn" type='submit' onClick={this.handleClick}>Submit</button>
             </div>
             
             <div className='container'>
             {this.state.data.map((item, index)=>{
                return(
                    //we must include key={index} in the parent element like in the parent div while using map function
                        <div className="item" key={index} > 
                         <span >Name: {item.name} | </span>
                         <span >Department: {item.department} | </span>
                         <span >Rating: {item.rating}</span>
                        </div>
                )
             })}
             </div>
           </>
        );
    }
}
export default Form;