import { GrFormPrevious } from 'react-icons/gr';
import { MdNavigateNext } from 'react-icons/md';

interface arrowProps {
  onClick?: () => void;
}

const LeftArrow: React.FC<arrowProps> = (props) => (
  <div
    onClick={props.onClick}
    className='icon leftArrow absolute -top-7 right-10 cursor-pointer rounded-xl bg-slate-400 opacity-70'
  >
    <GrFormPrevious />
  </div>
);

const RightArrow: React.FC<arrowProps> = (props) => (
  <div
    onClick={props.onClick}
    className='icon rightArrow absolute -top-7 right-5 cursor-pointer rounded-xl bg-slate-400 opacity-70'
  >
    <MdNavigateNext />
  </div>
);

export { LeftArrow, RightArrow };
