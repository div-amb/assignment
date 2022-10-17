import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Filter from '../../components/Filter/Filter'
import Atlas_Item from './Atlas-Item'
import "./Atlas.css"
import Atlas_Table from './Atlas_Table'

const Atlas = () => {
    const [query, setQuery] = useState("");
    const  [filterTextValue, setFilterTextValue] = useState("");

    const search = (data)=>{
        return data.filter((item)=>item.id.includes(query));
    };

    const filterData = (data)=>{
        if(filterTextValue === "all"){
            return data;
        }else{
            return data.filter((item)=> item.type.includes(filterTextValue) || item.lesson.includes(filterTextValue));
        }
        
    }

    const onFilterValueSelected = (filterValue) => {
        setFilterTextValue(filterValue)
    }
    return (
        <div>
            <header className='atlas-header'>
                <div className='atlas-navbar-container'>
                    <Link className='atlas-navbar-container-home' to="/home">
                        <p>Home &gt;</p>
                    </Link>
                    <Link className='atlas-navbar-container-home' to="/home">
                        <p> Laboratory &gt;</p>
                    </Link>
                    <p className='atlas-navbar-container-atlas'> Atlas</p>
                </div>
            </header>
        
            <div className='container'>
                
                <div className='left'>
                    <p className='title'>Select Atlas to view</p>
                    <div className='search-section'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input
                            type='text'
                            placeholder='Search'
                            className='search'
                            onChange={(e)=> setQuery(e.target.value)}
                        />
                    </div>
                    <Atlas_Table data={(filterData(Atlas_Item)||search(Atlas_Item))} />
                    <hr/>
                    <div className='total-content'>
                        <p>5 Atlas</p>
                    </div>
                </div>
                <div className='atlas-right'>
                    <Filter filterValueSelected={onFilterValueSelected} />
                </div>
            </div>
        </div>
    )
}

export default Atlas