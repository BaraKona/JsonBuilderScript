function rename () {
    var fs = require ('fs')
    for (let x = 0; x <=100; ++x){
        fs.rename('./images/indige ' +'('+ x +')'+'.jpg', './newImages/indige-' + x + '.jpg', function(err) {
            if (err) console.log(err)
        })
        }
    }

rename()