import React, { useState, useEffect } from 'react'

function OnOffLineConcept() {
    // const [status, setStatus] = useState('Loading...');
    const [seconds, setSeconds] = useState(0);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log("time interval completed");
    //         setStatus("loaded!");
    //     }, 5000);
    //     return clearInterval(timer);
    // },[])

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        },1000)
        return () => clearInterval(timer);
    },[])

    return (
        <div>
            {/* <h3>{status}</h3> */}
           <h3>4. Time in Seconds: {seconds}</h3> 
        </div>
    )
}

export default OnOffLineConcept