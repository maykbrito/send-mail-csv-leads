const template = require('./template');

const doReplace = (text, searchText, replaceText) => {
  const searcher = new RegExp(`\\{!${searchText}\\}`, 'gi');
  return text.replace(searcher, replaceText);
};

const templateMail = csvFields => {
  const parsedTemplate = { ...template };
  for (const templateKey of Object.keys(parsedTemplate)) {
    for (const csvFieldKey of Object.keys(csvFields)) {
      const csvFieldValue = csvFields[csvFieldKey];
      parsedTemplate[templateKey] = doReplace(
        parsedTemplate[templateKey],
        csvFieldKey,
        csvFieldValue
      );
    }
  }

  return parsedTemplate;
};

module.exports = templateMail;
