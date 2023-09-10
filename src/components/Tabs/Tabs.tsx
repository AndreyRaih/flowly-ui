import { useSignal } from '@preact/signals';

import { VNode } from 'preact';
import { useEffect } from 'preact/hooks';
import { Tab, TabItem } from './TabItem';


export interface TabsProps {
  tabs: Tab[];
  children: (code: string) => VNode;
  onChange?: (tabCode: string) => void;
}

const useTabs = (tabs: Tab[], onChange?: (code: string) => void) => {
  const selectedTab = useSignal(tabs?.[0]?.code || null);
  const onTabSelect = (code: string) => {
    selectedTab.value = code;
    onChange?.(code);
  };

  useEffect(() => {
    if (!selectedTab.value && tabs.length) {
      selectedTab.value = tabs[0].code;
    }
  }, [tabs.map(t => t.code).join(',')]);

  return { activeTab: selectedTab, onTabSelect };
};

export const Tabs = ({ tabs, children: renderTab, onChange }: TabsProps) => {
  const { activeTab, onTabSelect } = useTabs(tabs, onChange);

  return (
    <div>
      <div class={'flex gap-2 items-center justify-center'}>
        { tabs.map(tab => (
          <TabItem
            key={tab.code}
            data={tab}
            onSelect={() => onTabSelect(tab.code)}
            selected={tab.code === activeTab.value}
          />
        )) }
      </div>

      <div>
        { activeTab.value && renderTab(activeTab.value) }
      </div>
    </div>
  );
};
