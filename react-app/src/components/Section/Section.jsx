import React from 'react';
import PropTypes from 'prop-types';

const Section = ({children, classname}) => (
    <div className={classname}>
        {children}
    </div>
);

Section.propTypes = {
    children: PropTypes.node.isRequired,
    classname: PropTypes.string.isRequired,
};

export default Section;