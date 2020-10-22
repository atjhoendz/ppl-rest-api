const DB = require('../utils/dbConnection')
const sendResponse = require('../utils/sendResponse')

exports.getAll = (req, res) => {
  let query = 'SELECT * FROM peminjaman INNER JOIN users ON peminjaman.id_user = users.id INNER JOIN buku ON peminjaman.id_buku = buku.id'

  DB.query(query, (err, rows) => {
    if (err)
      return sendResponse(res, false, 500, [], err.sqlMessage)
    return sendResponse(res, true, 200, rows, 'Mendapatkan semua data kepemilikan buku berhasil')
  })
}

exports.get = (req, res) => {
  let id = req.params.id

  let query = 'SELECT * FROM peminjaman INNER JOIN users ON peminjaman.id_user = users.id INNER JOIN buku ON peminjaman.id_buku = buku.id WHERE peminjaman.id = ?'

  DB.query(query, [ id ], (err, rows) => {
    if (err)
      return sendResponse(res, false, 500, [], err.sqlMessage)
    if (rows.length > 0)
      return sendResponse(res, true, 200, rows, 'Data berhasil didapatkan')
    return sendResponse(res, true, 404, [], 'Data tidak ditemukan')
  })
}

exports.create = (req, res) => {
  let id_user = req.body.id_user
  let id_buku = req.body.id_buku
  let jml_buku = req.body.jml_buku
  let tanggal_pinjam = req.body.tanggal_pinjam
  let tanggal_kembali = req.body.tanggal_kembali

  DB.query('INSERT INTO peminjaman (id_user, id_buku, jml_buku, tanggal_pinjam, tanggal_kembali) VALUES (?, ?, ?, ?, ?)', [ id_user, id_buku, jml_buku, tanggal_pinjam, tanggal_kembali ], (err, rows) => {
    if (err)
      return sendResponse(res, false, 500, [], err.sqlMessage)
    return sendResponse(res, true, 201, rows, 'Data berhasil ditambahkan')
  })
}

exports.update = (req, res) => {
  let id = req.params.id

  let id_user = req.body.id_user
  let id_buku = req.body.id_buku
  let jml_buku = req.body.jml_buku
  let tanggal_pinjam = req.body.tanggal_pinjam
  let tanggal_kembali = req.body.tanggal_kembali
  
  DB.query('UPDATE peminjaman SET id_user = ?, id_buku = ?, jml_buku = ?, tanggal_pinjam = ?, tanggal_kembali = ? WHERE id = ?', [ id_user, id_buku, jml_buku, tanggal_pinjam, tanggal_kembali, id ], (err, rows) => {
    if (err)
      return sendResponse(res, false, 500, [], err.sqlMessage)
    if (rows.affectedRows > 0)
      return sendResponse(res, true, 200, rows, 'Data berhasil diperbarui')
    return sendResponse(res, true, 404, [], 'Data tidak ditemukan')
  })
}

exports.delete = (req, res) => {
  let id = req.params.id

  DB.query('DELETE FROM peminjaman WHERE id = ?', [ id ], (err, rows) => {
    if (err)
      return sendResponse(res, false, 500, [], err.sqlMessage)
    if (rows.affectedRows > 0)
      return sendResponse(res, true, 200, rows, 'Data berhasil dihapus')
    return sendResponse(res, true, 404, [], 'Data tidak ditemukan')
  })
}