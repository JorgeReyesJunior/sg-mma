import React, { useState, useEffect } from 'react';
import * as utils from './Utilities';

function CalendarWeekView(props) {
  const [courseList, setCourseList] = useState();
  const [date, setDate] = useState();
  const [day, setDay] = useState();
  // const [daysInMonth, setDaysInMonth] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [weekData, setWeekData] = useState();
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;

    return { width, height };
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
      setCourseList(utils.getAllClassesByKey("name"))
      setDate(props.dateObj.getDate());
      setDay(props.dateObj.getDay());
      // setDaysInMonth(utils.getDaysInMonth(props.dateObj));
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

  if ((weekData && courseList) && windowDimensions.width < 768) {
    const smallScreenWeekScheduleStyles = {
      gridTemplateRows: `repeat(${7}, 1fr)`
    }
    return (
      <div className="c-calendar c-calendar--week">
        <div className="c-calendar__header">
          <h2 className="c-calendar__title">Weekly Schedule</h2>
          <div className="c-calendar__indicators">
            <p className="">{`Today is: ${utils.getCalendarWeekday(day)}, ${utils.getCalendarMonth(month)}, ${date}, ${year}`}</p>
          </div>
        </div>
        <div className="c-calendar__body">
          <div className="c-calendar__schedule" style={smallScreenWeekScheduleStyles}>
            {
              weekData.map((day, i) => {
                let { daySchedule } = day;
                let courses = Object.values(daySchedule)

                let smallScreenGridRowStyles = {
                  gridTemplateRows: `50px repeat(${courses.length}, 1fr)`,
                }

                return (
                  <div className="c-calendar__weekday" key={i*i} style={smallScreenGridRowStyles}>
                    <div className="c-weekday"> 
                      <p className="c-weekday__name">
                        {utils.getCalendarWeekday(day.day.getDay())}
                      </p>
                    </div>
                    {
                      courses.map((course, i) => {
                        return (
                          <div className="c-weekday c-weekday--s-screen" key={i*i}>
                            <div className="c-weekday__course">
                              <p className="c-weekday__course-name">{course.name}</p>
                            </div>
                            <ul className="c-weekday__schedule">
                              {
                                course.scheduleTimes.map((times, i)=> {
                                  return <p className="c-weekday__times" key={i*i}>{`${times.startTime} - ${times.startTime}`}</p>
                                })
                              }
                            </ul>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  } else if ((weekData && courseList)) {
    const largeScreenGridRowStyles = {
      gridTemplateRows: `50px repeat(${utils.getAllClassesByKey("name").length}, 1fr)`,
    }
    const largeScreenWeekScheduleStyles = {
      gridTemplateColumns: `repeat(${7}, 1fr)`
    }

    return (
      <div className="c-calendar c-calendar--week">
        <div className="c-calendar__header">
          <h2 className="c-calendar__title">Weekly Schedule</h2>
          <div className="c-calendar__indicators">
            <p className="">{`Today is: ${utils.getCalendarWeekday(day)}, ${utils.getCalendarMonth(month)}, ${date}, ${year}`}</p>
          </div>
        </div>
        <div className="c-calendar__body">
          <div className="c-calendar__courselist" style={largeScreenGridRowStyles}>
            <div className="c-calendar__course">
              <p className="c-calendar__course-name">:</p>
            </div>
            {
              courseList.map((course, i) => {
                return (
                  <div className="c-calendar__course" key={i*i}>
                    <p className="c-calendar__course-name">{course.name}</p>
                  </div>
                )
              })
            }
          </div>
          <div className="c-calendar__schedule" style={largeScreenWeekScheduleStyles}>
            {
              weekData.map((day, i) => {
                let { daySchedule } = day;
                let courses = Object.values(daySchedule)

                return (
                  <div className="c-calendar__weekday" key={i*i} style={largeScreenGridRowStyles}>
                    <div className="c-weekday"> 
                      <p className="c-weekday__name">
                        {utils.getCalendarWeekday(day.day.getDay())}
                      </p>
                    </div>
                    {
                      courseList.map((listedCourse, i) => {
                        return (
                          <div className="c-weekday" key={i*i}>
                            <ul className="c-weekday__courses">
                              {
                                courses.map((course) => {
                                  if(listedCourse.name === course.name) {
                                    return course.scheduleTimes.map((timeFrame, k) => {
                                      let { startTime, endTime } = timeFrame;

                                      if(startTime && endTime) {
                                        return (
                                          <li className="c-weekday__course-schedule" key={k*k}>
                                            <p className="c-weekday__course-times">{`${timeFrame.startTime} - ${timeFrame.endTime}`}</p>
                                          </li>
                                        )
                                      } else {
                                        return null;
                                      }
                                    })
                                  } else {
                                    return null;
                                  }                  
                                })
                              }
                            </ul>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  } else {
    return null;
  }
};

export default CalendarWeekView;