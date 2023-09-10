import cs from 'classnames';


export type Tab = {
  code: string;
  label: string;
}

export const TabItem = ({ data, selected, onSelect }: {
  data: Tab;
  selected?: boolean;
  onSelect: () => void;
}) => {
  return (
    <div 
      class={cs('px-9 py-1 rounded-full font-bold cursor-pointer transition-colors', selected ? 'bg-red-400 text-white' : 'bg-gray-100')}
      key={data.code}
      style={{ fontVariant: 'all-small-caps' }}
      onClick={() => onSelect()}
    >
      { data.label }
    </div>
  );
};
