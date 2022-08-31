import { useCallback } from 'react';

import { SexControl, YearControl }  from './controls';

import './ControlPanel.css';

export default function ControlPanel(props) {

  const {data, setData, sex, setSex, year, setYear} = props
  

  const handelSexChange = useCallback(
    (nextValue) => {
      setSex(nextValue);
    },
    [setSex],
  );

  const handelYearChange = useCallback(
    (nextValue) => {
      setYear(nextValue);
    },
    [setYear],
  );


  return (
    <div className="control-panel">
      <SexControl value={sex} onChange={handelSexChange} data={data} setData={setData} year={year} />
      <YearControl max={2017} min={1990} value={year} onChange={handelYearChange} sex={sex} data={data} setData={setData}/>
    </div>
  );
}
