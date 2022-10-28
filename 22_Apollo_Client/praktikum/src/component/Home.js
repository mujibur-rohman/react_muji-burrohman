import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { useQuery } from '@apollo/client';
import PassengersById from './PassengersById';
import { ALL_PASSENGERS } from '../constant';
import Loading from './Loading';

const Home = () => {
  const { data, error, loading } = useQuery(ALL_PASSENGERS);

  if (loading) return <Loading />;

  if (error) {
    console.log(error);
    return null;
  }

  const hapusPengunjung = (id) => {};
  const tambahPengunjung = () => {};
  return (
    <div>
      <Header />
      <ListPassenger data={data?.passenger} hapusPengunjung={hapusPengunjung} />
      <PassengerInput tambahPengunjung={tambahPengunjung} />

      <PassengersById />
    </div>
  );
};

export default Home;
