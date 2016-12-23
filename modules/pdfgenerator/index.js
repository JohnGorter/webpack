'use strict' 
var markdownpdf = require('markdown-pdf');
var through = require('through');
var process = require('process');
var path = require('path');
let fs = require('fs');
let recursive = require('recursive-readdir');


module.exports = (config) =>
  readconfig(config).then(
        (options) => {
            console.log('recursive gets following options:', options);
            recursive(options.source, (err, files) => { 
                options.dest = options.dest.replace(".","");
                fs.mkdir(process.cwd() + options.dest);

                try { 
                    var targets = files.filter(file => file.indexOf(".md") > 0 && file.indexOf("node_modules") < 0).map(
                        // exclude all the node_module stuff
                        (file) => "./" + file
                    );
                    for (let f of targets) {
                        console.log("processing: " + path.basename(f));
                        markdownpdf({
                            preProcessHtml: function(){
                            return through(function(data) {
                                    var html =  new Buffer(data).toString('ascii');
                                    html = html.replace(new RegExp("<hr>", 'g'),  "<div style=\"page-break-after: always;\"></div>");
                                    this.queue(new Buffer(html, 'ascii'));
                        })}
                        }).concat.from(f).to(process.cwd() + options.dest + "/" + path.basename(f, '.md') + ".pdf", function () {
                            console.log("Created " + process.cwd() + options.dest + "/" + path.basename(f, '.md') + ".pdf");
                        });
                    }
                } catch(err) {}
            });
        }
    );



function readconfig(configfilename){
    return new Promise(function(resolve, reject){
        
          var configfile = {};
          if (typeof configfilename === 'object') configfile = configfilename;
          if (typeof configfilename  === 'string') configfile = JSON.parse(configfilename);
          console.log("configfilename: ", configfilename);
        //  if (typeof configfile  === 'string') configfile = JSON.parse(fs.readFileSync('./' + configfilename));
          resolve({
             source : configfile.source || './',
             dest : configfile.dest || configfile.source
          });
    });
}