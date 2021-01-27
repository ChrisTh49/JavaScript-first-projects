const cheerio = require('cheerio');
const req = require('request-promise');
const fs = require('fs-extra');

const writeStream = fs.createWriteStream('quotes.csv');

async function init(){
    const $ = await req({
        uri : 'https://quotes.toscrape.com/',
        transform: body => cheerio.load(body)
    });

    writeStream.write('Quote|Author|tags\n');

    $('.quote').each((i, el) => {
        const text = $(el).find('span.text').text().replace(/(^\“|\”$)/g, "");
        const author = $(el).find('span small.author').text();
        const tags = [];
        const tag = $(el).find('.tags a.tag').each((i, el) => {
            tags.push($(el).text());
        });
        writeStream.write(`${text}|${author}|${tags}\n`);
    });
}

init();