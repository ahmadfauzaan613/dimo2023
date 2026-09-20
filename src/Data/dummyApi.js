import rumahImage from '../Images/Land2.png'
import projectImage from '../Images/IMG-8170.JPG'
import portfolioImage from '../Images/IMG-8172.JPG'

const STORAGE_KEY = 'dimo-dummy-data'

const seedData = {
  penawaran: [
    { id: 1, nama_rumah: 'Rumah Patria', harga_rumah: 'Rp 850.000.000', lokasi_rumah: 'Rumbai, Pekanbaru', gambar: rumahImage },
    { id: 2, nama_rumah: 'Rumah Taman Riau', harga_rumah: 'Rp 975.000.000', lokasi_rumah: 'Tampan, Pekanbaru', gambar: projectImage },
  ],
  pengalaman: [
    { id: 1, nama_rumah: 'Pembangunan Hunian Rumbai', project_value: 'Rp 1,2 miliar', gambar: projectImage },
    { id: 2, nama_rumah: 'Renovasi Rumah Tinggal', project_value: 'Rp 480 juta', gambar: portfolioImage },
  ],
  portofolio: [
    { id: 1, nama_portofolio: 'Pekerjaan struktur dan fasad', gambar: portfolioImage },
    { id: 2, nama_portofolio: 'Dokumentasi pembangunan hunian', gambar: projectImage },
  ],
  pengguna: [
    { id: 1, full_name: 'Super Administrator', username: 'superadmin', password: 'admin', role: 'superadmin', createdAt: '2026-01-01T00:00:00.000Z' },
    { id: 2, full_name: 'Administrator Demo', username: 'admin', password: 'admin', role: 'admin', createdAt: '2026-01-02T00:00:00.000Z' },
  ],
}

const clone = (value) => JSON.parse(JSON.stringify(value))

const readDatabase = () => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) return clone(seedData)

  try {
    return { ...clone(seedData), ...JSON.parse(stored) }
  } catch {
    return clone(seedData)
  }
}

const writeDatabase = (database) => localStorage.setItem(STORAGE_KEY, JSON.stringify(database))

export const getCollection = async (collection) => clone(readDatabase()[collection] || [])

export const createItem = async (collection, values) => {
  const database = readDatabase()
  const item = { ...values, id: Date.now(), createdAt: new Date().toISOString() }
  database[collection] = [...(database[collection] || []), item]
  writeDatabase(database)
  return clone(item)
}

export const updateItem = async (collection, id, values) => {
  const database = readDatabase()
  let updatedItem
  database[collection] = (database[collection] || []).map((item) => {
    if (String(item.id) !== String(id)) return item
    updatedItem = { ...item, ...values }
    return updatedItem
  })
  writeDatabase(database)
  return clone(updatedItem)
}

export const deleteItem = async (collection, id) => {
  const database = readDatabase()
  const item = (database[collection] || []).find((entry) => String(entry.id) === String(id))
  database[collection] = (database[collection] || []).filter((entry) => String(entry.id) !== String(id))
  writeDatabase(database)
  return clone(item)
}

export const fileToDataUrl = (file, fallback) => {
  if (!(file instanceof File)) return Promise.resolve(fallback)
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
}

export const authenticate = async (username, password) => {
  const user = readDatabase().pengguna.find((item) => item.username === username && item.password === password)
  if (!user) throw new Error('INVALID_CREDENTIALS')
  return { Authorization: 'dummy-session-token', username: user.username }
}
