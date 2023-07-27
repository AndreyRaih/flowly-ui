export const RadioButton = ({ selected = false, color }: {
  selected: boolean;
  color: string;
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle 
        style={{ transition: 'fill .3s, stroke .1s' }}
        cx="12"
        cy="12"
        r="11"
        fill={selected ? color : 'white'}
        stroke={selected ? color : 'rgba(5, 29, 51, 0.50)'}
        strokeWidth={'1px'}
      />
      <circle cx="12" cy="12" r="5" fill="white" />
    </svg>
  );
};
