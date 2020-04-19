import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

export const Calendar: React.FunctionComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="field">
      <label className="label">Date</label>
      <div className="control">
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat='dd/MM/yyyy'
        />
      </div>
    </div>
  );
}
