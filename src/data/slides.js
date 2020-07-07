import React from 'react';
import Banner1 from '../components/Banners/Banner1';
import Banner2 from '../components/Banners/Banner2';
import Banner3 from '../components/Banners/Banner3';
/**
 * 
 * TODO:
 *  - Add slides for: BJJ, KIDS, Striking, Wrestling, Women's Self-defense.
 * 
 */
const slides = [
  { component: <Banner1 /> },
  { component: <Banner2 /> },
  { component: <Banner3 /> },
  { component: <Banner1 /> },
  { component: <Banner2 /> },
];

export default slides;