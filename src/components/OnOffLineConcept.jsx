import React, { useState, useEffect } from 'react'

function OnOffLineConcept() {
    const [status, setStatus] = useState();

    useEffect(() => {
        const timer = setTimeout(() => {
            setStatus();
        }, 1000);
        return clearTimeout(timer);
    })

    return (
        <div>
            <span onShow={status} onChange={e => setStatus(e)}>Loading...</span>
        </div>
    )
}

export default OnOffLineConcept