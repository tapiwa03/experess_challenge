import fs from 'fs'
import faker from 'faker'

const generateRandomUsers = () => {
  const data = []
  for (let i = 1; i < 51; i++) {
    data.push({
      id: i,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email()
    })
  }

  fs.writeFile('./users.json', JSON.stringify(data), function (err) {
    if (err) throw err
    console.log('JSON Users Generated!')
  })
}

export { generateRandomUsers }
