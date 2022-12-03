import React from "react";
import PropTypes from "prop-types";
import Button from "./Button/Button";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
const renderButton = onClickNumber => {
    return numbers.map(num => <Button key={num} text={num.toString()} clickHandler={onClickNumber}/>)
}

const Numbers = ({onClickNumber}) => (
    <div className="numbers">
        {renderButton(onClickNumber)}
    </div>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers;