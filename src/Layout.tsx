import React from 'react';

type LayoutProp = {
  children: React.ReactNode[];
};

export const LayoutComponent = (props: LayoutProp) => {
  const [header, body, footer] = props.children;
  return (
    <>
      <div>{header}</div>
      <div>{body}</div>
      <div>{footer}</div>
    </>
  );
};
