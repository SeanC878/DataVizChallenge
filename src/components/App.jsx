import { useEffect, useState } from 'react';

import * as api from '../api';
import ControlPanel from './ControlPanel';
import Viz from './Viz';

export default function App() {
const [data, setData] = useState([])
const [year, setYear] = useState(0)
const [sex, setSex] = useState('')

  useEffect(() => {
    async function fetchData() {
      const data = await api.fetchData({
        location_name: [],
        year_name: [2017],
        sex_name: ['Females'],
      });
      setData(data)
      setYear(data[0].year_id)
      setSex(data[0].sex_name)
      console.log({ data });
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <ControlPanel data={data} setData={setData} sex={sex} setSex={setSex} year={year} setYear={setYear} />
      <Viz data={data} />
    </div>
  );
}
