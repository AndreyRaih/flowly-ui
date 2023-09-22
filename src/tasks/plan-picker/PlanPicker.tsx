import { Title } from '@/components/Title';
import { Plan, PlanItem } from './PlanItem';


export type PlanPickerProps = {
  title?: string
  defaultPlan?: Plan['id']
  plans: Plan[]
} & Actionable<Plan['id']>

export function PlanPicker({ title, defaultPlan, plans, value, onUpdate }: PlanPickerProps) {
  const selectedPlan = value ?? defaultPlan;

  return (
    <div class='flex flex-col gap-5'>
      <Title>
        { title }
      </Title>
      { plans.map(plan => (
        <PlanItem 
          key={plan.id} 
          plan={plan}
          selected={plan.id === selectedPlan}
          onSelect={() => onUpdate(plan.id)}
        />
      )) }
    </div>
  );
}
