import React, { useEffect, useState } from 'react'

const FromComponent = () => {
    const [data, setData] = useState({
        name: "",
        age: "",
        city: ""
    });
    useEffect(() => {

    }, [data]);
    function formSubmit(e) {
        e.preventDefault();
        console.log(data);
        
    }
    return (
        <div className='conainer'>
            <div className='row'>
                <div className='col-md-6 col-sm-12 offset-md-3 mt-5 p-5 shadow'>
                    <h1>Fill the Test From</h1>
                    <form onSubmit={formSubmit}>
                        <input type="text" placeholder='Enter your name' name='name' onChange={(e)=>{ setData({...data,name:e.target.value}) }} />
                        <br /><br />
                        <input type="number" placeholder='Enter your age' name='age' onChange={(e)=>{ setData({...data,age:e.target.value}) }} />
                        <br /><br />
                        <input type="text" placeholder='Enter your city' name='city' onChange={(e)=>setData({...data,city:e.target.value})} />
                        <br /><br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FromComponent