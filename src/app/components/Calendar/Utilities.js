import ClassSchedule from '../../../assets/data/ScheduleMap';

const calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const calendarWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getAllClasses() {
  let schedule = ClassSchedule;
  let allScheduledClasses = [];

  schedule.forEach((day)=> {
    day.forEach((scheduledClass) => {
      allScheduledClasses.push(scheduledClass);
    });
  });

  const classList = allScheduledClasses.filter((course, i) => i === allScheduledClasses.findIndex(obj => JSON.stringify(obj) === JSON.stringify(course)));
  
  return classList;
}
function getAllClassesByKey(key) {
  const schedule = getAllClasses(ClassSchedule);
  const classList = [...new Map(schedule.map(item => [item[key], item])).values()];
  
  return classList;
}
function getCalendarMonth(month) {
  return calendarMonths[month];
}
function getCalendarWeekday(day) {
  return calendarWeekdays[day];
}
function getCurrentWeekData(dateObj) {
  const currentWeekData = [];
  const firstDayOfWeek = getFirstDayOfWeek(new Date(dateObj.getUTCFullYear(), dateObj.getUTCMonth(), dateObj.getDate()))
  const lastDayOfWeek = getLastDayOfWeek(new Date(dateObj.getUTCFullYear(), dateObj.getUTCMonth(), dateObj.getDate()));
  
  let i = firstDayOfWeek.getDate();

  do {
    let day = new Date(dateObj.getUTCFullYear(), dateObj.getUTCMonth(), i);

    // Week UI is Mon-Sun, so, first day of the week is Monday instead of Sunday,so, getDay() - 1.
    let schedule = ClassSchedule.get(day.getDay() - 1) ? ClassSchedule.get(day.getDay() - 1) : [{}]
    let filteredDaySchedule = getFilteredDaySchedule(schedule);
    let daySchedule = Object.assign({}, filteredDaySchedule);

    Object.values(daySchedule).forEach((course) => {
      delete course.startTime;
      delete course.endTime;
    });

    currentWeekData.push({ day, daySchedule })

    i = i + 1;
  } while (i < lastDayOfWeek.getDate() + 1);

  // console.log("currentWeekData: ", currentWeekData);
  return currentWeekData;
}
function getDaysInMonth(dateObj) {
  // Month is 1-indexed (January is 1, February is 2, etc).
  return new Date(dateObj.getUTCFullYear(), dateObj.getUTCMonth() + 1, 0).getDate();
}
function getFilteredDaySchedule(daySchedule) {
  let catalog = [];
  let schedule = daySchedule;

  schedule.forEach((course, i) => {
    let { startTime, endTime } = course;
    let catalogedCourses = catalog.filter((item, i) => {
      return course.name === item.name;
    });

    if (catalogedCourses.length) {
      let catalogedCourseIndex = catalog.indexOf(catalogedCourses[0]);
      let catalogedCourseSchedule = catalog[catalogedCourseIndex].scheduleTimes;
      let newTime = { startTime, endTime }

      catalogedCourseSchedule.push(newTime);

    } else {
      let scheduleTimes = [{ startTime, endTime}];
      
      catalog.push({...course, scheduleTimes, filtered: true});
    }
  
  })

  return catalog;
}
function getFirstDayOfWeek(dateObj) {
  // Week UI is Mon-Sun, so, first day of the week is Monday instead of Sunday.
  let day = dateObj.getDay() === 0 ? -6 : 1;
  let date = (dateObj.getDate() - dateObj.getDay() + day);

  return new Date(dateObj.setDate(date));
}
function getLastDayOfWeek(dateObj) {
  // Week UI is Mon-Sun, so, last day of the week is Sunday instead of Saturday.
  let date = (dateObj.getDate() - dateObj.getDay()) + 7;

  return new Date(dateObj.setDate(date));
}
function getTruncatedCalendarWeekday(day) {
  return calendarWeekdays[day].substring(0,3);;
}

export {
  getAllClassesByKey,
  getCalendarMonth,
  getCalendarWeekday,
  getCurrentWeekData,
  getDaysInMonth,
  getFilteredDaySchedule,
  getTruncatedCalendarWeekday
};