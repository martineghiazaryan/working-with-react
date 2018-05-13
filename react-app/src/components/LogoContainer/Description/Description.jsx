import React from 'react';
import PropTypes from 'prop-types';
import './Description.css';


const Description = ({ text }) => (
    <div className="description">
        {text}
    </div>
);

Description.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Description;
