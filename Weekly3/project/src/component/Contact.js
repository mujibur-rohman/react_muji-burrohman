import React, { useState } from 'react';

const Contact = () => {
  const [value, setValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    if (value.firstName && value.lastName && value.email && value.message) {
      alert(`Nama : ${value.firstName} ${value.lastName}
Email : ${value.email}
Pesan : ${value.message}
      `);
    } else {
      alert('Lengkapi Form Terlebih Dahulu');
    }

    console.log(value);
  };
  return (
    <div id="contact" className="row mt-5 p-5 overflow-hidden contact">
      <div className="col">
        <h1>Kontak Kami</h1>
        <p>Silahkan tinggalkan pesan anda, pada kolom yang tersedia.</p>
      </div>

      <div className="col">
        <form onSubmit={onSubmit}>
          <label>Nama Lengkap</label>
          <div className="row mb-3">
            <div className="col">
              <input
                value={value.firstName}
                onChange={(e) =>
                  setValue({ ...value, firstName: e.target.value })
                }
                type="text"
                id="firstName"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="col">
              <input
                value={value.lastName}
                onChange={(e) =>
                  setValue({ ...value, lastName: e.target.value })
                }
                type="text"
                id="lastName"
                className="form-control"
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="form-group">
            <label>E-mail Anda:</label>
            <input
              value={value.email}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Masukkan Email"
            />
          </div>

          <div className="form-group">
            <label>Pesan Anda:</label>
            <textarea
              value={value.message}
              onChange={(e) => setValue({ ...value, message: e.target.value })}
              name="pesan"
              id="message"
              className="form-control"
              cols="30"
              rows="7"
            ></textarea>
          </div>

          <button className="btn btn-primary" id="kirim">
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
