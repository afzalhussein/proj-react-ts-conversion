import React from "react";
import "./RadioButtonContainer.css";

export default function RadioButtonContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="radio-section">
            {React.Children.map(children, (child, index) => (
                <div key={index} className="radio-item">
                    {child}
                </div>
            ))}
        </div>
    );
}