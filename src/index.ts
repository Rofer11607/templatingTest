import {ServerClient} from 'postmark'
import {readFileSync} from 'fs'
import {render} from 'squirrelly'

/* <-- Import End --> */

const serverToken = "INSERT API KEY HERE"
const postmark = new ServerClient(serverToken)
const template = readFileSync(`${__dirname}/../src/template.html`, 'utf8')
const variables = {customText: 'Hello World'}
const sendAddress = 'rafac@monsterrg.com'

/* <-- Variable Definition End --> */

const output = render(template, variables)
postmark.sendEmail({
	To: sendAddress,
	From: 'testing@monsterrg.com',
	Subject: 'Templating test',
	HtmlBody: output,
})
console.log('Hello World');
