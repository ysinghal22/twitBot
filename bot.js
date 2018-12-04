
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
 var stream = T.stream('user');

stream.on('follow' , followed);

function followed(eventMsg){
	console.log("follow Event Worked !");
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	postTweet(' @' + screename + ' thanks for following me');
}


function postTweet(txt){	
		var tweet = {
			status: txt
		}
	T.post ('statuses/update' , tweet , tweeted);

	function tweeted(err,data,response){
		if(err){
			console.log(err);
		}
		else{
			console.log('worked');
		}
	}
	
}
