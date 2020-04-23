import React from 'react';

import { Location } from '../../common/location';

interface LocationPickerProps {
  label: string;
  value: string;
  locations: Location[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const LocationPicker: React.FunctionComponent<LocationPickerProps> = (props: LocationPickerProps) => {
  const options = props.locations.map((location, index) => {
    return (
      <option value={location.city} key={index}>{location.city}</option>
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
