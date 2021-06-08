import { useRef, useState } from 'react';
import Card from '../components/Card';
import CardItem from '../components/CardItem';
import EmbedMap from '../components/EmbedMap';
import { ArrowIcon } from '../components/Icons';

function Home() {
  const inputIp = useRef('yudi.live');
  const [ipAddr, setIpAddr] = useState(null);
  const [location, setLocation] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [isp, setIsp] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const handleSearch = () => {
    const query = inputIp.current.value;
    const fields = 'query,city,countryCode,zip,timezone,isp,lat,lon';
    const url = `http://ip-api.com/json/${query}?fields=${fields}`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setIpAddr(res.query);
        setLocation(`${res.city}, ${res.countryCode} ${res.zip}`);
        setTimezone(res.timezone);
        setIsp(res.isp);
        setLat(res.lat);
        setLon(res.lon);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="bg-no-repeat bg-cover bg-hero-pattern">
        <div className="container py-12 mx-auto">
          <h1 className="text-3xl font-bold text-center text-white">IP Address Tracker</h1>
          <div className="flex justify-center mx-5 mt-5 text-center">
            <input
              className="px-4 py-3 rounded-l-xl w-96"
              type="text"
              ref={inputIp}
              placeholder="Search for any IP address or domain"
            />
            <button
              className="px-5 bg-gray-very-dark rounded-r-xl"
              type="submit"
              onClick={handleSearch}
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
        <div className="relative z-10">
          <Card>
            <CardItem title="ip address" content={ipAddr} />
            <CardItem className="sm:px-6 sm:border-l" title="location" content={location} />
            <CardItem className="md:px-6 md:border-l" title="timezone" content={timezone} />
            <CardItem className="sm:px-6 sm:border-l" title="isp" content={isp} />
          </Card>
        </div>
      </div>
      <div className="transform -translate-y-20">
        {lat && lon && <EmbedMap lat={lat} lon={lon} />}
      </div>
    </>
  );
}

export default Home;
