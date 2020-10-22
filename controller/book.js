const DB = require('../utils/dbConnection')
const sendResponse = require('../utils/sendResponse')

exports.getAll = (req, res) => {
  DB.query('SELECT * FROM buku', (err, rows, fields) => {
    if (err) 
      return sendResponse(res, false, 500, [], err)
    return sendResponse(res, true, 200, rows, 'Mendapatkan semua data buku berhasil')
  })
}

exports.get = (req, res) => {
  let id_buku = req.params.id

  DB.query('SELECT * FROM buku WHERE id = ?', [ id_buku ], (err, rows) => {
    if (err)
      return sendResponse(res, false, 500, [], err)
    if (rows.length > 0)
      return sendResponse(res, true, 200, rows, 'Mendapatkan data buku berhasil')
    return sendResponse(res, true, 404, [], 'Data buku tidak ditemukan')
  })
}

exports.create = (req, res) => {
  let judul = req.body.judul
  let penerbit = req.body.penerbit
  let jml_halaman = req.body.jml_halaman

  DB.query('INSERT INTO buku (judul, penerbit, jml_halaman) VALUES (?, ?, ?)', [ judul, penerbit, jml_halaman ], (err, rows) => {
    if (err)
      return sendResponse(res, false, 500, [], err.sqlMessage)
    return sendResponse(res, true, 201, rows, 'Buku berhasil ditambahkan')
  })
}

exports.update = (req, res) => {
  let id_buku = req.params.id

  let judul = req.body.judul
  let penerbit = req.body.penerbit
  let jml_halaman = req.body.jml_halaman

  DB.query('UPDATE buku SET judul = ?, penerbit = ?, jml_halaman = ? WHERE id = ?', [ judul, penerbit, jml_halaman, id_buku ], (err, rows) => {
    if (err)
      return sendResponse(res, false, 500, [], err.sqlMessage)
    if (rows.affectedRows > 0)
      return sendResponse(res, true, 200, rows, 'Data buku berhasil diperbarui')
    return sendResponse(res, true, 404, [], 'Data buku tidak ditemukan')
  })
}

exports.delete = (req, res) => {
  let id_buku = req.params.id

  DB.query('DELETE FROM buku WHERE id = ?', [ id_buku ], (err, rows) => {
    if (err)
      return sendResponse(res, false, 500, [], err.sqlMessage)
    if (rows.affectedRows > 0)
      return sendResponse(res, true, 200, rows, 'Buku berhasil dihapus')
    return sendResponse(res, true, 404, [], 'Data buku tidak ditemukan')
  })
}