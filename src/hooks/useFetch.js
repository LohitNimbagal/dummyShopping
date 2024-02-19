import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

function useFetch() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
 
    useEffect(() => {
        setLoading(true);
        axios
            .get('https://dummyjson.com/products')
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return {data, loading, error}
}

export default useFetch