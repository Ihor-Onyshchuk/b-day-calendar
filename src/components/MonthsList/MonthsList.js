import React from 'react';
import Button from '../Button/Button';

const MonthsList = ({ months, ...otherProps }) => {
  console.log('otherProps', otherProps);
  return (
    <>
      {
        months.map(month => (
          <Button
            key={month.text}
            {...month}
            {...otherProps}
            className="btn-sm shadow m-1"
          />
        ))
      }
    </>
  )
};

export default MonthsList;