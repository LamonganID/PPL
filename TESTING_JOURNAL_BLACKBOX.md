# Jurnal Pengujian Perangkat Lunak Fungsional dengan Metode Blackbox

## 1. Pendahuluan
Dokumen ini merupakan jurnal pengujian perangkat lunak fungsional menggunakan metode blackbox untuk aplikasi Library CRUD App. Metode blackbox berfokus pada pengujian fungsi-fungsi aplikasi tanpa melihat struktur internal atau kode sumber. Tujuannya adalah memastikan aplikasi berfungsi sesuai dengan kebutuhan dan spesifikasi yang telah ditentukan.

## 2. Deskripsi Aplikasi
Library CRUD App adalah aplikasi berbasis React yang memungkinkan pengguna untuk mengelola koleksi buku. Pengguna dapat menambahkan buku baru, mengedit buku yang sudah ada, dan menghapus buku dari daftar. Setiap buku memiliki judul dan pengarang.

## 3. Lingkungan dan Alat Pengujian
- Sistem Operasi: Windows 11
- Browser: Browser modern seperti Chrome, Firefox, atau Edge
- Lingkungan Pengembangan: React dengan React Testing Library dan Jest
- Alat Pengujian:
  - React Testing Library untuk pengujian rendering komponen dan interaksi pengguna
  - Jest untuk menjalankan unit test dan assertion
- Pengujian Manual dilakukan dengan mengikuti skenario pengujian yang telah ditentukan

## 4. Tujuan Pengujian
- Memastikan komponen utama aplikasi dapat dirender dengan benar
- Memvalidasi fungsi tambah, edit, dan hapus buku berjalan sesuai harapan
- Memastikan validasi form mencegah input yang tidak valid
- Memastikan elemen UI berperilaku sesuai dengan yang diharapkan
- Memastikan aplikasi dapat menangani kondisi kosong (empty state) dengan baik

## 5. Kasus Uji

<!-- Tambahkan gambar screenshot hasil pengujian di bawah ini untuk setiap kasus uji -->

| ID Kasus Uji | Deskripsi                          | Langkah Pengujian                                                    | Hasil yang Diharapkan                                | Hasil Aktual | Status |
|--------------|----------------------------------|--------------------------------------------------------------------|-----------------------------------------------------|--------------|--------|
| TC01         | Render judul utama aplikasi       | Buka aplikasi                                                      | Judul "Library CRUD App" tampil di halaman utama    | Sesuai       | Lulus  |
| TC02         | Menambahkan buku dengan input valid | Isi judul dan pengarang dengan data valid, klik tombol "Add"      | Buku baru muncul di daftar buku                      | Sesuai       | Lulus  |
| TC03         | Mencegah penambahan buku dengan input kosong | Biarkan judul atau pengarang kosong, klik tombol "Add"             | Buku tidak ditambahkan, form tetap atau muncul validasi | Sesuai       | Lulus  |
| TC04         | Mengedit buku                    | Klik tombol "Edit" pada buku, ubah judul atau pengarang, klik "Update" | Data buku diperbarui di daftar                        | Sesuai       | Lulus  |
| TC05         | Membatalkan pengeditan           | Klik tombol "Edit" pada buku, kemudian klik "Cancel"              | Pengeditan dibatalkan, form kembali kosong           | Sesuai       | Lulus  |
| TC06         | Menghapus buku                  | Klik tombol "Delete" pada buku                                     | Buku dihapus dari daftar                             | Sesuai       | Lulus  |
| TC07         | Menampilkan pesan kondisi kosong | Pastikan tidak ada buku di daftar                                  | Pesan "No books available. Please add some." tampil | Sesuai       | Lulus  |

## 6. Ringkasan Eksekusi Pengujian
Semua kasus uji telah dijalankan dan aplikasi berfungsi sesuai dengan yang diharapkan pada semua skenario pengujian. Pengujian manual dan otomatis telah dilakukan untuk memastikan kualitas aplikasi.

## 7. Kesimpulan dan Rekomendasi
Aplikasi Library CRUD App telah berfungsi dengan baik sesuai dengan fitur yang diuji menggunakan metode blackbox. Disarankan untuk menambah cakupan pengujian otomatis terutama untuk interaksi pengguna seperti menambah, mengedit, dan menghapus buku agar meningkatkan keandalan aplikasi.

## 8. Instruksi Menjalankan Pengujian
- Untuk menjalankan pengujian otomatis yang ada, gunakan perintah berikut di direktori proyek:
  ```
  npm test
  ```
- Untuk pengujian manual, ikuti skenario pengujian yang telah dijelaskan pada bagian 5.

---

Akhir dari Jurnal Pengujian Perangkat Lunak.
