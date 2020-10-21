const DB = require('../utils/dbConnection')
const sendResponse = require('../utils/sendResponse')

exports.getAll = (req, res) => {
  DB.query('SELECT * FROM users', (err, rows, fields) => {
    if (err) {
      return sendResponse(res, false, 404, [], err)
    } else {
      return sendResponse(res, true, 200, rows, 'Mendapatkan semua data user berhasil')
    }
  })
}

exports.get = (req, res) => {
  let id_user = req.params.id

  DB.query('SELECT * FROM users WHERE id = ?', [ id_user ], (err, rows, fields) => {
    if (err){
      return sendResponse(res, false, 404, [], err)
    } else {
      if (rows.length > 0)
      return sendResponse(res, true, 200, rows, 'Mendapatkan data user berhasil.')
      else 
        return sendResponse(res, true, 200, rows, 'Data user tidak ditemukan')
    }
  })
}

exports.create = (req, res) => {
  let nama_lengkap = req.body.nama_lengkap
  let npm = req.body.npm
  let institusi = req.body.institusi
  let alamat = req.body.alamat

  DB.query('INSERT INTO users (nama_lengkap, npm, institusi, alamat) VALUES (?, ?, ?, ?)', [nama_lengkap, npm, institusi, alamat], (err, rows, fields) => {
    if (err)
      return sendResponse(res, false, 500, [], err)
    else 
      return sendResponse(res, true, 201, rows, 'Menambahkan user berhasil')
  })
}

exports.update = (req, res) => {
  let id_user = req.params.id

  let nama_lengkap = req.body.nama_lengkap
  let npm = req.body.npm
  let institusi = req.body.institusi
  let alamat = req.body.alamat

  DB.query('UPDATE users SET nama_lengkap = ?, npm = ?, institusi = ?, alamat = ? WHERE id = ?', [nama_lengkap, npm, institusi, alamat, id_user], (err, rows, fields) => {
    if(err)
      return sendResponse(res, false, 500, [], err)
    else {
      if (rows.affectedRows > 0) 
        return sendResponse(res, true, 200, rows, 'Data user berhasil diperbarui')
      else 
        return sendResponse(res, true, 404, [], 'Data user tidak ditemukan')
    }
  })
}

exports.delete = (req, res) => {
  let id_user = req.params.id

  DB.query('DELETE FROM users WHERE id = ?', [id_user], (err, rows, fields) => {
    if (err)
      return sendResponse(res, false, 500, [], err)
    else {
      if (rows.affectedRows > 0) 
        return sendResponse(res, true, 200, rows, 'User berhasil dihapus')
      else
        return sendResponse(res, true, 404, [], 'Data user tidak ditemukan')
    }
  })
}