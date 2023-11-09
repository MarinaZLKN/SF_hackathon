import React, { useState } from 'react';

function UselessButton() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div className="UselessButton">
            <button onClick={handleClick}>{count}</button>
        </div>
    );
}

export default UselessButton;
