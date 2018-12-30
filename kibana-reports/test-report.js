var jsreport=require('jsreport');

jsreport.init().then(() => {
  jsreport.render({
    template: {
      content: '<h1>Hello {{foo}}</h1>',
      engine: 'handlebars',
      recipe: 'chrome-pdf'
    },
    data: {
      foo: "world"
    }
  }).then((resp) => {
    // write report buffer to a file
    fs.writeFileSync('report.pdf', resp.content)    
  });
}).catch((e) => {
  console.log(e)
});