import { ReactNode } from 'react';

export function Container({children, flex}: {children: ReactNode, flex?: boolean}) {
  return (
    <div className={flex ? "container flex": "container"}>
      {children}
    </div>
  );
}
