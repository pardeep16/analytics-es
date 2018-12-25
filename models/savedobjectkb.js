var request=require('request');

var kb_node='http://localhost:5601';
var kb_savedobj_api='/api/saved_objects/'


var getSavedObject=function(type,id){
	var url=kb_node+kb_savedobj_api+type+"/"+id;
	console.log(url);

	request(url,function(err,res,body){
		if(err){
			console.log(err);
			return null;
		}
		else{
			//console.log(res);
			if(body){
				return null;
			}
			else{
				return body;
			}
			console.log(body);
		}
	});

}

var getSavedObjectQuey=function(type,id){
	var url=kb_node+kb_savedobj_api+type+"/"+id;
	console.log(url);

	request(url,function(err,res,body){
		if(err){
			console.log(err);
			return null;
		}
		else{
			if(body){
				var esQuery=buildQuery(body);
				//return esQuery;
			}
			else{
				return null;
			}
			
			//console.log(body);
		}
	});
}

function buildQuery(body){
	var obj=JSON.parse(body);

	console.log(obj);
}




getSavedObjectQuey('visualization','b72dd430-bb4d-11e8-9c84-77068524bcab');