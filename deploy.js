//My juniors need to start reading comments, and I neet to write them...
//This is a deploying code for pushing your code into FTP server

var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    user: "mill_master@grouptcm.com",                   // NOTE that this was username in 1.x 
    password: "O1lXp4nmp",           // optional, prompted if none given
    host: "serwer1877364.home.pl",
    port: 21,
    localRoot: __dirname + '/dist',
    remoteRoot: '/land/pl/knee/0',
    include: ['*', '**/*'],      // this would upload everything except dot files
    // include: ['*.php', 'dist/*'],
    exclude: ['dist/**/*.map'],     // e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
    deleteRemote: true,              // delete ALL existing files at destination before uploading, if true
    forcePasv: true                 // Passive mode is forced (EPSV command is not sent)
}
 
// use with promises
// ftpDeploy.deploy(config)
//     .then(res => console.log('finished:', res))
//     .catch(err => console.log(err))
    
// use with callback!!!!
ftpDeploy.deploy(config, function(err, res) {
    if (err) console.log(err)
    else console.log('finished:', res);
});