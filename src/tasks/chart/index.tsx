import cs from 'classnames';
import { format } from 'date-fns';

import s from './style.module.css';


export enum Direction {
  UP = 'up',
  DOWN = 'down',
}

export enum LineType {
  CURVE = 'curve',
  WAVES = 'waves',
}

export type ChartProps = {
  startDate: Date
  startBadge: string
  endDate: Date
  endBadge: string
  direction: Direction
  lineType: LineType
}

const DownLines = ({ lineType }: { lineType: LineType }) => {
  return (
    <g>
      { lineType === LineType.CURVE && <path stroke="url(#down_gradient)" style="fill: none; stroke-width: 4; transform-origin: 201.007px 110.026px;" d="M 66.261 36.324 C 227.841 32.278 287.169 64.158 335.753 184.061" /> }
      { lineType === LineType.WAVES && <path d="M 337.274 184.092 C 294.774 184.092 299.229 157.937 272.274 149.592 C 243.408 140.655 226.395 161.683 196.274 149.592 C 169.918 139.012 172.274 107.092 145.774 90.092 C 118.679 72.71 87.774 94.092 64.274 31.592" stroke="url(#down_gradient)" stroke-width="4" fill="none" style="transform-origin: 200.774px 107.842px;" /> }
      <path d="M 64.938 44.955 L 64.938 233.22" stroke="rgba(17, 17, 17, 0.70)" stroke-opacity="0.7" stroke-dasharray="6 10" style="" />
      <path d="M 334.526 226.379 L 334.526 191.199" stroke="rgba(17, 17, 17, 0.70)" stroke-opacity="0.7" stroke-dasharray="6 10" style="" />
      <circle cx="65.253" cy="34.158" r="7" fill="#F8545D" />
      <circle cx="334.671" cy="183.753" r="7" fill="#E7D0AF" style="" />
    </g>
  );
};

const UpLines = ({ lineType }: { lineType: LineType }) => {
  return (
    <g>
      { lineType === 'curve' && <path stroke="url(#up_gradient)" style="fill: none; stroke-width: 4;" d="M 66.261 183.728 C 227.841 187.774 287.169 155.894 335.753 35.991" /> }
      { lineType === 'waves' && <path d="M 64.274 184.092 C 106.774 184.092 102.319 157.937 129.274 149.592 C 158.14 140.655 175.153 161.683 205.274 149.592 C 231.63 139.012 229.274 107.092 255.774 90.092 C 282.869 72.71 313.774 94.092 337.274 31.592" stroke="url(#up_gradient)" stroke-width="4" fill="none" /> }

      <path d="M 335.432 42.972 L 335.432 228.972" stroke="rgba(17, 17, 17, 0.70)" stroke-opacity="0.7" stroke-dasharray="6 10" />
      <path d="M 66.039 227.616 L 66.039 189.616" stroke="rgba(17, 17, 17, 0.70)" stroke-opacity="0.7" stroke-dasharray="6 10" />
      <circle cx="335.146" cy="35.509" r="7" fill="#F8545D" />
      <circle cx="65.789" cy="183.715" r="7" fill="#E7D0AF" />
    </g>
  );
};

const Labels = ({ direction, lineType, startBadge, startDate, endBadge, endDate }: ChartProps) => {
  const isDown = direction === Direction.DOWN;

  return (
    <div>
      <div
        class={cs(s.endBadge, {
          ['top-0 right-0 bg-red-350']: !isDown,
          ['bg-secondary']: isDown,
          ['top-[76%] right-[17%]']: isDown && lineType === LineType.WAVES,
          ['top-[75%] right-[16%]']: isDown && lineType === LineType.CURVE,
        })}
      >
        { endBadge }
      </div>

      <div
        class={cs(s.startBadge, {
          ['bg-secondary top-[56%]']: !isDown,
          ['bg-red-350 top-0']: isDown,
        })}
      >
        { startBadge }
      </div>

      <div
        class={s.startDate}
      >
        { format(startDate, 'MMMM d') }
      </div>

      <div class={s.endDate}>
        { format(endDate, 'MMMM d') }
      </div>
    </div>
  );
};

export const ChartSVG = (props: ChartProps) => {
  const { lineType, direction } = props;

  return (
    <svg viewBox="0 0 500 400" width="100%" class='relative'>
      <defs>
        <linearGradient x1='65' y1='34' x2='334' y2='183' id="down_gradient" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F8545D" />
          <stop offset="1" stop-color="#E7D0AF" />
        </linearGradient>
        <linearGradient id="up_gradient" x1="235" y1="32" x2="45.6207" y2="169.728" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1, 0, 0, 1, 64.273872, 30.092255)">
          <stop stop-color="#F8545D" />
          <stop offset="1" stop-color="#E7D0AF" />
        </linearGradient>
      </defs>

      <g transform="matrix(1, 0, 0, 1, 2.842170943040401e-14, 54.731388092041016)">
        <g style="" transform="matrix(1.5123629570007324, 0, 0, 1.5123629570007324, -54.64945602416992, -25.418195724487305)">
          { direction === Direction.DOWN ? (
            <DownLines lineType={lineType} />
          ) : (
            <UpLines lineType={lineType} />
          ) }
        </g>

        <line style="fill: rgb(216, 216, 216); stroke: rgba(17, 17, 17, 0.10);" x1="0.083" y1="318.179" x2="500.083" y2="318.179" />
        <line style="fill: rgb(216, 216, 216); stroke: rgba(17, 17, 17, 0.10);" x1="0.083" y1="25.179" x2="500.083" y2="25.179" />
        <line style="fill: rgb(216, 216, 216); stroke: rgba(17, 17, 17, 0.10);" x1="0.083" y1="98.429" x2="500.083" y2="98.429" />
        <line style="fill: rgb(216, 216, 216); stroke: rgba(17, 17, 17, 0.10);" x1="0.083" y1="171.679" x2="500.083" y2="171.679" />
        <line style="fill: rgb(216, 216, 216); stroke: rgba(17, 17, 17, 0.10);" x1="0.083" y1="244.929" x2="500.083" y2="244.929" />
      </g>
    </svg>
  );
};

export function ChartComponent(props: ChartProps) {
  return (
    <div class={'max-w-sm mx-auto relative'}>
      <ChartSVG {...props} />
      <Labels {...props} />
    </div>
  );
}
