import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
        const[products, setProdcts] = useState([]);

        useEffect(async() =>{
             const response = await axios(API);
             setProdcts(response.data);
          },[]);

        return products;
};

export default useGetProducts;