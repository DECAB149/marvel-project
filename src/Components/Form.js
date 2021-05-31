import React from 'react';
import SubmitBtn from './Buttons';


export default function Form ({handleChange, handleSubmit, showPage, }) {


    return(
    
        <div className='formItems'>
            <div style={{ display: showPage ? 'none' : 'block' }}>
                <form >
                    <label>Search Characters Here</label>
                    <input
                        name='marvelSearch'
                        type='text'
                        onChange={handleChange}>
                    </input>

                   <SubmitBtn  onClick={(e)=>handleSubmit(e)} />
                </form>
            </div>
        </div>

    )
}