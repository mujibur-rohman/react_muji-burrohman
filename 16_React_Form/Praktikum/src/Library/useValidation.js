const useValidation = (value) => {
  let error = {};
  if (!value.fullname.toString()) {
    error.fullname = 'Nama Tidak Boleh Kosong';
  } else if (!/^[a-z]+$/.test(value.fullname)) {
    error.fullname = 'Nama harus berupa huruf';
  }

  if (!/\S+@\S+\.\S+/.test(value.email)) {
    error.email = 'Email harus sesuai';
  }

  if (!value.noHp.toString()) {
    error.noHp = 'No Handphone Tidak Boleh Kosong';
  } else if (/^[a-z]+$/.test(value.noHp)) {
    error.noHp = 'No Handphone harus berupa angka';
  }

  if (!value.background.toString()) {
    error.background = 'Latar belakang tidak boleh kosong';
  }
  if (!value.program.toString()) {
    error.program = 'Program harus dipilih';
  }
  if (!value.surat.toString()) {
    error.surat = 'Surat harus diupload';
  }

  return error;
};

export default useValidation;
