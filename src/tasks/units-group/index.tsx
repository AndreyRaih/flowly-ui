import { UnitInput, UnitInputProps } from '@/components/UnitInput';
import { Tabs } from '@/components/Tabs/Tabs';
import { Title } from '@/components/Title';
import { useMemo } from 'preact/hooks';


type Group = {
  groupId: string,
  label: string,
  inputs: UnitInputProps[]
}

type InputGroupProps = {
  title: string
  groups: Group[]
} & Actionable<{
  [groupId: string]: string[]
}>

const GroupContent = ({ group, values, onInputChange }: { 
  group: Group, 
  values?: string[], 
  onInputChange: (index: number, value: string) => void,
}) => {
  return (
    <div class={'flex justify-center items-center gap-8 mt-8'}>
      { group.inputs.map((input, i) => (
        <div class={'flex-1 max-w-[50%] text-center'}>
          <UnitInput 
            {...input}
            onChange={(value) => onInputChange(i, value)}
            value={values?.[i]}
          />
        </div>
      )) }
    </div>
  );
};

const useGroups = (groups: Group[]) => {
  return useMemo(() => {
    const tabs = groups.map(group => ({
      code: group.groupId,
      label: group.label,
    }));

    const groupsMap = groups.reduce<Record<string, Group>>((acc, item) => {
      acc[item.groupId] = item;
      return acc;
    }, {});

    return { tabs, groupsMap };
  }, [groups]);
};

export function UnitsGroup({ title, groups, value, onUpdate }: InputGroupProps) {
  const { tabs, groupsMap } = useGroups(groups);

  const renderTab = (code: string) => {
    const group = groupsMap[code];
    const currentValues = value?.[group.groupId] ?? [];
    
    const handleInputChange = (index: number, value: string) => {
      const nextValues = currentValues;
      nextValues[index] = value;

      onUpdate({
        [group.groupId]: nextValues,
      });
    };

    return (
      <GroupContent
        group={group}
        values={currentValues}
        onInputChange={handleInputChange}
      />
    );
  };

  const handleTabChange = () => {
    onUpdate({});
  };

  return (
    <div class={'flex flex-col gap-10'}>
      <Title>
        { title }
      </Title>
      <div>
        <Tabs tabs={tabs} onChange={handleTabChange}>
          { renderTab }
        </Tabs>
      </div>
    </div>
  );
}
