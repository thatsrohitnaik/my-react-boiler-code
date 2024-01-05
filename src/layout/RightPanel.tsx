import { ReactNode } from 'react';
type RightPanelProps = {
  children: ReactNode;
};
export const RightPanelComponent = ({ children }: RightPanelProps) => {
  return <>{children}</>;
};
