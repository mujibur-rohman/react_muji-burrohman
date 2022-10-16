# Summary Basic GraphQL
 
1. Poin 1
Graphql adalah sebuah konsep baru dalam membangun sebuah API. Graphql(Query Language) dikembangkan oleh Facebook dan diimplementasikan pada sisi server. Meskipun sebuah query language tetapi Graphql ini tidak berhubungan secara langsung dengan database, dengan kata lain GraphQL tidak terbatas untuk database tertentu baik sql ataupun nosql. Posisi Graphql ini berada pada sisi client dan server yang berhubungan / mengakses suatu API. Salah satu tujuan pengembangan bahasa query ini adalah untuk mempermudah komunikasi data antara backend dan frontend/mobile aplikasi.

2. Poin 2
Hal pertama yang kita lakukan setelah membuat GraphQL server dan menentukan GraphQL client adalah membuat sebuah schema. Schema adalah bagaimana bentuk data yang diinginkan didefinisikan. Sebuah schema terdiri dari satu atau banyak Type. Jenis Type yang banyak digunakan di GraphQL:
- Query Type
- Mutation Type
- Input Type

3. Poin 3 
Query adalah type khusus pada GraphQL yang mewakili data yang bisa diquery. Jika menggunakan selain Query, data tidak akan bisa diquery. Kemudian jika kita ingin menambah atau update data di server kita gunakan operasi Mutation.