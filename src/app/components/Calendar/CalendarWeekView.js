import React, { useState, useEffect, Fragment } from 'react';
import * as utils from './Utilities';
// import ScheduleMap from '../../data/Schedule';

function CalendarWeekView(props) {
  const [date, setDate] = useState();
  const [day, setDay] = useState();
  const [daysInMonth, setDaysInMonth] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [week, setWeek] = useState();
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;

    return { width, height };
  }
  function goToThisWeek() {
    setDate(props.dateObj.getDate());
    setDay(props.dateObj.getDay());
    setDaysInMonth(utils.getDaysInMonth(props.dateObj));
    setMonth(props.dateObj.getUTCMonth());
    setWeek(utils.getCurrentWeekData(props.dateObj));
    setYear(props.dateObj.getUTCFullYear());
  }

  // TODO
  function goToPreviousWeek() {
    // TODO: Handle month change
    console.log("Get previous 7 days")
  }
  function goToNextWeek() {
    // TODO: Handle month change
    console.log("Get next 7 days")
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

    function initCalendarWeekView() {
      setDate(props.dateObj.getDate());
      setDay(props.dateObj.getDay());
      setDaysInMonth(utils.getDaysInMonth(props.dateObj));
      setMonth(props.dateObj.getUTCMonth());
      setWeek(utils.getCurrentWeekData(props.dateObj));
      setYear(props.dateObj.getUTCFullYear());
    }

    if(!useEffectAborted && !week) {
      initCalendarWeekView();
    }

    return (
      () => {
        useEffectAborted = true;
      }
    );
  }, [props, week]);

  // TODO
  if (week && windowDimensions.width < 576) {
    // Small Screen View.
    return (
      <div className="c-calendar">
        <h2 className="c-calendar__title">Weekly Schedule</h2>
        <div className="c-calendar__header">
          <div className="c-calendar__controls">
              <span>{`<`}</span>
              <p className="">{`${week[0].day.getDate()}/${week[0].day.getMonth()} - ${week[6].day.getDate()}/${week[0].day.getMonth()}`}</p>
              <span>{`>`}</span>
            </div>
            <div className="c-calendar__indicators">
              <p className="">{`Today is: ${utils.getCalendarWeekday(day)}, ${utils.getCalendarMonth(month)}, ${date}, ${year}`}</p>
          </div>
        </div>
        <div className="c-calendar__body">
          {
            week.map((day, i) => {
              let schedule = day.schedule ? day.schedule : "";

              // console.log("schedule: ", schedule)

              const MobileSchedule = () => {
                if(schedule) {
                  return (
                    <Fragment>
                      {
                        schedule.map((course, i) => {
                          return (
                            <Fragment key={i*i}>
                              <tr>
                                <td>{`${course.name}`}</td>
                                <td>{`${course.startTime} - ${course.startTime}`}</td>
                              </tr>
                            </Fragment>
                          )
                        })
                      }
                    </Fragment>
                  )
                } else {
                  return (
                    <Fragment key={i*i}>
                    <tr>
                      <td>{`OFF`}</td>
                    </tr>
                  </Fragment>
                  )
                }
              }

              return(
                <Fragment key={i*i}>
                  <tbody className="c-table__body">
                    <tr>
                      <th colSpan="3">{`${utils.getCalendarWeekday(day.day.getDay())}`}</th>
                    </tr>
                    <MobileSchedule />
                  </tbody> 
                </Fragment>
              )
            })
          }
          </div>
        </div>
    );
  } else if(week) {
    // Medium/Large Screen View.
    return (
      <table className="c-table c-table--calendar-week">
        <thead className="c-table__header">
          <tr className="c-table__tr">
            <th className="c-table__th c-table__th--empty"></th>
            {
              week.map((day, i) => {
                console.log(day)
                return(
                  <th className="c-table__th--day" key={i*i}>
                    {/* <span className="c-date c-date--full">{`${utils.getCalendarWeekday(day.day.getDay())}, ${day.day.getDate()}`}</span> */}
                    <span className="c-date c-date--short">{`${utils.getTruncatedCalendarWeekday(day.day.getDay())}`}</span>
                    <br></br>
                    <span className="c-date c-date--short">{`${day.day.getDate()}`}</span>
                  </th>
                )
              })
            }
          </tr>
        </thead>
        <tbody className="c-table__body">
          {/* {
            utils.classListByName.map((course, i) => {
              console.log(course)
              return(
                <Fragment key={i*i}>
                  <tr className="c-table__tr">
                    <td className="hour" >
                      <span>course</span>
                    </td>
                      {
                        week.map((day, j) => {
                          return <td key={j*j}></td>
                        })
                      }
                  </tr>
                </Fragment>
              )
            })
          } */}
        </tbody>
      </table>
    )
  } else {
    return null;
  }
};

export default CalendarWeekView;