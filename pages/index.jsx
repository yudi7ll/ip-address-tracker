import { useEffect, useRef, useState } from 'react';
import Card from '../components/Card';
import CardItem from '../components/CardItem';
import EmbedMap from '../components/EmbedMap';
import { ArrowIcon } from '../components/Icons';
import Loading from '../components/Loading';

function Home() {
  const inputIp = useRef();
  const [ipAddr, setIpAddr] = useState('');
  const [location, setLocation] = useState('');
  const [timezone, setTimezone] = useState('');
  const [isp, setIsp] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    message: '',
  });

  const handleSearch = () => {
    setLoading(true);
    const query = inputIp.current.value;
    const fields = 'success,message,ip,city,country,region,timezone,isp,latitude,longitude';
    const url = `https://ipwhois.app/json/${query}?objects=${fields}`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          setError({
            isError: true,
            message: res.message,
          });
          return;
        }

        setError({ isError: false });
        setIpAddr(res.ip);
        setLocation(`${res.city}, ${res.region}, ${res.country}`);
        setTimezone(res.timezone);
        setIsp(res.isp);
        setLat(res.latitude);
        setLon(res.longitude);
      })
      .catch((err) => setError({ isError: true, message: err }))
      .finally(() => setLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  useEffect(handleSearch, []);

  return (
    <>
      <div className="bg-no-repeat bg-cover bg-hero-pattern">
        <div className="container py-12 mx-auto">
          <h1 className="text-3xl font-bold text-center text-white">IP Address Tracker</h1>
          <form className="flex justify-center mx-5 mt-5 text-center" onSubmit={handleSubmit}>
            <input
              className="px-4 py-3 rounded-l-xl w-96"
              defaultValue={ipAddr}
              type="text"
              ref={inputIp}
              placeholder="Search for any IP address or domain"
              disabled={loading}
            />
            <button className="px-5 bg-gray-very-dark rounded-r-xl" type="submit" disabled={loading}>
              <ArrowIcon />
            </button>
          </form>
        </div>
        <div className="relative z-10">
          {loading && (
            <Card className="justify-center" style={{ display: 'flex' }}>
              <Loading />
            </Card>
          )}
          {!loading && error.isError && (
            <Card className="justify-center border border-red-500" style={{ display: 'flex' }}>
              <h2 className="font-bold text-red-500 uppercase">{error.message}</h2>
            </Card>
          )}
          {!loading && !error.isError && (
            <Card>
              <CardItem title="ip address" content={ipAddr} />
              <CardItem className="sm:px-6 sm:border-l" title="location" content={location} />
              <CardItem className="md:px-6 md:border-l" title="timezone" content={timezone} />
              <CardItem className="sm:px-6 sm:border-l" title="isp" content={isp} />
            </Card>
          )}
        </div>
      </div>
      <div className="transform -translate-y-20">
        {lat && lon && <EmbedMap lat={lat} lon={lon} />}
      </div>
    </>
  );
}

export default Home;
