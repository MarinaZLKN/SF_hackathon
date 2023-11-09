import React, { useState } from 'react';
import '../styles/UseLessButton.css';

function UselessButton() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div className="btn-div">
            <button className="uselessButton" onClick={handleClick}>{count}</button>
        </div>
    );
}

export default UselessButton;
