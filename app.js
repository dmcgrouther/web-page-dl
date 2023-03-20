const axios = require('axios');
const cheerio = require('cheerio');

const getPostTitles = async (site) => {
	try {
		const { data } = await axios.get(
      site
		);
		const $ = cheerio.load(data);
		const postTitles = [];

		$('a').each((_idx, el) => {
      const link = el.attribs.href
			postTitles.push(link)
		});

		return postTitles;
	} catch (error) {
		throw error;
	}
};

getPostTitles('https://www.google.com/')
  .then((postTitles) => console.log(postTitles));
