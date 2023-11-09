import React from 'react';
import { Icon } from '@iconify/react';

export const Infos = ({ Info, deletetable }) => {

    return Info.map(table => (

        <tr className=' text-white font-bold capitalize' key={table.email}>
            <td className='px-5 text-center'>{table.FirstName}</td>
            <td className='px-5 text-center'>{table.LastName}</td>
            <td className=' px-5 text-center lowercase'>{table.email}</td>
            <td className=' px-5 text-center'>{table.PhoneNumber}</td>
            <td className='px-5 text-center text-2xl pointer pl-5 text-red-500' onClick={() => deletetable(table.email)}>
                <Icon icon="ic:outline-delete" />
            </td>
        </tr>

    ))
}