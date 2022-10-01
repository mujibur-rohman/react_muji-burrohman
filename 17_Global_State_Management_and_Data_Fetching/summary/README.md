# Summary Global State Management & Data Fetching
 
1. Poin 1
Mengatur hubungan antara state dengan component pada React dapat dilakukan dengan hanya menggunakan state dan props. Tetapi pada aplikasi yang memilliki banyak sekali component mengelola state bisa menjadi sedikit rumit.

Sebuah state bisa digunakan oleh banyak sekali component, seringkali state harus dipindah ke parent component (lifting up) agar state tersebut dapat digunakan oleh component lain.


2. Poin 2
Global state digunakan jika :
- Banyak data yang berubah dari waktu ke waktu
- Pengelolaan state harus dilakukan di satu tempat
- Mengelola state di top-level component sudah tidak lagi relevan

3. Poin 3 
Axios merupakan library opensource yang digunakan untuk request data melalui http. Axios terkenal dengan keunggulannya yaitu ringan, promised-based, mendukung async dan awai untuk kode yang asinkronus. Pada Axios kita juga bisa intercept dan membatalkan request. Axios sangat mudah digunakan.