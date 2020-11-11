import * as React from 'react';

const CounterControl = ({ subtractHandler, addHandler, count }) => {
    return (
        <div className="counter">
            <button type="button" disabled={count === 1} onClick={subtractHandler} name='subtract' className="counter_btn subtract">-</button>
            <span className="number" id="counter">{count}</span>
            <button type="button" onClick={addHandler} className="counter_btn add">+</button>
        </div>
    )
}

export default CounterControl;