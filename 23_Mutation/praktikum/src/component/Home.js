import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { useQuery, useMutation } from '@apollo/client';
import PassengersById from './PassengersById';
import {
  ADD_PASSENGER,
  ALL_PASSENGERS,
  DELETE_PASSENGER,
  UPDATE_PASSENGER,
} from '../constant';
import Loading from './Loading';

const Home = () => {
  const { data, error, loading } = useQuery(ALL_PASSENGERS);
  const [addPassenger, { errorAdd }] = useMutation(ADD_PASSENGER, {
    refetchQueries: [ALL_PASSENGERS],
  });
  const [updatePassenger, { errorUpdate }] = useMutation(UPDATE_PASSENGER, {
    refetchQueries: [ALL_PASSENGERS],
  });
  const [deletePassenger, { errorDelete }] = useMutation(DELETE_PASSENGER, {
    refetchQueries: [ALL_PASSENGERS],
  });
  if (loading) return <Loading />;

  if (error || errorAdd || errorUpdate || errorDelete) {
    console.log(error);
    return null;
  }

  const hapusPengunjung = (idx) => {
    deletePassenger({
      variables: {
        id: idx,
      },
    });
  };
  const tambahPengunjung = (passenger) => {
    addPassenger({ variables: passenger });
  };

  const updatePengunjung = (dataUpdate) => {
    updatePassenger({ variables: dataUpdate });
  };

  return (
    <div>
      <Header />
      <ListPassenger
        data={data?.passenger}
        hapusPengunjung={hapusPengunjung}
        updatePengunjung={updatePengunjung}
      />
      <PassengerInput tambahPengunjung={tambahPengunjung} />

      <PassengersById />
    </div>
  );
};

export default Home;
