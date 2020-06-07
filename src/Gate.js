import React from 'react';

function Gate ({isOpen}) {
    return <div>{isOpen===true ? "Open" : "Closed"}</div>;
}


export default Gate;