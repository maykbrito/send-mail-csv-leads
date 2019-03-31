# SEND MAIL TO LEADS WITH CSV DATA

Using nodejs, nodemailer, fast-csv, dotenv

---
This will:

1. Parse data from csv file with fast-csv
2. Build an email with data grabbed from that csv
3. Send to recipient with nodemailer.

---
After clone, and `npm install`, you will need to create:

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

If you need a secure conection take a look at nodemailer. Pass true to MAIL_SECURE constant and change to your secure mail's port


## mail/template/template.js

```js
const template = {
  to: `{!email}`,
  subject: `Question about {!company}`,
  text: `Hi {!name}!
  
  You can do your mail template here
  
  visit {!url}
  call us: {!phone}`,
};

module.exports = template;
```

This is a raw email.

You can write your own template. Just add your `{!wildcard}` to be replaced.

Every wildcard `{!something}` will be replaced by `something` column value of your csv/data.csv.

Wildcards in template must match the name of your csv's column header. For example: wildcard `{!company}` is the `company` column of your csv.

## csv/data.csv

```csv
company,name,email,url,phone
Company One,Owner One,one@company.com,https://mycompany.com,+17205774941
Company Two,Owner Two,two@company.com,https://mycompany.com,+17205774941
```

## run your script

```sh
node index.js
```