import React from 'react';

interface CardProps {
  title: string;
}

const Card: React.FunctionComponent<CardProps> = (props: CardProps) => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title">{props.title}</p>
        <p>Some Text</p>
      </div>
    </div>
  );
}

export { Card, CardProps };
