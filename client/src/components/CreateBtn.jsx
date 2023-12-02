import { Edit3 } from "react-feather"
import { nanoid } from "nanoid"

const CreateBtn = ({notes, setNotes}) => {
  const handleCreate = () => {
    const id = nanoid();
    const note = ""
    const newItem = {id, note}
    const updatedNotes = [...notes, newItem]
    setNotes(updatedNotes)
  }
  return (
    <button
        className="flex items-center gap-2 text-lg rounded-full text-white font-semibold bg-purple-600 hover:bg-purple-700 transition-all px-4 py-2 mt-5"
        onClick={handleCreate}
    >
        <Edit3/>Create Notes
    </button>
  )
}
export default CreateBtn