# PPL II REST API

Simple CRUD REST API

# Route

> base url localhost:3000/api/v1/

## user

| Method | Endpoint  | Detail                  |
| ------ | --------- | ----------------------- |
| GET    | /user     | Get all user data       |
| GET    | /user/:id | Get spesific user by id |
| POST   | /user     | Create new user         |
| UPDATE | /user/:id | Update user data by id  |
| DELETE | /user/:id | Delete user by id       |

## buku

| Method | Endpoint  | Detail                  |
| ------ | --------- | ----------------------- |
| GET    | /buku     | Get all book data       |
| GET    | /buku/:id | Get spesific book by id |
| POST   | /buku     | Create new book         |
| UPDATE | /buku/:id | Update book data by id  |
| DELETE | /buku/:id | Delete book by id       |

## peminjaman

| Method | Endpoint        | Detail                        |
| ------ | --------------- | ----------------------------- |
| GET    | /peminjaman     | Get all peminjaman data       |
| GET    | /peminjaman/:id | Get spesific peminjaman by id |
| POST   | /peminjaman     | Create new peminjaman         |
| UPDATE | /peminjaman/:id | Update peminjaman data by id  |
| DELETE | /peminjaman/:id | Delete peminjaman by id       |

# Run on your local machine

```sh
$ git clone https://github.com/atjhoendz/ppl-rest-api.git
$ cd ppl-rest-api
$ npm install
$ npm start
```
