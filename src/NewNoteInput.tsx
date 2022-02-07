import React, {useState, ChangeEvent} from 'react';

interface NewNoteInputProps {
    addNote(note:string): void;
}

export const NewNoteInput:React.FC<NewNoteInputProps> = ({addNote}) => {
    
    const [note, setNote] = useState("")
    
    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event?.target.value)
    }
    
    const onAddNoteCLick = () => {
        addNote(note)
        setNote("")
    }

    return (
        <>
            <div>
                <input type='text' name='note' placeholder="Note" onChange={updateNote}/>
                <button onClick={onAddNoteCLick}>Add Notes</button>
            </div>
            <hr/>
        </>
    )
}