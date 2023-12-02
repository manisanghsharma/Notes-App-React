import { useEffect, useState, useRef } from "react"
import { Trash2, Edit, Check} from "react-feather"
import TextareaAutosize from 'react-textarea-autosize'

const Note = ({item, notes, setNotes}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [edit, setEdit] = useState(item.note)
    const textRef = useRef();

    const handleDelete = (id) => {
        const updatedItems = notes.filter((note) => (
            note.id!= id
        ))
        setNotes(updatedItems)
    }

    const handleEdit = (id) => {
        const index = id - 1;
        const notess = [...notes]
        notess[index].note = edit
        setNotes(notess)
    }

  return (
		<div className='max-w-[600px] rounded-lg min-h-[120px] p-3 pb-12 max-h-fit bg-white relative my-6'>
			<TextareaAutosize
				ref={textRef}
				className='text-lg overflow-hidden outline-none w-full min-h-[80px] resize-none'
				spellCheck='false'
				readOnly={!isEditing}
				value={edit}
				placeholder='Enter Text...'
				onFocus={(e) =>
					e.currentTarget.setSelectionRange(
						e.currentTarget.value.length,
						e.currentTarget.value.length
					)
				}
				onChange={(e) => setEdit(e.target.value)}
			/>

			<div
				onClick={() => {
					setIsEditing(!isEditing);
					handleEdit(item.id);
				}}
				className='p-2  rounded-full hover:bg-gray-300 transition-all absolute bottom-3 right-14 cursor-pointer resize-none'
			>
				{isEditing ? (
					<Check />
				) : (
					<Edit onClick={() => textRef.current.focus()} />
				)}
			</div>

			<div className='p-2 rounded-full hover:bg-gray-300 transition-all absolute bottom-3 right-3 cursor-pointer resize-none'>
				<Trash2 onClick={() => handleDelete(item.id)} />
			</div>
		</div>
	);
}
export default Note