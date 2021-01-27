const cheerio = require('cheerio');
const req = require('request-promise');

async function init() {
    const $ = await req({
        uri: 'https://es.wikipedia.org/wiki/Daniel_Rojo',
        transform: body => cheerio.load(body)
    });

    $('.mw-body').each((i, el) => {
        const text = $(el).find('p').text().replace(/(^\“|\”$)/g, "");
        console.log(text);
    });
};

init();