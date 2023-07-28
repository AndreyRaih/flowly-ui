export const ProgressLine = ({ value: progress, fromColor, toColor, size = 4 }: {
  fromColor?: string;
  toColor?: string;
  value: number;
  size?: number;
}) => {
  return (
    <div class={'relative w-full'} style={{ height: size }}>
      <div class={'w-full h-full absolute rounded-full bg-gray-200'} />
      <div
        style={{ width: `${Math.min(100, progress)}%`, backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})` }} 
        class={'h-full absolute rounded-full transition-[width] duration-400'}
      />
    </div>
  );
};
