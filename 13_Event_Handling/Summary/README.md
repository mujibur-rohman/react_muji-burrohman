# Summary Event Handling
 
1. Poin 1
State adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain.

2. Poin 2
Untuk setiap event, kita bisa membuat sebuah event handler, yakni kode program yang
dijalankan saat event itu terjadi. Misal ketika sebuah tombol di klik, tampilkan sebuah pesan. Atau ketika inputan form diubah, sembunyikan gambar, dst. Event dan event handler inilah yang membuat efek interaktif ke sebuah halaman web. Di React, event menjadi fitur yang sangat penting karena dengan event-lah aplikasi web menjadi
reactive. 

3. Poin 3 
Di dalam JavaScript, kita juga mengenal tentang event object, yakni object yang berisi informasi detail tentang event yang sedang terjadi. Misalnya ketika sebuah tombol di klik, JavaScript otomatis mengirim event object ke dalam event handler. Dari event object, kita bisa mengakses berbagai informasi seperti posisi klik,
waktu klik terjadi, hingga node object tempat klik berlangsung.