import React, { useState } from "react";
import { TaskList } from "./TaskList";


const Home = () => {

	const [newtask, setNewTask] = useState('')
	const [taskList, setTaskList] = useState([])


	const onChange = (e) => {
		setNewTask(e.target.value)

	}
	const onKeyDown = (e) => {
		if (e.keyCode === 13 && newtask.trim() !== "") {
			setTaskList([...taskList, newtask])
			setNewTask("")
		}
	}
	const removeTask = (index) => {
		const updatedTasks = [
			...taskList.slice(0, index),
			...taskList.slice(index + 1),
		]
		setTaskList(updatedTasks)
	}

	return (
		<div className="text-center">
			<h1>Todo List</h1>
			<br />
			<div >
				<input className="text-center border w-50 " placeholder="Escribe tu Tarea" onChange={onChange} onKeyDown={onKeyDown} value={newtask} />
			</div>
			<div className="d-flex justify-content-center h-50">
				<TaskList tasks={taskList} removeTask={removeTask} />
			</div>
			<div className="d-flex justify-content-center ">
				<p className="w-50 text-start last-page" >{taskList.length} item left</p>
			</div>
		</div>
	);
};

export default Home;