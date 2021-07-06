// Below I have commented simple method and used ES6 standard syntax. You can refer both to understand.


const fs = require('fs');
const chalk = require('chalk');

// simple method :
// const getNotes = function (){
//    return "Your Notes...";
// }
// ES6 Method : 
const getNotes = () => {
   return "Your Notes...";
}


// simple method :
// const addNote = function(title,body){
//    const notes = loadNotes();
//    const check_for_duplicates = notes.filter(function(note){
//       return note.title === title;
//    });
//    if(check_for_duplicates.length==0){

//       notes.push({
//          title: title,
//          body: body
//       });
//       saveNotes(notes);
//       console.log(chalk.green('Success : Note Added!'));
//    }else{
//       console.log(chalk.red('Error : Note Already Present!'));
//    }
// }

// ES6 Method :
const addNote = (title,body) => {
   const notes = loadNotes();
   // const check_for_duplicates = notes.filter((note) => (note.title === title));
   const check_duplicate_Note = notes.find((note) => (note.title === title));
   if(!check_duplicate_Note){
      notes.push({
         title: title,
         body: body
      });
      saveNotes(notes);
      console.log(chalk.green('Success : Note Added!'));
   }else{
      console.log(chalk.red('Error : Note Already Present!'));
   }
}


// simple method :
// const saveNotes = function (notes){
//    const notesJSON = JSON.stringify(notes);
//    fs.writeFileSync('notes.json',notesJSON);
// }
// ES6 Method :
const saveNotes = (notes) => {
   const notesJSON = JSON.stringify(notes);
   fs.writeFileSync('notes.json',notesJSON);
}


// Simple method
// const loadNotes = function(){
//    try{
//       const dataBuffer = fs.readFileSync('notes.json');
//       const dataJSON = dataBuffer.toString();
//       return JSON.parse(dataJSON);
//    }catch(e){
//       return [];
//    }
// }
// ES6 Method :
const loadNotes = () => {
   try{
      const dataBuffer = fs.readFileSync('notes.json');
      const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON);
   }catch(e){
      return [];
   }
}


// Simple method :
// const listNote = function (){
//    const notes = loadNotes();
//    console.log(chalk.inverse('Your Notes Below :'));
//    notes.forEach(function(note){
//       console.log(note.title);
//    });
// }
// ES6 Method :
const listNote = () => {
   const notes = loadNotes();
   console.log(chalk.inverse('Your Notes Below :'));
   notes.forEach((note) => console.log(note.title));
}


// Simple method :
// const removeNote = function(title){
//    try{
//       const notes = loadNotes();
//       const notes_to_keep = notes.filter(function (note){
//          return note.title !== title;
//       });
//       saveNotes(notes_to_keep);
//       console.log(chalk.green('Success : Note deleted!'));
//    }catch(e){
//       console.log(chalk.red('Error : Note Cannot be deleted!'));
//    }
// }
// ES6 Method
const removeNote = (title) => {
   try{
      const notes = loadNotes();
      const notes_to_keep = notes.filter((note) => (note.title !== title));
      saveNotes(notes_to_keep);
      console.log(chalk.green('Success : Note deleted!'));
   }catch(e){
      console.log(chalk.red('Error : Note Cannot be deleted!'));
   }
}


// Simple method :
// const readNote = function(title){
//    const notes = loadNotes();
//    const note = notes.find(function(note){
//       return (note.title === title);
//    });
//    if(note){
//       console.log(chalk.blue.inverse(note.title));
//       console.log(chalk.white(note.body));
//    }else{
//       console.log(chalk.red('Error : Note not found!'));
//    }
// }
// ES6 Method :
const readNote = (title) => {
   const notes = loadNotes();
   const note = notes.find((note) => (note.title === title));
   if(note){
      console.log(chalk.blue.inverse(note.title));
      console.log(chalk.white(note.body));
   }else{
      console.log(chalk.red('Error : Note not found!'));
   }
}

module.exports = {
   getNotes : getNotes,
   addNote : addNote,
   removeNote : removeNote,
   listNote : listNote,
   readNote : readNote
}