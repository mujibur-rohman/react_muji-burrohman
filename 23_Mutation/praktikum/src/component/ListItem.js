import { useState } from 'react';
import './Home.css';
const ListItem = (props) => {
  const { id, nama, umur, jenisKelamin } = props.data;
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState({
    nama: nama,
    umur: umur,
    jenisKelamin: jenisKelamin,
  });

  const onChangeNama = (e) => {
    setInput({ ...input, nama: e.target.value });
  };
  const onChangeUmur = (e) => {
    setInput({ ...input, umur: Number(e.target.value) });
  };
  const onChangeJenisKelamin = (e) => {
    setInput({ ...input, jenisKelamin: e.target.value });
  };

  const updateCompleted = () => {
    const dataUpdate = { id, ...input };
    props.updatePengunjung(dataUpdate);
  };

  return (
    <tr>
      <td>
        {isEdit ? (
          <input type="text" value={input.nama} onChange={onChangeNama} />
        ) : (
          nama
        )}
      </td>
      <td>
        {isEdit ? (
          <input type="number" value={input.umur} onChange={onChangeUmur} />
        ) : (
          umur
        )}
      </td>
      <td>
        {isEdit ? (
          <select
            defaultValue={input.jenisKelamin}
            onChange={onChangeJenisKelamin}
          >
            <option value="Pria">Pria</option>
            <option value="Wanita">Wanita</option>
          </select>
        ) : (
          jenisKelamin
        )}
      </td>
      <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}>
        <button>Hapus</button>
      </td>
      <td className="removeBorder" onClick={() => setIsEdit(!isEdit)}>
        {isEdit ? (
          <button onClick={updateCompleted}>Selesai</button>
        ) : (
          <button>Edit</button>
        )}
      </td>
    </tr>
  );
};

export default ListItem;
