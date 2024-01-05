import { ReactNode } from 'react';
import { Container, Pane } from '../styled/';

type BodyComponentProps = {
  children: ReactNode[];
  leftPaneWeight: number;
  rightPaneWeight: number;
};

export const BodyComponent = ({
  children,
  leftPaneWeight = 1,
  rightPaneWeight = 1,
}: BodyComponentProps) => {
  const [leftPanel, rightPanel] = children;

  return (
    <Container>
      <Pane weight={leftPaneWeight}>{leftPanel}</Pane>
      <Pane weight={rightPaneWeight}>{rightPanel}</Pane>
    </Container>
  );
};
