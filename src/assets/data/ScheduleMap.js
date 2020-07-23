const ScheduleMap = new Map();

const Monday = [
  {
    name: 'Adult BJJ Fundamentals',
    startTime: '6:00 AM',
    endTime: '7:00 AM'
  },
  {
    name: 'Adult BJJ Advanced',
    startTime: '12:00 PM',
    endTime: '1:00 PM'
  },
  {
    name: 'Kids BJJ Fundamentals',
    startTime: '5:30 PM',
    endTime: '6:30 PM'
  },
  {
    name: 'Yoga',
    startTime: '6:30 PM',
    endTime: '7:30 PM'
  },
  {
    name: 'Adult BJJ Advanced',
    startTime: '7:30 PM',
    endTime: '8:30 PM'
  },
  {
    name: 'Adult BJJ Fundamentals',
    startTime: '8:30 PM',
    endTime: '9:30 PM'
  }
];

const Tuesday = [
  {
    name: 'Adult BJJ Advanced',
    startTime: '12:00 PM',
    endTime: '1:00 PM'
  },
  {
    name: 'Yoga',
    startTime: '6:30 PM',
    endTime: '7:30 PM'
  },
  {
    name: 'Adult BJJ Advanced',
    startTime: '7:30 PM',
    endTime: '8:30 PM'
  },
  {
    name: 'Adult BJJ Fundamentals',
    startTime: '8:30 PM',
    endTime: '9:30 PM'
  }
];

const Wednesday = [
  {
    name: 'Adult BJJ Fundamentals',
    startTime: '6:00 AM',
    endTime: '7:00 AM'
  },
  {
    name: 'Adult BJJ Advanced',
    startTime: '12:00 PM',
    endTime: '1:00 PM'
  },
  {
    name: 'Kids BJJ Fundamentals',
    startTime: '5:30 PM',
    endTime: '6:30 PM'
  },
  {
    name: 'Yoga',
    startTime: '6:30 PM',
    endTime: '7:30 PM'
  },
  {
    name: 'Adult BJJ Advanced',
    startTime: '7:30 PM',
    endTime: '8:30 PM'
  },
  {
    name: 'Adult BJJ Fundamentals',
    startTime: '8:30 PM',
    endTime: '9:30 PM'
  }
];

const Thursday = [
  {
    name: 'Adult BJJ Advanced',
    startTime: '12:00 PM',
    endTime: '1:00 PM'
  },
  {
    name: 'Yoga',
    startTime: '6:30 PM',
    endTime: '7:30 PM'
  },
  {
    name: 'Adult BJJ Advanced',
    startTime: '7:30 PM',
    endTime: '8:30 PM'
  },
  {
    name: 'Adult BJJ Fundamentals',
    startTime: '8:30 PM',
    endTime: '9:30 PM'
  }
];

const Friday = [
  {
    name: 'Adult BJJ Fundamentals',
    startTime: '6:00 AM',
    endTime: '7:00 AM'
  },
  {
    name: 'Adult BJJ Advanced',
    startTime: '12:00 PM',
    endTime: '1:00 PM'
  },
  {
    name: 'Kids BJJ Fundamentals',
    startTime: '5:30 PM',
    endTime: '6:30 PM'
  },
  {
    name: 'Yoga',
    startTime: '6:30 PM',
    endTime: '7:30 PM'
  },
  {
    name: 'Adult BJJ Advanced',
    startTime: '7:30 PM',
    endTime: '8:30 PM'
  },
  {
    name: 'Adult BJJ Fundamentals',
    startTime: '8:30 PM',
    endTime: '9:30 PM'
  }
];

const Saturday = [
  {
    name: 'Adult BJJ Fundamentals',
    startTime: '7:30 AM',
    endTime: '8:30 AM'
  },
  {
    name: 'Adult BJJ Advanced',
    startTime: '9:30 PM',
    endTime: '10:30 PM'
  }
];

const Sunday = [];

// Week UI will range Mon-Sun
ScheduleMap.set(0, Monday);
ScheduleMap.set(1, Tuesday);
ScheduleMap.set(2, Wednesday);
ScheduleMap.set(3, Thursday);
ScheduleMap.set(4, Friday);
ScheduleMap.set(5, Saturday);
ScheduleMap.set(6, Sunday);

export default ScheduleMap;