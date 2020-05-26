import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';

const Osrsnews = () => {
    const API_KEY = 'aab9f89cb9bc408e9e763d2fe2e433f3';

    const [story, setInfo] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const response = await fetch(`
        https://newsapi.org/v2/everything?q=runescape&apiKey=${API_KEY}`);
        const data = await response.json();
        setInfo(data.articles);
        console.log(data.articles);  
    }

    return(
        <Container>
        <div className="newsHeading">
            <h1>Keep up to date with the latest news!</h1>
        </div>
        </Container>
    )
};

export default Osrsnews;