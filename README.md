# gdk-mws-2018-challenge-01-ghibli-studio

> 👾 Google Developer Kejar Mobile Web Specialist 2018 - Challenge 01 - Playing with Ghibli Studio Public API

Kalau kata orang **"Bisa karena terbiasa"**, maka dari itu kami bersama-sama teman-teman alumni Google Developer Kejar untuk Mobile Web Specialist 2018 ingin tetap membiasakan diri mengerjakan berbagai hal keren yang tidak bisa kami kerjakan di kantor karena satu dan lain hal.

Repo ini merupakan kumpulan dari hasil karya teman-teman dalam menerima **Challenge 01**, yakni membuat sebuah website berdasarkan Public API [https://ghibliapi.herokuapp.com/](https://ghibliapi.herokuapp.com/). Challenge ini sendiri ditujukan untuk proses belajar bersama-sama, kalaupun ada berbagai kekurangan di dalamnya harap dimaklumi dan silahkan open issue di repository terkait demi kemajuan bersama-sama.

## Live Webpage

[https://mazipan.github.io/gdk-mws-2018-challenge-01-ghibli-studio/](https://mazipan.github.io/gdk-mws-2018-challenge-01-ghibli-studio/)

## Bagaimana menambahkan file kalian?

+ Fork repo ini, kalau belum bisa cara fork bisa baca artikel https://help.github.com/articles/fork-a-repo/
+ Buat `branch` dengan nama kalian, misal `participants/IrfanMaulana`. Baca artikel ini https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/
+ Setelah membuat branch tersebut, kalian akan bekerja di branch itu dengan langkah kurang lebih seperti pada poin selanjutnya
+ Pastikan kalian membuat folder dengan nama kalian terlebih dahulu, seperti sudah saya contohkan dengan folder `IrfanMaulana`
+ Tiap folder paling tidak memuat satu file `readme.md` yang diisi dengan **nama** dan **email** kalian masing-masing.
+ Jika telah selesai, buatlah `pull request` ke repository ini ke branch `master`. Baca artikel https://help.github.com/articles/creating-a-pull-request/
+ Pastikan di `pull request` tersebut kalian sebutkan nama kalian di judul pull request-nya.
+ **Selamat Belajar!!!**

## Bagaimana menambahkan karya saya ke dalam daftar?

+ Silahkan tambahkan di file **[/assets/data.js](https://github.com/mazipan/gdk-mws-2018-challenge-01-ghibli-studio/blob/master/assets/data.js)**, dengan data struktur sebagai contoh berikut:

```js
module.exports = [
  {
    name: 'Irfan Maulana',
    avatar: 'https://avatars2.githubusercontent.com/u/7221389?s=200&v=4',
    github_link: 'https://github.com/mazipan/ghibli-fans',
    demo_link: 'https://mazipan.github.io/ghibli-fans/',
    technologies: ['Preact', 'Redux']
  }
];
```

## Menambahkan menggunakan `submodule`

+ Buat repository baru di akun kalian, dan tambahkan file disana
+ Tambahkan submodule di repo ini dengan cara:

```shell

# Run
git submodule add [URL_REPOSITORY] FOLDER_NAME

# Example
# should using https:// instead of git:/
git submodule add https://github.com/DeriKurniawan/DeriKurniawanMWS DeriKurniawan

# Update All Submodule
git submodule init
git submodule update --remote
```

+ Buat pull request ke repo ini branch `master`

## Jangan lupa untuk tekan ⭐ pada repository ini


--------

Copyright © 2018
