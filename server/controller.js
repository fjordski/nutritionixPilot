var request = require('request');


module.exports = function(req, res){
  var url = 'https://api.nutritionix.com/v1_1/search'+req.url+'&appId='+process.env.NUTRITIONIX_APP_ID+'&appKey='+process.env.NUTRITIONIX_APP_KEY;

  console.log(url);
  req.pipe(request(url)).pipe(res);
};
