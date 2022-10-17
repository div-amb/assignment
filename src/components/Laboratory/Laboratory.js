import React from 'react'
import "./Laboratory.css"
import { Link } from "react-router-dom";
import Laboratory_Items from './Laboratory_Items';

const Laboratory = () => {
    return (
        <div>
            <div className='laboratory'>
                <table className='laboratory-table'>
                    <tr>
                        <th className='laboratory-th'>Laboratory</th>
                    </tr>
                    {Laboratory_Items.map((item)=> (
                        <tr key={item.id}>
                            <td>
                                <div className='laboratory-content'>
                                    <p className='laboratory-content-title'>{item.title}</p>
                                    <Link className='laboratory-content-view' to={item.url}><i class="fa-solid fa-eye"></i> View</Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default Laboratory