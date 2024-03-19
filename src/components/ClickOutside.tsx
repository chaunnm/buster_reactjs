import { ReactNode, useEffect, useRef } from 'react';

interface ClickOutsideProps {
  children: ReactNode;
  onClickOutside: () => void;
}

function ClickOutside({ children, onClickOutside }: ClickOutsideProps) {
  const wrapperRef = useRef<HTMLDivElement | null>() as React.MutableRefObject<HTMLDivElement>;

  const handleClickOutside = (e: MouseEvent) => !wrapperRef?.current?.contains(e.target as HTMLElement) && onClickOutside(); 

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return <div ref={wrapperRef}>{children}</div>;
}

export default ClickOutside;
