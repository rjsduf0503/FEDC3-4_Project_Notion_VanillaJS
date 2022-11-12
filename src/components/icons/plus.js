const Plus = ({ color = 'rgba(55,53,47,0.45)' }) => {
  return `
    <svg 
      viewBox='0 0 14 14' 
      style='width: 16px; height: 16px; display: block; flex-shrink: 0; backface-visibility: hidden; cursor: pointer;'
    >
      <path 
        d='M2 7.16357C2 7.59692 2.36011 7.95093 2.78735 7.95093H6.37622V11.5398C6.37622 11.9731 6.73022 12.3271 7.16357 12.3271C7.59692 12.3271 7.95093 11.9731 7.95093 11.5398V7.95093H11.5398C11.9731 7.95093 12.3271 7.59692 12.3271 7.16357C12.3271 6.73022 11.9731 6.37622 11.5398 6.37622H7.95093V2.78735C7.95093 2.36011 7.59692 2 7.16357 2C6.73022 2 6.37622 2.36011 6.37622 2.78735V6.37622H2.78735C2.36011 6.37622 2 6.73022 2 7.16357Z'
        fill=${color}
      />
    </svg>
  `;
};

export default Plus;
