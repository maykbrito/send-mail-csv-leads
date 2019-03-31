const csvParser = require('./csv');
const { mailOptions, sendEmail } = require('./mail');

async function main() {
  const list = await csvParser();

  for (const item of list) {
    await sendEmail(mailOptions(item));
  }
}

main().catch(console.error);
