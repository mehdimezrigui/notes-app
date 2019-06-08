const fs = require('fs')
const setting = require('./setting')

let cmd=process.argv[2]

if(cmd==='list'){
  setting.getNotes()

}else if(cmd==='add'&& process.argv.length===3){
  console.log(`--help   show help`)
  console.log(`--title, -t   Title of note`)
  console.log(`--body,  -b   Body of note`)

}else if(cmd==='add'){
  setting.addNote(process.argv[4],process.argv[6])

}else if(cmd==='remove'&& process.argv.length===3){
console.log(`--help   show help`)
console.log(`--title, -t   Title of note`)

}else if(cmd==='remove'){
setting.removeNote(process.argv[4])

}else if(cmd==='read'&& process.argv.length===3){
console.log(`--help   show help`)
console.log(`--title, -t   Title of note`)

}else if(cmd==='read'){
setting.findNote(process.argv[4])
}
