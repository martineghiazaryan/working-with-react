import React from 'react';
import PropTypes from 'prop-types';
import './LogoSubtitle.css'


const LogoSubtitle = ({ subtitle }) => (
    <div className="logo-subtitle">
        {subtitle}
    </div>
);

LogoSubtitle.propTypes = {
    subtitle: PropTypes.node.isRequired,
};

export default LogoSubtitle;

