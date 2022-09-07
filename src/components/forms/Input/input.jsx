import React from "react";

export const Input = React.forwardRef((props, ref) => {

    return (
        <div className="form-outline">
            <input type="number" id="typeNumber" className="form-control" {...props.input} ref={ref}/>
            <label className="form-label" htmlFor={props.input.id}>{props.label}</label>
        </div>
    );
});
