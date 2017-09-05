var fs = require("fs")
var request = require("request")
var cheerio = require("cheerio")

var existeCarpeta = fs.readdirSync(__dirname)
if(existeCarpeta.indexOf("catPhotos") == -1){
  fs.mkdirSync(__dirname + "/catPhotos")
}

for (var i = 0; i < 30; i++) {
  var url = 'http://www.lolcats.com/page-'+i+'.html'
        request('http://www.lolcats.com/page-'+i+'.html', function (error, response, body) {
          if(error){
            console.log('error:', error)
          } else {
            var $ = cheerio.load(body)
            $("img.lolcat").each( function (i, element) {
              var img = $(element).attr("src").split("/").slice(-1)[0];
              request('http://www.lolcats.com'+$(element).attr("src"))
                .pipe(fs.createWriteStream(__dirname+'/catPhotos/'+img))
            })
          }

      })

}
