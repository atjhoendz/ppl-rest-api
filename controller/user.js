const DB = require('../utils/dbConnection')
const sendResponse = require('../utils/sendResponse')

exports.getAll = (req, res) => {
  DB.query('SELECT * FROM users', (err, rows) => {
    if (err)
      return sendResponse(res, false, 500, [], err)
    return sendResponse(res, true, 200, rows, 'Mendapatkan semua data user berhasil')
  })
}

exports.get = (req, res) => {
  let id_user = req.params.id

  DB.query('SELECT * FROM users WHERE id = ?', [ id_user ], (err, rows) => {
    if (err)
      return sendResponse(res, false, 500, [], err)
    if (rows.length > 0)
      return sendResponse(res, true, 200, rows, 'Mendapatkan data user berhasil.')
    return sendResponse(res, true, 404, rows, 'Data user tidak ditemukan')
  })
}

exports.create = (req, res) => {
  let nama_lengkap = req.body.nama_lengkap
  let npm = req.body.npm
  let institusi = req.body.institusi
  let alamat = req.body.alamat

  DB.query('INSERT INTO users (nama_lengkap, npm, institusi, alamat) VALUES (?, ?, ?, ?)', [nama_lengkap, npm, institusi, alamat], (err, rows) => {
    if (err)
      return sendResponse(res, false, 500, [], err.sqlMessage)
    return sendResponse(res, true, 201, rows, 'Menambahkan user berhasil')
  })
}

exports.update = (req, res) => {
  let id_user = req.params.id

  let nama_lengkap = req.body.nama_lengkap
  let npm = req.body.npm
  let institusi = req.body.institusi
  let alamat = req.body.alamat

  DB.query('UPDATE users SET nama_lengkap = ?, npm = ?, institusi = ?, alamat = ? WHERE id = ?', [nama_lengkap, npm, institusi, alamat, id_user], (err, rows) => {
    if(err)
      return sendResponse(res, false, 500, [], err.sqlMessage)
    if (rows.affectedRows > 0) 
      return sendResponse(res, true, 200, rows, 'Data user berhasil diperbarui')
    return sendResponse(res, true, 404, [], 'Data user tidak ditemukan')
  })
}

exports.delete = (req, res) => {
  let id_user = req.params.id

  DB.query('DELETE FROM users WHERE id = ?', [id_user], (err, rows) => {
    if (err)
      return sendResponse(res, false, 500, [], err.sqlMessage)
    if (rows.affectedRows > 0) 
      return sendResponse(res, true, 200, rows, 'User berhasil dihapus')
    return sendResponse(res, true, 404, [], 'Data user tidak ditemukan')
  })
}