const axios = require('axios');
const cheerio = require('cheerio');

const getLinks = async (site) => {
	try {
		const { data } = await axios.get(
      site
		);
		const $ = cheerio.load(data);
		const links = [];

		$('a').each((_idx, el) => {
      const link = el.attribs.href
			links.push(link)
		});

		return links;
	} catch (error) {
		throw error;
	}
};

let exampleSite = 'https://www.google.com/'

getLinks(exampleSite)
  .then((links) => console.log(links));
