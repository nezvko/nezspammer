const sendmail = require("sendmail")();
const booru = require("booru");
var file = "";
const d = require('./config.json')

for (let i = 0; i < parseInt(d.amount); i++) { 
booru.search("e6", "", { limit: 1, random: true }).then(posts => {
  for (let post of posts) file = post.fileUrl;
});
sendmail({
  from: d.from,
  to: d.to,
  subject: d.subject,
  html: d.content,
  attachments: d.attachments
});
console.log("Sent!");

}