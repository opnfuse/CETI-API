const fs = require('fs');

const write_json = (json_str = {}, name = '') => {
  const json = JSON.stringify(json_str, null, 0);

  fs.writeFile(`./json/${name}.json`, json, 'utf8', (err) => {
    if (err) {
      console.error(err);
    }
  });
};

module.exports = write_json;
