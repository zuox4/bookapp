import React from 'react';
import coinsphoto from '../assets/coins.svg';
import charge from '../assets/charge.svg';
import './InfoCoinPanel.css';

export const InfoCoinPanel = ({ coins, energy }) => {
    const red = { background: 'red', height: '10px' };
    const orange = { background: 'orange', height: '22px' };
    const green = { background: 'green', height: '16px' };

    const getChargeColor = () => {
        if (energy > 80) return green;
        else if (energy > 50) return orange;
        else return red;
    };

    return (
        <div className="infocoinpanel">
            <div className="coin">
                <img className="coin-image" src={coinsphoto} alt="" />
                <span>{coins}</span>
            </div>
            <div className="charge">
                <div className="charge-container">
                    {/* <img className="charge-image" src={charge} alt="" /> */}
                    <div className="charge-bar" style={getChargeColor()}></div>
                </div>
                <span>{energy}%</span>
            </div>
        </div>
    );
}