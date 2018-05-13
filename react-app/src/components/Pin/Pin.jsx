import React from 'react';
import PropTypes from 'prop-types';
import './Pin.css';

const Pin = ({ letter }) => (
    <div className="pin">
        {letter}
    </div>
);

Pin.propTypes = {
    letter: PropTypes.node.isRequired,
};

export default Pin;