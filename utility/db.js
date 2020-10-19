const path = require('path');
const fs = require('fs').promises;

const dataPath = path.join(__dirname, '../data.json');

module.exports.read = async () => JSON.parse(await fs.readFile(dataPath, 'utf-8'));
module.exports.write = async (data) => fs.writeFile(dataPath, JSON.stringify(data));
