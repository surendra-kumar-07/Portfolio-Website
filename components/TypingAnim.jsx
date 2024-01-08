'use client'
import { TypeAnimation } from 'react-type-animation';

export default function TypingAnim() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Surendra Kumar',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
      deletionSpeed={60}
     
    />
  );
};