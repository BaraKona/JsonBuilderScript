  function rename () {
    var fs = require ('fs')
    fs.readdirSync('./images/').forEach((file, index) => {  //location of files you wish to change
        fs.rename(`./images/${file}`, './newImages/newName' + index + '.jpg', function(err) { // location of new files + file name you want
            if (err) console.log(err)
        })
    });
  }
rename()