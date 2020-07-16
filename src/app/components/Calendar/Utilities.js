import CalendarMonths from './CalendarMonths';
import CalendarWeekdays from './CalendarWeekdays';
import ClassSchedule from '../../../assets/data/ScheduleMap';

/*** Calendar Helper functions ***/
function getAllClasses(schedule) {
  let allScheduledClasses = [];

  // Collect all scheduled classes.
  schedule.forEach((day)=> {
    day.forEach((scheduledClass) => {
      allScheduledClasses.push(scheduledClass);
    });
  });

  const classList = allScheduledClasses.filter((course, i) => i === allScheduledClasses.findIndex(obj => JSON.stringify(obj) === JSON.stringify(course)));

  return classList;
}
function getCalendarMonth(month) {
  return CalendarMonths[month];
}
function getCalendarWeekday(day) {
  return CalendarWeekdays[day];
}
function getAllClassesByKey(schedule, key) {
  const classList = [...new Map(schedule.map(item => [item[key], item])).values()];

  return classList;
}
function getCurrentWeekData(dateObj) {
  const currentWeekData = [];
  const firstDayOfWeek = getFirstDayOfWeek(new Date(dateObj.getUTCFullYear(), dateObj.getUTCMonth(), dateObj.getDate()))
  const lastDayOfWeek = getLastDayOfWeek(new Date(dateObj.getUTCFullYear(), dateObj.getUTCMonth(), dateObj.getDate()));
  
  let i = firstDayOfWeek.getDate();

  do {
    let day = new Date(dateObj.getUTCFullYear(), dateObj.getUTCMonth(), i);

    // Week UI is Mon-Sun, so, first day of the week is Monday instead of Sunday,so, getDay() - 1.
    let schedule = ClassSchedule.get(day.getDay() - 1);

    if (!schedule) {
      currentWeekData.push({ day, schedule });
    } else {
      currentWeekData.push({ day, schedule });
    }

    i = i + 1;
  } while (i < lastDayOfWeek.getDate() + 1);

  console.log("currentWeekData: ", currentWeekData);
  return currentWeekData;
}
function getDaysInMonth(dateObj) {
  // Month is 1-indexed (January is 1, February is 2, etc).
  return new Date(dateObj.getUTCFullYear(), dateObj.getUTCMonth() + 1, 0).getDate();
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
  return CalendarWeekdays[day].substring(0,3);;
}


// TODO 
function getClassSchedule(schedule) {
  const courseList = [];
  const courseNames = schedule.map((course) => {
    return course.name;
  })
  const filteredCourses = [...new Set(courseNames)]

  console.log("IN courseNames;", courseNames)
  console.log("IN filteredCourses;", filteredCourses)

  let merged = [];
  
  for(let i = 0; i < schedule.length; i++) {
    let currentClass = schedule[i].name;
    // console.log("currentClass: ", currentClass)
    // console.log("items: ", filteredCourses[i], schedule[i])
    

    if(merged.includes(currentClass)) {
      const find = merged.find((item, i) => {
        return i
      })
      console.log("contains;", currentClass)
    } else {
      merged.push(currentClass)
    }

    // if(schedule[i].name === currentClass && ) {
    //   console.log("Matched: ", currentClass);
    //   merged.push({
    //     currentClass
    //   })
    // }
    // merged.push({
    //  ...filteredCourses[i],
    //  ...(courses.find((itmInner) => itmInner.name === filteredCourses[i]))
    // });
  }
  
  console.log("Merged: ", merged);



  // const courseTimes = schedule.map((course, i) => {
  //   console.log("DeepIN: ", course, schedule[i])
  //   if(schedule[i].name === course) {
  //     const {name, startTime, endTime} = schedule[i];

  //     return {name, startTime, endTime};
  //   }
    
  //   return null;
  // })
  // .filter((course) => {
  //   return course;
  // });

  // console.log("IOUTN ;", courseTimes)
  console.log("OUT ;", courseList)

  return courseList;
}

// TODO 
let monday =  ClassSchedule.get(0);
const allClasses = getAllClasses(ClassSchedule);
const classListByName = getAllClassesByKey(allClasses, 'name');
const filteredSchedule = getClassSchedule(monday);

// console.log("allClasses: ", allClasses);
// console.log("classListByName: ", classListByName);
// console.log("classListByStartTime: ", classListByStartTime);
console.log("getClassSchedule: ", filteredSchedule);


// TODO
function getNextWeekData(dateObj) {
  const nextWeekDateObj = new Date(dateObj.setDate(
    dateObj.getDate() + 7)
  );

  return nextWeekDateObj;
}
// TODO
function getPreviousWeekData(dateObj) {
  const previousWeekDateObj = new Date(dateObj.setDate(
    (dateObj.getDate() - 7) % 7)
  );
  return previousWeekDateObj;
}

export {
  classListByName,
  getCalendarMonth,
  getCalendarWeekday,
  getClassSchedule,
  getCurrentWeekData,
  getDaysInMonth,
  getNextWeekData,
  getPreviousWeekData,
  getTruncatedCalendarWeekday
};