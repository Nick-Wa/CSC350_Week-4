import {data} from '../assets/data.js';
import '../App.css'
export default function ListData({value}){ //component function for generating table from data
    const dataList = data.filter(data => 
        data.species.toLowerCase().includes(value.toLowerCase())//adding includes for partial animal search.
    );
    const rowItems=dataList.map(data =>
        <tr key = {data.id}>
            <td className='mx-auto'>
                <img src={data.url}/>
            </td>
            <td className='whitespace-nowrap text-center px-6 py-4 font-medium text-gray-900'>
                {data.name}
            </td>
            <td className='whitespace-nowrap text-center px-6 py-4 font-medium text-gray-900'>
                {data.species}
            </td>
            <td className='whitespace-nowrap text-center px-6 py-4 font-medium text-gray-900'>
                {data.age}
            </td>
            <td className='whitespace-nowrap text-left px-6 py-4 font-medium text-gray-900'>
                {data.fun_fact}
            </td>
        </tr>
    )
    console.log(rowItems);
if(value === ''){ //shows nothing in the list if input value is blank
    return null;
} else {
    return rowItems;}
}
