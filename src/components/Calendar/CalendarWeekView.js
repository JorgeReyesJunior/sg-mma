import React, { useState, useEffect } from 'react';
import DesktopWeekView from './DesktopWeekView';
import MobileWeekView from './MobileWeekview';

function CalendarWeekView(props) {
  const [activeDate, setActiveDate] = useState();
  const [activeDay, setActiveDay] = useState();
  const [activeMonth, setActiveMonth] = useState();
  const [activeYear, setActiveYear] = useState();
  const [activeDaysInMonth, setActiveDaysInMonth] = useState();
  const [adjustedWeek, setAdjustedWeek] = useState();
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;

    return { width, height };
  }
  function goToThisWeek() {
    console.log('get current 7 days: ');
    console.log('date: ', activeDate);
    console.log('day: ', activeDay, props.weekdays[activeDay]);
    console.log('month: ', activeMonth, props.months[activeMonth]);
    console.log('year: ', activeYear);
  }
  function goToPreviousWeek() {
    console.log("Get previous 7 days")
  }
  function goToNextWeek() {
    console.log("Get next 7 days")
  }
  function renderWeekViewComponent() {
    const { width } = windowDimensions;

    if (width < 576) {
      return (
        <MobileWeekView
          activeDate={activeDate}
          activeDay={activeDay}
          activeMonth={activeMonth}
          activeYear={activeYear}
          activeDaysInMonth={activeDaysInMonth}
        />
      )
    } else {
      return(
        <DesktopWeekView
          activeDate={activeDate}
          activeDay={activeDay}
          activeMonth={activeMonth}
          activeYear={activeYear}
          activeDaysInMonth={activeDaysInMonth}
        />
      )
    }
  }

  useEffect(() => {
    let useEffectAborted = false;

    function detectWindowDimensions() {
      setWindowDimensions(getWindowDimensions());
    }

    if(!useEffectAborted) {
      window.addEventListener('resize', detectWindowDimensions);
    }

    return (
      () => {
        window.removeEventListener('resize', detectWindowDimensions);

        useEffectAborted = true;
      }
    );

  }, [windowDimensions]);

  useEffect(() => {
    let useEffectAborted = false;

    function getActiveDaysInMonth() {
      // Month is 1-indexed (January is 1, February is 2, etc).
      return new Date(props.dateObj.getUTCFullYear(), props.dateObj.getUTCMonth() + 1, 0).getDate();
    }
    function getAdjustedWeek() {
      const adjustedWeek = props.weekdays.reduce((newArray, element) => {
        newArray.push(element);
        return newArray;
      }, []);
      const Sunday = adjustedWeek.shift();
  
      adjustedWeek.push(Sunday);

      return adjustedWeek;
    }
    function initCalendarWeekView() {
      setActiveDate(props.dateObj.getDate());
      setActiveDay(props.dateObj.getDay());
      setActiveMonth(props.dateObj.getUTCMonth());
      setActiveYear(props.dateObj.getUTCFullYear());
      setActiveDaysInMonth(getActiveDaysInMonth());
      setAdjustedWeek(getAdjustedWeek());
    }

    if(!useEffectAborted && !activeDate) {
      initCalendarWeekView();
    }

    return (
      () => {
        useEffectAborted = true;
      }
    );
  }, [props, activeDate]);

  if(adjustedWeek) {
    return (
      <div className="c-calendar">
        <h2 className="c-calendar__title">{'Weekly Schedule'}</h2>
        <div className="c-calendar__header">
          <h2 className="c-calendar__value">{`${props.months[activeMonth]}`}, {`${activeDate}`}, {`${activeYear}`}</h2>
          <button className="c-button c-button--calendar-today" onClick={goToThisWeek}>This Week</button>
          <div className="c-calendar__indicators">
            <button onClick={goToPreviousWeek}>{`<`}</button>
            <h2 className="c-calendar__day">{`${props.weekdays[activeDay]}`}</h2>
            <button onClick={goToNextWeek}>{`>`}</button>
          </div>
        </div>
        { renderWeekViewComponent() }
        <div className="c-calendar__footer">Calendar Footer</div>
      </div>
    );
  } else {
    return null;
  }
};

export default CalendarWeekView;