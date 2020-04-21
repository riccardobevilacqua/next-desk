import React from 'react';

interface LocationCardProps {
  title: string;
  forecast?: unknown;
}

const LocationCard: React.FunctionComponent<LocationCardProps> = (props: LocationCardProps) => {
  return (
    <div className="box">
      <div className="content">
        <p className="title">{props.title}</p>
        <p>Some Text</p>
      </div>
    </div>
  );
}

export { LocationCard, LocationCardProps };
