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
      console.log(el.attribs.href); //el //el.attribs.href
			const postTitle = $(el).text()
			postTitles.push(postTitle)
		});

		return postTitles;
	} catch (error) {
		throw error;
	}
};

getPostTitles('https://old.reddit.com/r/programming/')
  .then((postTitles) => console.log(postTitles));
