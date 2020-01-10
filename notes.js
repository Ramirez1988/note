const fs = require('fs')

let fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.txt'))
    } catch (err) {
        return []
    }
}

let addingNote = (title, body) => {

    let notes = fetchNotes()
            
    let note = {
        title,
        body
    }    
    notes.push(note)
    fs.writeFileSync('notes.txt', JSON.stringify(notes))
}

let removeNote = (title) => {
    let notes = fetchNotes()

    let filteredNotes = notes.filter(el=>el.title !== title)
    fs.writeFileSync('notes.txt', JSON.stringify(filteredNotes))
}

let readNote = (title) => {
    let notes = fetchNotes()
    let filteredNotes = notes.filter(el=>el.title === title)
    console.log(`Title: ${filteredNotes[0].title}`)
    console.log(`Body: ${filteredNotes[0].body}`)
}

let listNote = () => {
    let notes = fetchNotes()
    console.log(notes)

}
module.exports = {
    addingNote,
    removeNote,
    readNote,
    listNote
}