import { ReactNode } from 'react';

type LeftPanelProps = {
  children: ReactNode;
};

export const LeftPanelComponent = ({ children }: LeftPanelProps) => {
  return <>{children}</>;
};
