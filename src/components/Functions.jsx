import React from "react";
import PropsTypes from "prop-types";
import Button from "./Button/Button";

const Functions = ({onContentClear, onDelete}) => (
    <div className="functions">
        <Button type="button-long-text" text="Clear" clickHandler={onContentClear}/>
        <Button text="&larr;" clickHandler={onDelete}/>
    </div>
)

Functions.propsType={
    onContentClear: PropsTypes.func.isRequired,
    onDelete: PropsTypes.func.isRequired
}
export default Functions;