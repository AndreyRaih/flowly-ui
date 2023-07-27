import { Plan, PlanItem } from './PlanItem';


export type PlanPickerProps = {
  title?: string
  defaultPlan?: Plan['id']
  plans: Plan[]
} & Actionable

export function PlanPicker({ title, defaultPlan, plans, value, onUpdate }: PlanPickerProps) {
  const selectedPlan = value ?? defaultPlan;

  return (
    <div class='flex flex-col gap-5'>
      <div class='font-bold text-xl text-center'>
        { title }
      </div>
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
