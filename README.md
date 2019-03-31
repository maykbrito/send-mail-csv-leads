# PROSPECTING

This will:

1. Parse data from csv file with fast-csv
2. Build a raw email templating data grabbed from that csv
3. Send to recipient, with nodemailer.

---
YOU WILL NEED TO CREATE:

- .env
- mail/template/template.js
- csv/data.csv

## .env

```.env
MAIL_USER=mail@mysmtp.com
MAIL_PASS=#H3R3_my_PA$$!
MAIL_FROM='"My Name" <me@myself.com>'
MAIL_HOST='smtp.mydomain.com'
MAIL_PORT=587
MAIL_SECURE=
```

## mail/template/template.js

```js
const template = {
  to: `{!to}`,
  subject: `Question about {!company}`,
  text: `Hi {!name}!
  
  You can do your mail template here
  
  visit {!url}
  call us: {!phone}`,
};

module.exports = template;
```

## csv/data.csv

```csv
company,name,email,url,phone
Company One,Owner One,one@company.com,https://companyone.com,+17235446200
Company Two,Owner Two,two@company.com,https://companyone.com,+18235446201
```