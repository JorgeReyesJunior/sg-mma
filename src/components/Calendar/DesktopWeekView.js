import React, { useEffect } from 'react';

function CalendarDesktopWeekView(props) {
  useEffect(() => {
    let useEffectAborted = false;

    if(!useEffectAborted) {
      console.log("CalendarDesktopWeekView: ", props)
    }

    return (
      () => {
        useEffectAborted = true;
      }
    );

  }, [props]);

  return (
    <div className="c-calendar__body c-calendar__body--desktop">
      Desktop Body
    </div>
  );
};

export default CalendarDesktopWeekView;