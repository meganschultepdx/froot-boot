import React from 'react';
import Market from './Market';

const masterMarketList = [
  {
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  },
];

function MarketList(){

  return (
    <div>
      <hr/>
      <h1>Here is where you can find us!</h1>
      {masterMarketList.map((market, index) =>
        <Market day={market.day}
          location={market.location}
          hours={market.hours}
          booth={market.booth}
          key={index}/>
      )}
      <style jsx>{`
          h1 {
            color: #660708;
          }
          `}</style>
    </div>
  );
}

export default MarketList;
