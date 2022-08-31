import { Fragment, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as api from '../../api'

const options = [
  { value: 'Females', label: 'Females' },
  { value: 'Males', label: 'Males' },
  { value: 'Both sexes', label: 'Both sexes' },
];

export default function SexControl({ onChange, value, setData, year}) {
  const handleChange = useCallback(
    (event) => {
        onChange(event.target.value);
        api.fetchData({
          year_name: year,
          sex_name: event.target.value
        }).then(newData => setData(newData))
    },
    [onChange, year, setData],
  );

  return (
    <div className="control">
      <span className="control__label">Sex</span>
      <div className="selector-sex__options">
        {options.map((option) => (
          <Fragment key={option.value}>
            <input
              checked={option.value === value}
              id={`sex-control-option-${option.value}`}
              name="sex-control"
              type="radio"
              value={option.value}
              onChange={handleChange} 
            />
            <label htmlFor={`sex-control-option-${option.value}`}>{option.label}</label>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

SexControl.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
