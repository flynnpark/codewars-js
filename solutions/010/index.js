function domainName(url) {
  return url
    .replace('https://', '')
    .replace('http://', '')
    .replace('www.', '')
    .split('.')[0];
}

module.exports = domainName;
