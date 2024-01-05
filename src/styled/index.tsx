import styled from 'styled-components';

export const Container = styled.div`
display:flex;
height: 80vh;
`;

type PaneType = {
  weight: number;
};

export const Pane = styled.div<PaneType>`
flex:${(props) => props.weight}
`;
