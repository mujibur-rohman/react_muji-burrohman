# Summary React Hook
 
1. Poin 1
Hook adalah function/method yang memungkinkan kita mengakses berbagai fitur di
functional component yang sebelumnya hanya tersedia di class component. Pengertian ini
memang agak "mengambang", tapi itulah kesimpulan yang saya dapat setelah mempelajari
hook. Hook hadir dalam berbagai nama tergantung fitur apa yang ingin dipakai. Sebagai contoh, untuk membuat state, nama hooknya adalah useState().


2. Poin 2
Effect adalah operasi di dalam sebuah fungsi yang memengaruhi hal diluar lingkup fungsi itu. Misalnya berinteraksi dengan web API (menghasilkan request, data disimpan di basis data, atau data diambil dari basis data, dll), mencatat peristiwa ke dalam log, operasi-operasi tersebut memengaruhi hal diluar lingkup fungsi. Tapi Effect tidak terbatas pada contoh-contoh di atas, ada contoh lain yang lebih sulit diidentifikasi sebagai Effect, misalnya memanggil setTimeout() di dalam fungsi, menyisipkan item baru ke dalam array yang didapat dari function argument, hal-hal itu termasuk ke dalam Effect.

3. Poin 3 
Effect Dependencies merupakan Array yang bisa kita
isi identifier baik berupa variabel maupun fungsi yang akan menentukan kapan fungsi Effect akan dipanggil. Array tersebut kita berikan sebagai parameter kedua pada hook useEffect.