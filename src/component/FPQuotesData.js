import React from 'react';
import { useQuery } from "react-query";
import { getFpQuote } from '../utilities/fpQuotes';

const FPQuotesData = () => {
    const { data } = useQuery("quote", () => getFpQuote());
    console.log(data)
    return (
        <div>
            <h1>Raect Query Data fetch</h1>
            <p>{data.content}</p>
        </div>
    );
};

export default FPQuotesData;