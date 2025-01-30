// src/components/Dice.jsx
import React, { useState } from 'react';

const Dice = () => {
    const [value, setValue] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [previousValues, setPreviousValues] = useState([]);

    const rollDice = () => {
        const newValue = Math.floor(Math.random() * 6) + 1;
        setValue(newValue);
        setRotation(rotation + 360); // Rotate the dice
        setPreviousValues((prev) => {
            const updatedValues = [newValue, ...prev];
            return updatedValues.slice(0, 5); // Keep only the last 5 rolls
        });
    };

    return (
        <div>
            <h1>Dice Roller</h1>
            <div
                className="dice"
                style={{ transform: `rotate(${rotation}deg)` }}
                onClick={rollDice}
            >
                {renderDots(value)}
            </div>
            <div className='temp'>
                <button onClick={rollDice}>Roll Dice</button>
                <div className="previous-values">
                    <h2>Previous Rolls:</h2>
                    <ul>
                        {previousValues.map((val, index) => (
                            <li key={index}>{val}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const renderDots = (value) => {
    const dots = {
        1: [<div className="dot dot-5" key="1" />],
        2: [
            <div className="dot dot-1" key="1" />,
            <div className="dot dot-9" key="2" />
        ],
        3: [
            <div className="dot dot-1" key="1" />,
            <div className="dot dot-5" key="2" />,
            <div className="dot dot-9" key="3" />
        ],
        4: [
            <div className="dot dot-1" key="1" />,
            <div className="dot dot-3" key="2" />,
            <div className="dot dot-7" key="3" />,
            <div className="dot dot-9" key="4" />
        ],
        5: [
            <div className="dot dot-1" key="1" />,
            <div className="dot dot-3" key="2" />,
            <div className="dot dot-5" key="3" />,
            <div className="dot dot-7" key="4" />,
            <div className="dot dot-9" key="5" />
        ],
        6: [
            <div className="dot dot-1" key="1" />,
            <div className="dot dot-3" key="2" />,
            <div className="dot dot-4" key="3" />,
            <div className="dot dot-6" key="4" />,
            <div className="dot dot-7" key="5" />,
            <div className="dot dot-9" key="6" />
        ],
    };

    return dots[value];
};

export default Dice;