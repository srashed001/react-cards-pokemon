import axios from "axios";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";

const useAxios = (url) => {
    const [data, setData] = useState([]);

    const addData = async (endPoint) => {
        const response = endPoint ? await axios.get(`${url}/${endPoint}`) : await axios.get(url)
        setData(data => [...data, {...response.data, id: uuid()}])
    };


    return [data, addData]

   

}

export default useAxios