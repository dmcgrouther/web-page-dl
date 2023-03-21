I used this article:
https://www.scrapingbee.com/blog/web-scraping-javascript/


I used this code as a starting point to write my script:

```
const axios = require('axios');
const cheerio = require('cheerio');

const getPostTitles = async () => {
	try {
		const { data } = await axios.get(
			'https://old.reddit.com/r/programming/'
		);
		const $ = cheerio.load(data);
		const postTitles = [];

		$('div > p.title > a').each((_idx, el) => {
			const postTitle = $(el).text()
			postTitles.push(postTitle)
		});

		return postTitles;
	} catch (error) {
		throw error;
	}
};

getPostTitles()
    .then((postTitles) => console.log(postTitles));

```
