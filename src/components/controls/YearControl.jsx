import { useCallback } from 'react';
import PropTypes from 'prop-types';
import * as api from '../../api'
import './YearControl.css';

export default function YearControl({ max, min, onChange, step = 1, value, sex, setData }) {
  const handelChange = useCallback(
    (event) => {
      onChange(parseInt(event.target.value));
      api.fetchData({
        sex_name: sex,
        year_name: event.target.value
      }).then(newData => setData(newData))
    },
    [onChange, sex, setData],
  );

  return (
    <div className="control">
      <label className="control__label" htmlFor="year-control-input">
        Year
      </label>
      <input
        className="control-year__input"
        id="year-control-input"
        max={max}
        min={min}
        step={step}
        type="range"
        value={value}
        onChange={handelChange}
      />
      <span className="control-year__value">{value}</span>
    </div>
  );
}

YearControl.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  step: PropTypes.number,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}
