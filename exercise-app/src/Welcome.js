import React from "react";
import { Age } from "./Age";

export function Welcome(props) {
    return (
        <div className="welcome">
            <p>Welcome, {props.name}</p>
        </div>
    )
}