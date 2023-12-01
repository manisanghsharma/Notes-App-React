import { useState } from 'react'
import CreateBtn from './components/CreateBtn'
import Note from './components/Note';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])

  return (
		<>
			<div className='px-32 pt-16 max-md:px-7'>
				<h1 className='flex items-center gap-2 text-5xl font-semibold text-white'>
					<img src='assets/notes.png' className='w-20'/>
					Notes
				</h1>
			<CreateBtn notes={notes} setNotes={setNotes}/>
      {notes.map(item => (
        <Note item={item} key={item.id} notes={notes} setNotes={setNotes}/>
      ))}
			</div>
		</>
	);
}

export default App
