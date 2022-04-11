import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Google');

    const getResults = async (url) => {
        setLoading(true);

        const res = await fetch(`${baseUrl}${url}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '9482422befmshad91fb0e0d6db80p18f86ejsn663fa8190a30'
            }
        });



        const data = await res.json();

        if (url.includes('/news')) {
            setResults(data.entries);
        }
        else if (url.includes('/image')) {
            setResults(data.image_results);
            // console.log(data.image_results);


        }
        else {
            setResults(data.results);
        }
        // setResults(data);
        setLoading(false);
    };

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
            {children}
        </ResultContext.Provider>
    );
};

export const useResultContext = () => useContext(ResultContext);
