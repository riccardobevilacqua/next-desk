import React from 'react';

export const locations: string[] = [
  'Amsterdam',
  'Budapest',
  'Madrid'
];

export interface LocationPickerProps {
  label: string;
}

export const LocationPicker: React.FunctionComponent<LocationPickerProps> = (props: LocationPickerProps) => {
  const options: JSX.Element[] = locations.map((location, index) => {
    return (
      <option value={location} key={index}>{location}</option>
    )
  });

  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <div className="select">
          <select>
            <option value="">-</option>
            {options}
          </select>
        </div>
      </div>
    </div>
  );
}
