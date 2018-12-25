var report_models=require('.././models/reporting');


var getJSONData=function(req,res,next){
	var id=req.body.id;
	var index=req.body.index;
	var title=req.body.title;
	var timerange=req.body.time_range;
	var type=req.body.obj_type;


	if(id!=null && id!='undefined' && index!=null && index!='undefined'){
		res.status(400);
		res.send({"status":false,"msg":"Invalid parameters"});
	}
	else{
		var data={
			'id':id,
			'index':index,
			'title':title,
			'type':type,
			'time_range':timerange
		}
		report_models.getVisualizeData(data,function(err,result){
			if(err){
				res.status(400);
				res.send({"status":false,"msg":"Something wrong!Please Try Again","error":err});
			}
			else{
				res.status(200);
				res.send(result);
			}
		});
	}
}


module.exports={
	getJSONData:getJSONData
}


