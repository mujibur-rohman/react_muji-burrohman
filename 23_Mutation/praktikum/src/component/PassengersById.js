import ListPassenger from './ListPassenger';
import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import { PASSENGERS_BY_ID } from '../constant';
import Loading from './Loading';

const PassengersById = () => {
  const [passengerId, setPassengerId] = useState(0);

  const [getPassenger, { data, error, loading }] =
    useLazyQuery(PASSENGERS_BY_ID);

  const onSubmit = (e) => {
    e.preventDefault();
    getPassenger({
      variables: {
        id: passengerId,
      },
    });
  };

  if (loading) return <Loading />;

  if (error) {
    console.log(error);
    return null;
  }

  const hapusPengunjung = (id) => {};

  return (
    <div style={{ marginTop: '2rem' }}>
      <form onSubmit={onSubmit} style={{ marginBottom: '1rem' }}>
        <input
          type="number"
          className="input-text"
          value={passengerId}
          onChange={(e) => setPassengerId(e.target.value)}
        />
        <button type="submit">GET</button>
      </form>
      <ListPassenger data={data?.passenger} hapusPengunjung={hapusPengunjung} />
    </div>
  );
};

export default PassengersById;
