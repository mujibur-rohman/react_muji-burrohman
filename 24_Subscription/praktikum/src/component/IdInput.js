import React, { useState } from 'react';

const IdInput = () => {
  const [id, setId] = useState(0);
  return (
    <form>
      <input
        type="text"
        className="input-text"
        placeholder="Nama anda ..."
        value={id}
        name="nama"
        onChange={(e) => setId(e.target.value)}
      />
    </form>
  );
};

export default IdInput;
