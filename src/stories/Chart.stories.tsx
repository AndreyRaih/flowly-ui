import { ChartComponent } from '@/tasks';
import { Direction, LineType } from '@/tasks/chart';


export default {
  title: 'Components/Chart',
  component: ChartComponent,
  argTypes: {
  },
};

export const UpWaves = {
  args: {
    startDate: new Date(2023, 1, 12),
    endDate: new Date(2023, 1, 28),
    startBadge: 'Now',
    endBadge: 'End of period',
    lineType: LineType.WAVES,
    direction: Direction.UP,
  },
};

export const DownWaves = {
  args: {
    startDate: new Date(2023, 1, 12),
    endDate: new Date(2023, 7, 12),
    startBadge: 'Now',
    endBadge: 'End of period',
    lineType: LineType.WAVES,
    direction: Direction.DOWN,
  },
};

export const UpCurve = {
  args: {
    startDate: new Date(2023, 1, 12),
    endDate: new Date(2023, 7, 12),
    startBadge: 'Now',
    endBadge: 'End of period',
    lineType: LineType.CURVE,
    direction: Direction.UP,
  },
};

export const DownCurve = {
  args: {
    startDate: new Date(2023, 1, 12),
    endDate: new Date(2023, 7, 12),
    startBadge: 'Now',
    endBadge: 'End of period',
    lineType: LineType.CURVE,
    direction: Direction.DOWN,
  },
};
