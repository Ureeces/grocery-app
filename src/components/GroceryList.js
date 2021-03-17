import React from 'react';



export default function List({itemList}) {
    return (
        <div>  
            <ul>
            {itemList.map(item => (
                <li key={item.id}>
                    Product:
                       <span>{item.name}</span>
                    
                </li>   
            ))}
            </ul>
        </div>
    )
}