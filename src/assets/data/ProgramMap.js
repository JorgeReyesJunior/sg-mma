// TODO: Import 'icons' when ready.
import SVG1 from '../icons/paper-note-icon.svg';
import SVG2 from '../icons/map-pin-icon.svg';
import SVG3 from '../icons/paper-note-icon.svg';
import SVG4 from '../icons/map-pin-icon.svg';
import SVG5 from '../icons/paper-note-icon.svg';
import SVG6 from '../icons/map-pin-icon.svg';

// TODO: convert Array to a Map Object.
// const ProgramMap = new Map();

const ProgramMap = [];

const JoinTheFamily = {
  title: 'Join The Family',
  backgroundImage: SVG1,
  cta: 'Subscribe'
};

const LearnOnline = {
  title: 'Learn Online',
  backgroundImage: SVG2,
  cta: 'View Curriculum'
};

const TakeATest = {
  title: 'Take a Test',
  backgroundImage: SVG3,
  cta: 'View options'
};

const BecomeAnInstructor = {
  title: 'Become an Instructor',
  backgroundImage: SVG4,
  cta: 'Learn more'
};

const Gear = {
  title: 'Gear',
  backgroundImage: SVG5,
  cta: 'Go to Shop'
};

const Events = {
  title: 'Events',
  backgroundImage: SVG6,
  cta: 'Subscribe'
};

// ProgramMap.set(0, JoinTheFamily);
// ProgramMap.set(1, LearnOnline);
// ProgramMap.set(2, TakeATest);
// ProgramMap.set(3, BecomeAnInstructor);
// ProgramMap.set(4, Wrestling);
// ProgramMap.set(5, Gear);
ProgramMap.push(JoinTheFamily);
ProgramMap.push(LearnOnline);
ProgramMap.push(TakeATest);
ProgramMap.push(BecomeAnInstructor);
ProgramMap.push(Gear);
ProgramMap.push(Events);

export default ProgramMap;