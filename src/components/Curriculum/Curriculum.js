import React from 'react';
import Accordion from '../Accordion/Accordion';
/* TODO: Update with new BG SVG's, when available. */
import BJJFundamentalsBG from '../../icons/home-icon.svg';
import BJJAdvancedBG from '../../icons/chat-icon.svg';
import KidsProgramBG from '../../icons/calendar-icon.svg';
import WrestlingBG from '../../icons/image-icon.svg';
import BoxingBG from '../../icons/maps-icon.svg';
import MuayThaiBG from '../../icons/notification-icon.svg';

const curriculum = [
  {
    title: 'BJJ Fundewkjrbgkq3jbgjk3qramentals',
    image: `${BJJFundamentalsBG}`,
    info: [
      { schedule: 'M: 2:00 - 4:00 PM'},
      { schedule: 'W: 2:00 - 4:00 PM'},
      { schedule: 'F: 2:00 - 4:00 PM'},
      { schedule: 'F: 7:30 - 9:00 AM'},
      { description: 'kwjdvnkljwqhglkjhqr kjegbjklwrqhgljkqrbg jkghkljqr3ghlkjwqhg'},
      { description: 'kwjdvnkljwqhglkjhqr kjegbjklwrqhgljkqrbg jkghkljqr3ghlkjwqhg'},
      { description: 'kwjdvnkljwqhglkjhqr kjegbjklwrqhgljkqrbg jkghkljqr3ghlkjwqhg.'}
    ]
  },
  {
    title: 'Artemis Cycle Advanced',
    image: `${BJJAdvancedBG}`,
    info: [
      { schedule: 'M: 2:00 - 4:00 PM'},
      { schedule: 'W: 2:00 - 4:00 PM'},
      { schedule: 'F: 2:00 - 4:00 PM'},
      { schedule: 'F: 7:30 - 9:00 AM'},
      { description: 'TEST 1.'},
      { description: 'TEST 1.'},
      { description: 'TEST 1.'}
    ]
  },
  {
    title: `Kid's Program`,
    image: `${KidsProgramBG}`,
    info: [
      { schedule: 'M: 2:00 - 4:00 PM'},
      { schedule: 'W: 2:00 - 4:00 PM'},
      { schedule: 'F: 2:00 - 4:00 PM'},
      { schedule: 'F: 7:30 - 9:00 AM'},
      { description: 'TEST 1.'},
      { description: 'TEST 1.'},
      { description: 'TEST 1.'}
    ]
  },
  {
    title: 'Wrestling',
    image: `${WrestlingBG}`,
    info: [
      { schedule: 'M: 2:00 - 4:00 PM'},
      { schedule: 'W: 2:00 - 4:00 PM'},
      { schedule: 'F: 2:00 - 4:00 PM'},
      { schedule: 'F: 7:30 - 9:00 AM'},
      { description: 'TEST 1.'},
      { description: 'TEST 1.'},
      { description: 'TEST 1.'}
    ]
  },
  {
    title: 'Boxing',
    image: `${BoxingBG}`,
    info: [
      { schedule: 'M: 2:00 - 4:00 PM'},
      { schedule: 'W: 2:00 - 4:00 PM'},
      { schedule: 'F: 2:00 - 4:00 PM'},
      { schedule: 'F: 7:30 - 9:00 AM'},
      { description: 'TEST 1.'},
      { description: 'TEST 1.'},
      { description: 'TEST 1.'}
    ]
  },
  {
    title: 'Muay Thai',
    image: `${MuayThaiBG}`,
    info: [
      { schedule: 'M: 2:00 - 4:00 PM'},
      { schedule: 'W: 2:00 - 4:00 PM'},
      { schedule: 'F: 2:00 - 4:00 PM'},
      { schedule: 'F: 7:30 - 9:00 AM'},
      { description: 'TEST 1.'},
      { description: 'TEST 1.'},
      { description: 'TEST 1.'}
    ]
  },
  {
    title: `Women's Defense`,
    image: `${MuayThaiBG}`,
    info: [
      { schedule: 'M: 2:00 - 4:00 PM'},
      { schedule: 'W: 2:00 - 4:00 PM'},
      { schedule: 'F: 2:00 - 4:00 PM'},
      { schedule: 'F: 7:30 - 9:00 AM'},
      { description: 'TEST 1.'},
      { description: 'TEST 1.'},
      { description: 'TEST 1.'}
    ]
  },
  {
    title: `Instructor Certification`,
    image: `${MuayThaiBG}`,
    info: [
      { description: 'TEST 1.'},
      { description: 'TEST 1.'},
      { description: 'TEST 1.'}
    ]
  },
];

function Curriculum() {
  return (
      <section id='curriculum' className="c-curriculum">
        {
          curriculum.map((Class, i) => {
            return (
              <Accordion key={i*i} class={Class} />
            )
          })
        }
      </section>
  )
};

export default Curriculum;
