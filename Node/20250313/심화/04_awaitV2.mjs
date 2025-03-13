import fs from 'node:fs/promises';

async function readDirAsyn() {
  try {
    const files = await fs.readdir('./');
    console.log(files);
  } catch (err) {
    console.log(err);
  }
}

readDirAsyn();
