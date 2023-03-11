import React, { useState, useEffect } from 'react'

export default function ProgressBar({ name, width }) {
    const [zero, setZero] = useState("zero");

    useEffect(() => { setTimeout(() => { setZero("") }, 300) } ); // useEffect
    // (() => { setTimeout(() => { setZero("") }, 300) })(); // useSatte

    return (
    <>
        <span>{name} <small id="CSS">{width}%</small></span>
        <div className="progress mb-2">
        <div className={"progress-bar bg-secondary " + zero} role="progressbar" aria-valuenow={width} aria-valuemin="0" aria-valuemax="100" style={{width: width +"%"}}></div>
        </div>
    </>);
}