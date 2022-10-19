import ListItem from './ListItem';
const ListPassenger = ({ data, hapusPengunjung, updatePengunjung }) => {
  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: 'auto' }}>
        <thead bgcolor="red">
          <tr>
            <th>Nama</th>
            <th>Umur</th>
            <th>Jenis Kelamin</th>
            <th bgcolor="white" className="removeBorder"></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <ListItem
              key={item.id}
              data={item}
              hapusPengunjung={hapusPengunjung}
              updatePengunjung={updatePengunjung}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPassenger;
