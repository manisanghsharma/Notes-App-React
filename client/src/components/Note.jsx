import { useEffect, useState } from "react"
import { Trash2, Edit, Check} from "react-feather"
import CreateBtn from "./CreateBtn";

const Note = ({item, notes, setNotes}) => {
      const [isEditing, setIsEditing] = useState(false);
    const [edit, setEdit] = useState(item.note)

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const handleDelete = () => {
        const updatedItems = notes.filter((note) => (
            note.id!= item.id
        ))

        setNotes(updatedItems)
    }

    const handleEdit = () => {
        const index = item.id - 1;
        const notess = [...notes]
        notess[index].note = edit
        setNotes(notess)
    }

  return (
        
        <>
        
		<div className='max-w-[600px] rounded-lg min-h-[120px] p-3 pb-12 max-h-fit bg-white relative my-6'>
			<textarea 
                className='text-lg outline-none w-full min-h-[80px] max-h-fit resize-none' 
                spellCheck='false'
                readOnly={!isEditing}
                value={edit}
                placeholder="Enter Text..."
                onChange={(e) => setEdit(e.target.value)}
            >
			</textarea>
			<div onClick={() => {
                setIsEditing(!isEditing);
                handleEdit()
            }} className='p-2  rounded-full hover:bg-gray-300 transition-all absolute bottom-3 right-14 cursor-pointer resize-none'>
				{isEditing ? <Check /> : <Edit />}
			</div>
			<div className='p-2 rounded-full hover:bg-gray-300 transition-all absolute bottom-3 right-3 cursor-pointer resize-none'>
				<Trash2 onClick={handleDelete} />
			</div>
		</div>
        </>
	);
}
export default Note