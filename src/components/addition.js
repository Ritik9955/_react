import { useState } from "react";

 

function Adition() {
    const [form ,setform]=useState({
        name:'ritk',
        age : '',
        email:'',
        password:''
    });
   
    function onChangeHandler(event ) {
        console.log(event.target.name);
        setform({ ...form, [event.target.name]: event.target.value });
    }
    function submitform(){
        console.log('ritik onclick');
    }
    // ('setadd32');
    console.log(form);
    return (
       
        <div>
            <h1> i am add div {form.name}</h1>
            <label>Name</label>
            <input type='text' value={form.name} name="name"  onChange={onChangeHandler}></input>
            <input type='number' value={form.age} name="age"  onChange={onChangeHandler}></input>

            {/* <input value={add} onChange={onChangeHandler} ></input> */}
            <button onClick={submitform}>submt</button>
        </div>
    );
}
export default Adition;
