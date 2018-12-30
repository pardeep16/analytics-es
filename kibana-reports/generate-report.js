
const hbs=require('handlebars');
const path=require('path');
const fs=require('fs-extra');
var imagePath="./temp/img";

var ejs=require('ejs');


var reportAsPDF=function(data,callback){


}





const templateCompile=function(template,data){

	/*let template = ejs.compile(str, options);
template(data);*/
	var dirpath=path.resolve(__dirname,'../');
	console.log("dir path :"+dirpath);
	const filepath=path.join(dirpath,'templates',template+'.ejs');
	console.log(filepath);
	const html=fs.readFileSync(filepath,'utf-8',function(err,res){
		if(err) console.log(err);
		console.log("resp "+resp);
	});
	return ejs.compile(html)(data);
}
var dirpath=path.resolve(__dirname,'../');;

var absolutepath="file:///"+dirpath+"/temp/img/report-vis.png";


var dataObj={"data":[
{	"title":'test-tiele',
	"visPath":absolutepath,
	"visData":'<table><thead><tr><th class="string">2</th><th class="string">3</th><th class="number">doc_count</th></tr></thead><tbody><tr><td class="string">100.0-200.0</td><td class="string">2DHGW92</td><td class="number">1</td></tr><tr><td class="string">100.0-200.0</td><td class="string">7QO9FQX</td><td class="number">1</td></tr><tr><td class="string">100.0-200.0</td><td class="string">SDZQJAO</td><td class="number">1</td></tr><tr><td class="string">100.0-200.0</td><td class="string">UPYBY0Z</td><td class="number">1</td></tr><tr><td class="string">100.0-200.0</td><td class="string">WCV807S</td><td class="number">1</td></tr><tr><td class="string">100.0-200.0</td><td class="string">Z9OWYXU</td><td class="number">1</td></tr><tr><td class="string">200.0-600.0</td><td class="string">0VJGQD3</td><td class="number">1</td></tr><tr><td class="string">200.0-600.0</td><td class="string">1MAEYXT</td><td class="number">1</td></tr><tr><td class="string">200.0-600.0</td><td class="string">24B12T8</td><td class="number">1</td></tr><tr><td class="string">200.0-600.0</td><td class="string">38DL0W5</td><td class="number">1</td></tr><tr><td class="string">200.0-600.0</td><td class="string">3EGDIS0</td><td class="number">1</td></tr><tr><td class="string">200.0-600.0</td><td class="string">3QCO6IE</td><td class="number">1</td></tr><tr><td class="string">200.0-600.0</td><td class="string">3UNFMV9</td><td class="number">1</td></tr><tr><td class="string">200.0-600.0</td><td class="string">42NTNA0</td><td class="number">1</td></tr><tr><td class="string">200.0-600.0</td><td class="string">44WXG9Y</td><td class="number">1</td></tr><tr><td class="string">600.0-1000.0</td><td class="string">02EKPYM</td><td class="number">1</td></tr><tr><td class="string">600.0-1000.0</td><td class="string">04JX3Q0</td><td class="number">1</td></tr><tr><td class="string">600.0-1000.0</td><td class="string">109CUFD</td><td class="number">1</td></tr><tr><td class="string">600.0-1000.0</td><td class="string">11QD22O</td><td class="number">1</td></tr><tr><td class="string">600.0-1000.0</td><td class="string">13X5SKH</td><td class="number">1</td></tr><tr><td class="string">600.0-1000.0</td><td class="string">1AHKSRA</td><td class="number">1</td></tr><tr><td class="string">600.0-1000.0</td><td class="string">1GXF2QH</td><td class="number">1</td></tr><tr><td class="string">600.0-1000.0</td><td class="string">1NH90MS</td><td class="number">1</td></tr><tr><td class="string">600.0-1000.0</td><td class="string">1PMAE0A</td><td class="number">1</td></tr></tbody></table>'

},{	"title":'test-tiele-1',
	"visPath":absolutepath,
	"visData":'<table><thead><tr><th class="string">2</th><th class="string">3</th><th class="number">doc_count</th></tr></thead><tbody><tr><td class="string">100.0-200.0</td><td class="string">2DHGW92</td><td class="number">1</td></tr><tr><td class="string">100.0-200.0</td><td class="string">7QO9FQX</td><td class="number">1</td></tr><tr><td class="string">100.0-200.0</td><td class="string">SDZQJAO</td><td class="number">1</td></tr><tr><td class="string">100.0-200.0</td><td class="string">UPYBY0Z</td><td class="number">1</td></tr><tr><td class="string">100.0-200.0</td><td class="string">WCV807S</td><td class="number">1</td></tr><tr><td class="string">100.0-200.0</td><td class="string">Z9OWYXU</td><td class="number">1</td></tr><tr><td class="string">200.0-600.0</td><td class="string">0VJGQD3</td><td class="number">1</td></tr><tr><td class="string">200.0-600.0</td><td class="string">1MAEYXT</td><td class="number">1</td></tr><tr><td class="string">200.0-600.0</td><td class="string">24B12T8</td><td class="number">1</td></tr><tr><td class="string">200.0-600.0</td><td class="string">38DL0W5</td><td class="number">1</td></tr><tr><td class="string">200.0-600.0</td><td class="string">3EGDIS0</td><td class="number">1</td></tr><tr><td class="string">200.0-600.0</td><td class="string">3QCO6IE</td><td class="number">1</td></tr><tr><td class="string">200.0-600.0</td><td class="string">3UNFMV9</td><td class="number">1</td></tr><tr><td class="string">200.0-600.0</td><td class="string">42NTNA0</td><td class="number">1</td></tr><tr><td class="string">200.0-600.0</td><td class="string">44WXG9Y</td><td class="number">1</td></tr><tr><td class="string">600.0-1000.0</td><td class="string">02EKPYM</td><td class="number">1</td></tr><tr><td class="string">600.0-1000.0</td><td class="string">04JX3Q0</td><td class="number">1</td></tr><tr><td class="string">600.0-1000.0</td><td class="string">109CUFD</td><td class="number">1</td></tr><tr><td class="string">600.0-1000.0</td><td class="string">11QD22O</td><td class="number">1</td></tr><tr><td class="string">600.0-1000.0</td><td class="string">13X5SKH</td><td class="number">1</td></tr><tr><td class="string">600.0-1000.0</td><td class="string">1AHKSRA</td><td class="number">1</td></tr><tr><td class="string">600.0-1000.0</td><td class="string">1GXF2QH</td><td class="number">1</td></tr><tr><td class="string">600.0-1000.0</td><td class="string">1NH90MS</td><td class="number">1</td></tr><tr><td class="string">600.0-1000.0</td><td class="string">1PMAE0A</td><td class="number">1</td></tr></tbody></table>'

}]}



var options = {
    "footer": {
    "height": "10mm",
    "contents": {
      
      default: '<div style="text-align: center;"><span style="border:1px;font-size:12px;">BT MYSD Insight Analytics & Monitoring</span></div>', // fallback value
  
    }
  }
  }
const htmldata=templateCompile("report-template",dataObj);
console.log(htmldata);

var pdf = require('html-pdf');

pdf.create(htmldata,options).toFile('./report.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});