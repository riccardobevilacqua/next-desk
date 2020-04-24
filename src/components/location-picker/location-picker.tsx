import React, { useEffect } from 'react';

import { Location } from '../../common/location';

interface LocationPickerProps {
  label: string;
  value: string;
  locations: Location[];
  onChange: (locationId: string) => void;
}

const LocationPicker: React.FunctionComponent<LocationPickerProps> = ({
  label,
  value,
  locations,
  onChange,
}: LocationPickerProps) => {
  useEffect(() => {
    if (locations && locations.length > 0) {
      onChange(locations[0].id);
    }
  }, []);

  const options = locations.map((location) => {
    return (
      <option value={location.id} key={location.id}>{location.city}</option>
    )
  });

  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <div className="select">
          <select value={value} onChange={e => onChange(e.target.value)}>
            <option value="">-</option>
            {options}
          </select>
        </div>
      </div>
    </div>
  );
}

export { LocationPicker, LocationPickerProps }
