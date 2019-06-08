const fs = require('fs')
var list=JSON.parse(fs.readFileSync('notes.json'))

getNotes=()=>{
    console.log('---------------------')
    console.log(`Printing ${list.length} notes`)
    console.log('---------------------')
    for (var i = 0; i < list.length; i++) {
        console.log(`Title: ${list[i].Title}`)
        console.log(`Body: ${list[i].Body}`)
        console.log('+++++++++++++++++++++')
         }
}

addNote=(title, body)=>{
    if(list.filter(el=> el.Title===title).length===0){
    let note={Title:title, Body:body}
    list.push(note)
   fs.writeFileSync('notes.json',JSON.stringify(list))
   console.log('Note created succesfully') 
   }
   else{
    console.log('Note exist')
    
   }
   getNotes()
}

removeNote=(title)=>{
     if(list.filter(note=> note.Title===title).length>0){
     fs.writeFileSync('notes.json',JSON.stringify(list.filter(el => el.Title != title)))
      console.log('note deleted succesfully')}
      else   console.log('Note not exist') 
}
findNote=(title)=>{
    let filternote=list.filter(el=> el.Title===title)
    if(filternote.length>0){
        filternote.map(el =>{
        console.log(`Title: ${el.Title}`)
        console.log(`Body: ${el.Body}`)
        console.log('+++++++++++++++++++++')})
    
       } else console.log('note not found')
}
module.exports = {
    getNotes,
    addNote,
    removeNote,
    findNote
}