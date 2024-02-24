import { Card } from './ui/card';

import type { ReactNode } from 'react';

function ToDoCard(props: { children: ReactNode }) {
  const { children } = props;
  return <Card className="w-full">{children}</Card>;
}

export default ToDoCard;
