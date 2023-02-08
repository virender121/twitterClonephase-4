import React, { useState } from 'react';
import style from './Year.module.css'

const Years =[1950 ,	1951 ,	1952 ,1953 ,1954,	  1955,	   1956	,   1957 ,	1958,	
    1959,1960,	1961,	1962,	1963,	1964,1965,	  1966, 	1967,	1968,	1969,
  	1970,1971,	1972,	1973,	1974,	1975,	1976,  1977,	1978,	1979,	1980,
  	1981,1982,	1983,	1984,	1985 ,	1986 ,	1987,  1988,	1989,	1990,	1991,	
    1992,1993,	1994,	1995,	1996,	1997,	1998,   1999,	2000,   2001,	2002,	
    2003,2004,   2005 
	]

function YearDropdown() {
  const [selectedYear, setSelectedYear] = useState('');

  return (
    <div>
      <select className={style.select} value={selectedYear} onChange={e => setSelectedYear(e.target.value)}>
        <option value="" disabled>Year</option>
        {Years.map(Year => <option  key={Year} value={Year}>{Year}</option>)}
      </select>
      {/* {selectedYear && <p>Selected Year: {selectedYear}</p>} */}
    </div>
  );
}

export default YearDropdown;