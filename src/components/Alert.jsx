import React from 'react';

const Alert = (props) => {
    
    return (
        <div className={props.alert_type} role="alert">
            <strong>{props.alert_message}</strong>
        </div>
      );

    
};

export default Alert;
