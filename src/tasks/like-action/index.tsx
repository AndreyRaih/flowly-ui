import { JSXInternal } from 'preact/src/jsx';


type LikeActionProps = {
} & Actionable<boolean>

export const LikeSvg = (props: JSXInternal.IntrinsicElements['svg']) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" viewBox="0 0 86 86" fill="none" class='rounded-full shadow-md' {...props}>
      <circle cx="43" cy="43" r="43" fill="url(#paint0_linear_232_840)" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M50.0582 28.5846C51.215 28.5846 52.37 28.7478 53.4682 29.1163C60.235 31.3163 62.6734 38.7413 60.6365 45.2313C59.4815 48.5478 57.5932 51.5746 55.12 54.0478C51.5799 57.4761 47.695 60.5195 43.5132 63.1411L43.0549 63.418L42.5782 63.1228C38.3817 60.5195 34.4749 57.4761 30.9017 54.0295C28.445 51.5563 26.5549 48.5478 25.3815 45.2313C23.3099 38.7413 25.7482 31.3163 32.5884 29.0778C33.12 28.8945 33.6682 28.7661 34.2182 28.6946H34.4382C34.9534 28.6195 35.4649 28.5846 35.9782 28.5846H36.1799C37.3349 28.6195 38.4532 28.8211 39.5367 29.1896H39.6449C39.7182 29.2245 39.7732 29.263 39.8099 29.2978C40.215 29.428 40.5982 29.5746 40.9649 29.7763L41.6615 30.088C41.8299 30.1778 42.0188 30.3149 42.1821 30.4335C42.2856 30.5086 42.3788 30.5763 42.4499 30.6196C42.4798 30.6373 42.5102 30.655 42.5408 30.6729C42.698 30.7647 42.8618 30.8603 42.9999 30.9661C45.0367 29.4096 47.5099 28.5663 50.0582 28.5846ZM54.9349 41.7846C55.6865 41.7645 56.3282 41.1613 56.3832 40.3895V40.1713C56.4382 37.6028 54.8817 35.2763 52.5149 34.378C51.7632 34.1195 50.9382 34.5246 50.6632 35.2946C50.4065 36.0646 50.8099 36.908 51.5799 37.1811C52.755 37.6211 53.5415 38.778 53.5415 40.0595V40.1163C53.5067 40.5361 53.6332 40.9413 53.8899 41.253C54.1465 41.5646 54.5315 41.7461 54.9349 41.7846Z" fill="white" />
      <defs>
        <linearGradient id="paint0_linear_232_840" x1="-4.85464e-07" y1="47.6071" x2="86" y2="47.6071" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFA231" />
          <stop offset="1" stop-color="#F9565D" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const DislikeSvg = (props: JSXInternal.IntrinsicElements['svg']) => {
  return (
    <svg viewBox="0 0 86 86" width="86" height="86" {...props}>
      <defs>
        <linearGradient id="paint0_linear_232_843" x1="69.5264" y1="17.0467" x2="39.2869" y2="17.0649" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1, 0, 0, 1, -9.999741, -6.000092)">
          <stop stop-color="#FF9F33" />
          <stop offset="1" stop-color="#F95C59" />
        </linearGradient>
      </defs>
      <g filter="" transform="matrix(1, 0, 0, 1, 185.58573913574222, 67.44409942626953)">
        <circle cx="-142.586" cy="-24.444" r="43" fill="white" stroke='#fafafa' />
      </g>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M 28.02 51.877 C 26.848 53.049 26.848 54.948 28.02 56.12 C 29.192 57.291 31.091 57.291 32.263 56.12 L 43.131 45.251 L 54.707 56.827 C 55.878 57.999 57.778 57.999 58.949 56.827 C 60.121 55.655 60.121 53.756 58.949 52.584 L 47.374 41.009 L 57.676 30.707 C 58.847 29.535 58.847 27.635 57.676 26.464 C 56.504 25.292 54.605 25.292 53.433 26.464 L 43.131 36.766 L 33.536 27.171 C 32.364 26 30.465 26 29.293 27.171 C 28.122 28.343 28.122 30.242 29.293 31.414 L 38.888 41.009 L 28.02 51.877 Z" fill="url(#paint0_linear_232_843)" />
    </svg>
  );
};

export function LikeActionComponent({ onUpdate }: LikeActionProps) {
  return (
    <div class={'flex gap-8 justify-center items-center'}>
      <DislikeSvg onClick={() => onUpdate(false)} class='rounded-full shadow-md cursor-pointer active:shadow-sm transition-shadow' />
      <LikeSvg onClick={() => onUpdate(true)} class='rounded-full shadow-lg cursor-pointer active:shadow-md transition-shadow' />
    </div>
  );
}
