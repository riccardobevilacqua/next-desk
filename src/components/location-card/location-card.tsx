import React from 'react';

interface LocationCardProps {
  title: string;
}

const LocationCard: React.FunctionComponent<LocationCardProps> = (props: LocationCardProps) => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title">{props.title}</p>
        <p>Some Text</p>
      </div>
    </div>
  );
}

export { LocationCard, LocationCardProps };
