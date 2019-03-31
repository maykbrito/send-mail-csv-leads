const csv = require('fast-csv');

const parser = () =>
  new Promise((resolve, reject) => {
    const lines = [];
    csv
      .fromPath('./csv/data.csv', { headers: true })
      .validate(({ company }) => company !== '')
      .on('data', data => {
        lines.push(data);
      })
      .on('end', function() {
        resolve(lines);
      });
  });
module.exports = parser;
