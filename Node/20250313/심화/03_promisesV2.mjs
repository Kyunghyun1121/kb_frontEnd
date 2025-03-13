import fs from 'node:fs/promises';

async function getDirectories() {
  try {
    const result = await fs.readdir('./');
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

getDirectories();
