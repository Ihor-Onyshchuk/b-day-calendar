import React from 'react';
import Button from '../Button/Button';

const MonthsList = ({ months, ...otherProps }) => (
  <>
    {
      months.map(month => (
        <Button
          key={month.text}
          {...month}
          {...otherProps}
        />
      ))
    }
  </>
);

export default MonthsList;