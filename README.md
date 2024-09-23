[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=16096645&assignment_repo_type=AssignmentRepo)
# World Bank

> Duration 60 minutes (simulasi livecode)

Buat aplikasi yang menampilkan daftar `Bank` yang memiliki beberapa `Customer` dengan MVC Async.

**Note :**   
- Tidak boleh melakukan pengubahan terhadap `format keyname` pada data.json.
- Perlu diingat bahwa private property tidak dapat dibaca oleh JSON stringify sehingga kamu perlu melakukan adjusment.

## Release 0

Buatlah class `Bank` yang memiliki property:

- id = id dari sebuah `Bank`
- name = nama dari sebuah `Bank`
- type = jenis dari sebuah `Bank`
- limit = limit banyaknya `Customer` dari sebuah `Bank`
- customers = kumpulan instance `Customer`

Terdapat 2 jenis `Bank`:

- `LocalBank` = memiliki limit 3 `Customer`
- `NationalBank` = memiliki limit 5 `Customer`

Buatlah class `Customer` memiliki property:

- name = nama dari seorang `Customer`
- ktp = ktp dari seorang `Customer` (private)
- depositAmount = jumlah uang dari seorang `Customer` (private)

## Release 1

Buatlah fitur yang dapat menampilkan seluruh `Bank` beserta `Customer` berdasarkan data dari `data.json`

Note : gunakan Factory Method 

```cmd
node index.js list
```

<img src="./assets/list.png">

## Release 2

Buatlah fitur yang dapat menambahkan `Customer` ke sebuah `Bank` dan disimpan ke `data.json`

```cmd
node index.js addCustomer <idBank> <name> <ktp> <depositAmount>
```

```cmd
node index.js addCustomer 1 Jake 9982823323 10000
```

<img src="./assets/addCustomer.png">

## Release 3

Buatlah fitur yang dapat menghapus `Customer` dari sebuah `Bank` berdasarkan id `Bank` dan ktp `Customer`, kemudian disimpan ke `data.json`

```cmd
node index.js deleteCustomer <idBank> <ktp>
```

```cmd
node index.js deleteCustomer 1 9982823323
```

<img src="./assets/deleteCustomer.png">

## Release 4

Buatlah fitur yang dapat menampilkan seluruh `Customer` dari sebuah `Bank` berdasarkan id (gunakan `console.table` untuk mencetak table)

```cmd
node index.js detail <idBank>
```

```cmd
node index.js detail 1
```

<img src="./assets/detail.png">

## Release 5

1. Buatlah fitur validasi apabila melakukan addCustomer dan jumlah `Customer` terdaftar pada `Bank` tersebut sudah mencapai limit

   ```cmd
   node index.js addCustomer 1 Jake 9982823323 10000
   ```

   <img src="./assets/validation-addCustomer.png">
2. Buatlah fitur validasi apabila melakukan deleteCustomer dengan ktp yang tidak terdaftar

   ```cmd
   node index.js deleteCustomer 1 00000000
   ```

   <img src="./assets/validation-deleteCustomer.png">


## Release 6

Buatlah sebuah fitur untuk melakukan penambahan saldo dari `Customer`
Buatlah instance method 'addInterest' pada class yang membutuhkan.\
Method ini akan mengupdate `depositAmount` dari `Customer` yang dipilih sesuai `id` yang dimasukkan.\
Besar kenaikan adalah 10% dari depositAmount yang sekarang

- Format command yang harus dijalankan
  ```bash
    $ node index.js addInterest <idBank>
  ```

- Contoh penggunaan command ini

  ```bash
   $ node index.js addInterest 1
  ```


## Release 7

Ubahlah fitur `detail` yang menampilkan list `Customer` yang ada pada `Bank`.

- Buatlah sebuah instance method `deposiRupiahFormat` yang akan menampilkan `depositAmount` dari sebuah `Customer` dengan format rupiah:
  contoh:
  ```txt
    depositAmount = 300000
    depositRupiahFormat = Rp. 300000
  ```
- Format command yang harus dijalankan
  ```bash
    node index.js detail <idBank>
  ```

> Pada livecode akan ada requirement factory method, silahkan coba pada simulasi ini yaa.
