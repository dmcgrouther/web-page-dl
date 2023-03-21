The main script is in app.js.

To get the code running, here are the following steps with the respective terminal commands:

1. Clone this repo:
```
git clone https://github.com/dmcgrouther/web-page-dl.git
```

2. Go into the directory:
```
cd web-page-dl
```

3. Install the node packages:
```
npm install
```

4. Run the following command:
```
npm start
```

You should see an array of links printed out for the website in the variable exampleSite. This can be changed as needed in App.js. 

<br>

I used this article as a starting point for my code:
https://www.scrapingbee.com/blog/web-scraping-javascript/


This was the following script I modified:

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
