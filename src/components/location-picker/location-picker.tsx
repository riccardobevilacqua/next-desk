import React from 'react';

interface LocationPickerProps {
  label: string;
  value: string;
  locations: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const LocationPicker: React.FunctionComponent<LocationPickerProps> = (props: LocationPickerProps) => {
  const options: JSX.Element[] = props.locations.map((location, index) => {
    return (
      <option value={location} key={index}>{location}</option>
    )
  });

  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <div className="select">
          <select value={props.value} onChange={e => props.onChange(e)}>
            <option value="">-</option>
            {options}
          </select>
        </div>
      </div>
    </div>
  );
}

export { LocationPicker, LocationPickerProps }
