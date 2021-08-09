import { useState } from "react"

export const useFetchGifs = () => {
    const [state, setstate] = useState({
        data:[],
        loading:true,
    });

    setTimeout(() => {
        setstate({
            data:[1,12,4,34,23,4],
            loading:false
        })
    }, 3000);
    return state; //{data:[],loading:true}
}
