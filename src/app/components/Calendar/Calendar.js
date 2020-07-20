import React, { useState, useEffect } from 'react';
import CalendarWeekView from './CalendarWeekView';
import './Calendar.css';

function Calendar() {
  const [dateObj, setDateObj] = useState();

  useEffect(() => {
    let useEffectAborted = false;

    function initCalendar() {
      const dateObj = new Date();
        
      setDateObj(dateObj);
    }

    if(!useEffectAborted && !dateObj) {
      initCalendar();
    }

    return (
      () => {
        useEffectAborted = true;
      }
    );
  }, [dateObj]);

  if (dateObj) {
    return (
      <section id="schedule">
        <CalendarWeekView dateObj={dateObj} />
      </section>
    );
  } else {
    return null;
  }
}

export default Calendar;
