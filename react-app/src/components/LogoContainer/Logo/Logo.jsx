import React from 'react';
import PropTypes from 'prop-types';
import './Logo.css'

const Logo = ({ logo }) => (
    <div className="logo">
        {logo}
    </div>
);

Logo.propTypes = {
    logo: PropTypes.node.isRequired,
};

export default Logo;