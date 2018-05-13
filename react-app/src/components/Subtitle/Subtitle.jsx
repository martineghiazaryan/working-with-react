import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({children, classname}) => (
    <h5 className={classname}>
        {children}
    </h5>
);

Subtitle.propTypes = {
    children: PropTypes.node.isRequired,
    classname: PropTypes.string,
};
Subtitle.defaultProps = {
    className: '',
};

export default Subtitle;