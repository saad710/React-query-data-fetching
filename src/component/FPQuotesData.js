import React from 'react';
import { useQuery } from "react-query";
import { getFpQuote } from '../utilities/fpQuotes';

const FPQuotesData = () => {
    const { data } = useQuery("quote", () => getFpQuote());
    console.log(data)
    return (
        <div>
            {/* <h1>Raect Query Data fetch</h1>
            <p>{data.content}</p> */}
            {
                data.map(post => (
                    <p key={post.id}> {post.title}</p>
                ))
            }
        </div>
    );
};

export default FPQuotesData;