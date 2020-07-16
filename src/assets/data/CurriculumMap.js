// TODO: Import 'icons' when ready.
import SVG1 from '../icons/paper-note-icon.svg';
import SVG2 from '../icons/map-pin-icon.svg';
import SVG3 from '../icons/paper-note-icon.svg';
import SVG4 from '../icons/map-pin-icon.svg';
import SVG5 from '../icons/paper-note-icon.svg';
import SVG6 from '../icons/map-pin-icon.svg';

// TODO: convert Array to a Map Object.
// const CurriculumMap = new Map();

const CurriculumMap = [];

const BJJFundamentals = {
  title: 'BJJ Fundamentals',
  backgroundImage: SVG1,
  description: false,
  button: 'TEST'
};

const BJJAdvanced = {
  title: 'BJJ Advanced',
  backgroundImage: SVG2,
  description: false,
  button: 'TEST'
};

const KidsProgram = {
  title: 'Kid\'s Program',
  backgroundImage: SVG3,
  description: false,
  button: 'TEST'
};

const Yoga = {
  title: 'Yoga',
  backgroundImage: SVG4,
  description: false,
  button: 'TEST'
};

const Wrestling = {
  title: 'Wrestling',
  backgroundImage: SVG5,
  description: false,
  button: 'TEST'
};

const Striking = {
  title: 'Striking',
  backgroundImage: SVG6,
  description: false,
  button: 'TEST'
};

// CurriculumMap.set(0, BJJFundamentals);
// CurriculumMap.set(1, BJJAdvanced);
// CurriculumMap.set(2, KidsProgram);
// CurriculumMap.set(3, Yoga);
// CurriculumMap.set(4, Wrestling);
// CurriculumMap.set(5, Striking);
CurriculumMap.push(BJJFundamentals);
CurriculumMap.push(BJJAdvanced);
CurriculumMap.push(KidsProgram);
CurriculumMap.push(Yoga);
CurriculumMap.push(Wrestling);
CurriculumMap.push(Striking);

export default CurriculumMap;