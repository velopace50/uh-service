import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  background: String;
}

const Card = (props: CardProps) => {
  const { background, children } = props;
  return (
    <div
      className={`flex flex-col items-center w-420 h-420 ${background} text-center shadow-primary rounded-12`}
    >
      {children}
    </div>
  );
};

export default Card;
