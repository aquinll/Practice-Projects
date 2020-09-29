import React from "react";
import { Link } from "react-router-dom";

export const MySideBar = () => {
    return (
        <div className="sidebar">
            <p>
                <Link to="/" className="linkStyleMedium">Overview</Link><br/>
            </p>
            <p>
                <Link to="/areapage" className="linkStyleMedium">Area</Link><br/>
            </p>
            <p>
                <Link to="/volumepage" className="linkStyleMedium">Volume</Link><br/>
            </p>
            <p>
                <Link to="/databasepage" className="linkStyleMedium">Database</Link><br/>
            </p>
            <p>
                <Link to="/marketplacepage" className="linkStyleMedium">Marketplace</Link><br/>
            </p>
        </div>
    );
}