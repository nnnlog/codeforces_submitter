const fs = require("fs");
const axios = require("axios");
const _tta = require(`${__dirname}/_tta`);
const cookie = require("cookie");
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const FormData = require('form-data');

//validate argv
const argv = yargs(hideBin(process.argv)).argv;
let contestNum, problem, code;
/*if (argv._.length === 2) {
	problem = argv[0]; //TODO: if you empty the contest URL, it will get the current contest link automatically.
} else*/ if (argv._.length === 3) {
	[code, contestNum, problem] = argv._;
	if (!fs.existsSync(code)) {
		console.log(`${code} doesn't exist.`);
		process.exit(0);
	}
} else {
	console.log(`Usage: `);
	console.log(`node ${argv.$0} <Source Code Path> <Contest> <Problem>`);
	console.log(`Example: node ${argv.$0} ./main.cpp 1000 A`);
	process.exit(0);
}

const problemURL = `https://codeforces.com/contest/${contestNum}/problem/${problem}`;

//validate session
if (!fs.existsSync(`${__dirname}/session`)) {
	console.log(`Write your codeforces JSESSIONID to ${__dirname}/session`);
	process.exit(0);
}
const session = `JSESSIONID=${fs.readFileSync(`${__dirname}/session`, 'utf8')};`;

(async () => {
	const res = (await axios.get(problemURL, {
		headers: {
			'Cookie': session
		},
		maxRedirects: 0
	}));
	const html = res.data;
	let parsed = cookie.parse(res.headers['set-cookie'][0]);

	//is logined?
	if (html.indexOf(`var handle = "`) < 0) {
		console.log(`Check your session`);
		process.exit(0);
	}

	let getValue = find => (new RegExp(`(.*)${find}(.*)\"`, 'gm')).exec(html)[2];

	const csrf = getValue(`X-Csrf-Token\\" content=\\"`);
	const ftaa = getValue(`window._ftaa = "`);
	const bfaa = getValue(`window._bfaa = "`);

	const form = new FormData();
	form.append("csrf_token", csrf);
	form.append("ftaa", ftaa);
	form.append("bfaa", bfaa);
	form.append("action", "submitSolutionFormSubmitted");
	form.append("submittedProblemIndex", problem);
	form.append("source", "");
	form.append("programTypeId", "54"); //54 -> GNU G++17 7.3.0 TODO: change value
	form.append("sourceFile", fs.createReadStream(code));
	form.append("_tta", _tta(parsed));

	try{
		let ret = await axios.post(`${problemURL}?csrf_token=${csrf}`, form, {
			headers: form.getHeaders({
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36',
				'Cookie': `${session}`
			}),
			maxRedirects: 0
		});
		if (ret.status === 200) console.log("You submitted the same code already.");
	} catch (e) {
		e = e.response;
		if (e.status === 302) {
			console.log(`Submit Successful!`);
			console.log(e.headers.location);
		} else console.log(`Submit failed, Status : ${e.status} (${e.statusText})`)
	}
})();
