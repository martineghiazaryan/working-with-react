import React from 'react';
import PropTypes from 'prop-types';
import './Value.css';


const Value = ({ text }) => (
    <div className="value">
        {text}
    </div>
);

Value.propTypes = {
    text: PropTypes.node.isRequired,
};

export default Value;