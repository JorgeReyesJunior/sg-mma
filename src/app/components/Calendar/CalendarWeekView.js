import React, { useState, useEffect } from 'react';
import * as utils from './Utilities';

function CalendarWeekView(props) {
  const [date, setDate] = useState();
  const [day, setDay] = useState();
  const [daysInMonth, setDaysInMonth] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [weekData, setWeekData] = useState();
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;

    return { width, height };
  }

  // TODO: Add week control functions
  // function goToThisWeek() {
  //   setDate(props.dateObj.getDate());
  //   setDay(props.dateObj.getDay());
  //   setDaysInMonth(utils.getDaysInMonth(props.dateObj));
  //   setMonth(props.dateObj.getUTCMonth());
  //   setWeekData(utils.getCurrentWeekData(props.dateObj));
  //   setYear(props.dateObj.getUTCFullYear());
  // }

  // // TODO
  // function goToPreviousWeek() {
  //   // TODO: Handle month change
  //   console.log("Get previous 7 days")
  // }
  // function goToNextWeek() {
  //   // TODO: Handle month change
  //   console.log("Get next 7 days")
  // }

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

    function initCalendarWeekView() {
      setDate(props.dateObj.getDate());
      setDay(props.dateObj.getDay());
      setDaysInMonth(utils.getDaysInMonth(props.dateObj));
      setMonth(props.dateObj.getUTCMonth());
      setWeekData(utils.getCurrentWeekData(props.dateObj));
      setYear(props.dateObj.getUTCFullYear());
    }

    if(!useEffectAborted && !weekData) {
      initCalendarWeekView();
    }

    return (
      () => {
        useEffectAborted = true;
      }
    );
  }, [props, weekData]);

  if (weekData && windowDimensions.width < 768) {
    return (
      <div className="c-calendar c-calendar--week">
        <div className="c-calendar__header">
          <h2 className="c-calendar__title">Weekly Schedule</h2>
          {/* <div className="c-calendar__controls">
            <span>{`<`}</span>
            <p className="">{`${weekData[0].day.getDate()}/${weekData[0].day.getMonth()} - ${weekData[6].day.getDate()}/${weekData[0].day.getMonth()}`}</p>
            <span>{`>`}</span>
          </div> */}
          <div className="c-calendar__indicators">
            <p className="">{`Today is: ${utils.getCalendarWeekday(day)}, ${utils.getCalendarMonth(month)}, ${date}, ${year}`}</p>
          </div>
        </div>
        <div className="c-calendar__body">
          MOBILE
        </div>
      </div>
    )
  } else if (weekData) {
    return (
      <div className="c-calendar c-calendar--week">
        <div className="c-calendar__header">
          <h2 className="c-calendar__title">Weekly Schedule</h2>
          {/* <div className="c-calendar__controls">
            <span>{`<`}</span>
            <p className="">{`${weekData[0].day.getDate()}/${weekData[0].day.getMonth()} - ${weekData[6].day.getDate()}/${weekData[0].day.getMonth()}`}</p>
            <span>{`>`}</span>
          </div> */}
          <div className="c-calendar__indicators">
            <p className="">{`Today is: ${utils.getCalendarWeekday(day)}, ${utils.getCalendarMonth(month)}, ${date}, ${year}`}</p>
          </div>
        </div>
        <div className="c-calendar__body">
          <div className="c-calendar__days">
            
          </div>
          <div className="c-calendar__schedule">
            <div>
              {

              }
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return null;
  }
};

export default CalendarWeekView;