import {mkdir,copyFile,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist',{recursive:true});
for(const file of ['index.html','style.css'])await copyFile(file,'dist/'+file);
await mkdir('dist/src',{recursive:true});
for(const file of ['app.js','data.js','insights.js'])await copyFile('src/'+file,'dist/src/'+file);
console.log('Built Corner Check in dist/');
