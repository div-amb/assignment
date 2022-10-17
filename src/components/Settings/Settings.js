import React from 'react'
import "./Settings.css"
import Settings_Items from './Settings_Items'

const Settings = () => {
    return (
        <div>
            <div className='settings'>
                <table className='settings-table'>
                    <tr>
                        <th className='settings-th'>Settings</th>
                    </tr>
                    {Settings_Items.map((item)=> (
                        <tr key={item.id}>
                            <td>
                                <p>{item.title}</p>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default Settings