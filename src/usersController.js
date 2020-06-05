
import fs from 'fs'

const readJsonFile = () => fs.readFileSync('./users.json', { endoding: 'utf8' })
const jsonFileContent = JSON.parse(readJsonFile())

const getUsers = () => {
  if (jsonFileContent) return jsonFileContent
  return 'No users found'
}

const getSingleUser = (userId) => {
  const user = jsonFileContent.filter((user) => user.id === Number(userId))
  return user.length ? user : 'User not found'
}

export { getUsers, getSingleUser }
