import { useState, useEffect } from "react";
import CreateBtn from "./components/CreateBtn";
import Note from "./components/Note";

function App() {
	const [notes, setNotes] = useState(
		JSON.parse(localStorage.getItem("notes")) || []
	);
	
	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	return (
		<>
			<div className='px-32 pt-16 max-md:px-7'>
				<h1 className='flex items-center gap-2 text-5xl font-semibold text-white'>
					<img src='assets/notes.png' className='w-20' />
					Notes
				</h1>
				<CreateBtn notes={notes} setNotes={setNotes} />
				{notes.length ? (
					notes.map((item) => (
						<Note item={item} key={item.id} notes={notes} setNotes={setNotes} />
					))
				) : (
					<p className='text-white text-2xl font-medium mt-10'>
						No notes to display!
					</p>
				)}
			</div>
		</>
	);
}

export default App;
