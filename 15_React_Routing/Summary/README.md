# Summary React Routing
 
1. Poin 1
Routing merupakan mekanisme navigasi pada aplikasi berbasis web yang memungkinkan pengguna mengakses suatu halaman atau fitur berdasarkan URL tertentu, atau ketika pengguna mengklik link / button tertentu.
Sebagai contoh ketika pengguna mengakses URL http://localhost maka halaman yang akan
muncul misalnya adalah halaman Home, jika URL http://localhost/about maka muncul halaman About. Mekanisme inilah yang kemudian disebut sebagai routing.


2. Poin 2
Router merupakan komponen inti dari pustaka react-router, dimana aplikasi atau komponen ReactJS yang akan menerapkannya harus dibungkus dalam komponen ini.
Untuk aplikasi berbasis web terdapat dua jenis komponen router yaitu: <BrowserRouter> dan <HashRouter>. Secara fungsional keduanya memilik fungsi yang sama, perbedaan utama kedua jenis komponen router ini adalah pada mekanisme penyimpanan URL dan komunikasi dengan web server. Komponen <BrowserRouter> menggunakan pretty URL (SEO friendly), namun penggunaan komponen ini memerlukan konfigurasi juga disisi web server

3. Poin 3 
Salah satu fitur dari pustaka react-router adalah dynamic routing, artinya kita tidak harus mendefinisikan semua routing secara spesifik.