//! HTML(NO) ---> JSX
import React, {useState,useEffect} from 'react'

export default function List ({getItems}){ //1,2,3
    const [items,setItems] = useState([]);

    useEffect(() => {


        setItems(getItems())

        console.log('UPDATING ITEMS')
        
    }, [getItems]);

    return items.map( item => <div key={item}>  {item} </div>  )


}