import React from 'react'
import { Link } from 'react-router-dom'
import "./Atlas.css"

const Atlas_Table = ({data}) => {
    return (
        <div>
            <div className='atlas-content'>
                <table className='atlas-table'>
                    <tr className='atlas-row'>
                        <th className='th-id'>ID</th>
                        <th className='th-report'>REPORT</th>
                        <th className='th-user'>USER</th>
                        <th className='th-type'>TYPE</th>
                        <th className='th-lesson'>LESSON</th>
                        <th className='th-description'>DESCRIPTION</th>
                    </tr>
                    {data?.map((item)=>(
                        <tr key={item.id} >
                            <td>{item.id}</td>
                            <td><Link to="/view" className='report-btn'>{item.report}</Link></td>
                            <td>{item.user}</td>
                            <td>{item.type}</td>
                            <td>{item.lesson}</td>
                            <td></td>
                        </tr>
                    ))}
                    
                </table>
            </div>
        </div>
    )
}

export default Atlas_Table