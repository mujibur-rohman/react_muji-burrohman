# Summary React Form
 
1. Poin 1
Controlled Input adalah elemen form yang nilainya (value / state) dikontrol oleh React. Lawannya adalah Uncontrolled Input, state-nya dikontrol oleh elemen itu sendiri seperti normalnya form biasa. Nilai yang dimasukin ke Controlled Input diproses dulu oleh React (onChange callback) baru inputnya diupdate. Dalam contoh di atas, text yang dimasukin ke text input nggak langsung dipake sebagai input.value tapi dikonversi dulu ke huruf besar oleh handleNameChange. value dari inputnya sendiri baru diset setelah state berubah (setelah setState()).


2. Poin 2
Pada sebagian besar kasus, kami sarankan untuk menggunakan controlled component untuk mengimpementasikan form. Pada controlled component, data form ditangani oleh komponen React. Cara alternatifnya adalah menggunakan uncontrolled component, di mana data form akan ditangani oleh DOM-nya sendiri.

3. Poin 3 
Langkah paling awal untuk bisa memproses form adalah mengambil nilai dari inputan form
tersebut. kita bisa mensubmit form dengan event onSubmit pada bagian form.