import React from 'react'
import Atlas_Item from '../../Pages/Atlas/Atlas-Item'
import "./Filter.css"

const Filter = ({filterValueSelected}) => {

    const onFilterValueChanged = (event) => {
        filterValueSelected(event.target.value);
    }

    return (
        <div >
            <div className='filter'>
                <p className='filter-title'>FILTER</p>
                <div className='by-type' >
                    <p className='by-type-title'>By Type</p>
                    <div onClick={onFilterValueChanged}>
                        <button className='filter-btn' value="all">All</button>
                        {Atlas_Item?.map((item) => (
                            <button key={item.id} className='filter-btn' value={item.type}>{item.type}</button>
                        ))}
                        
                    </div>
                    <hr/>
                </div>
                
                <div className='by-lesson'>
                    <p className='by-lesson-title'>By Lesson</p>
                    <div onClick={onFilterValueChanged}>
                        <button className='filter-btn' value='all'>All</button>
                        <button className='filter-btn' value="Default">Default</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter