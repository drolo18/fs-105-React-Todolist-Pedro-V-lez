import React, { useState } from "react";



const Home = () => {

	const [newtask, setNewTask] = useState('')
	const [taskList, setTaskList] = useState([])
	
	
	const onChange =(e) => {
		setNewTask(e.target.value)
		
	}
	const onKeyDown = (e) =>{
		if (e.keyCode === 13) {
		return setTaskList([...taskList, newtask])
		}
	}
	

	return (
		<div className="text-center">
		
			<input placeholder="Escribe tu Tarea"  onChange={onChange} onKeyDown={onKeyDown}/>
			
			<div>
				{taskList.map((task, index) => <p key={index}>{task}</p>) }
			</div>
		</div>
	);
};

export default Home;