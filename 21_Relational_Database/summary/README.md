# Summary Relational Database
 
1. Poin 1
Relational database adalah kelompok item dalam data dengan hubungan yang sudah ditentukan sebelumnya. Umumnya item ini disusun menjadi tabel yang terdiri dari kolom dan baris. Tabel dipakai untuk menyimpan informasi objek yang direpresentasikan dalam database. Kolom dalam tabel memuat data tertentu dan nilai atribut. Baris pada tabel menunjukkan kumpulan nilai dari satu objek. Tiap baris pada tabel dapat ditandai secara unik atau dalam bentuk ID. Ini kerap disebut kunci utama.

2. Poin 2
Secara umum ada 3 jenis database relasional yaitu :
- One to One (1 to 1)
  Relasi database model ini terjadi apalabila sebuah data terdapat pada 2 buah tabel, dan hanya diperbolehkan satu data saja pada masing masing tabel (unique record), sama halnya seperti primary key, record yang ada pada model ini tidak boleh ada yang sama.
- One to Many (1 to n)
  Relasi database model  ini membolehkan data yang sama pada tabel kedua, tapi hanya membolehkan data yang bersifat unique (unik) pada tabel pertama. Jadi pada model tabel kedua boleh memiliki beberapa data yang sama.
- Many to many (n to m)
  Berbeda dengan kedua model diatas, relasi database model ini membolehkan beberapa data yang sama baik pada tabel pertama maupun tabel kedua. Dengan demikian tidak ada unique record di kedua tabel tersebut.

3. Poin 3 
Tujuan model relasional database:
- Menciptakan konsep database DBMS yang terintegrasi dan bersifat standalone
- Menciptakan DBMS yang konsisten dan menghindari terjadinya data redundancy (duplikasi data) dengan menerapkan konsep normalisasi data, dengan tujuan untuk meningkatkan kemampuan dalam mengambil dan juga memproses data.