import React from "react";
import { useState } from "react";

export default function TodoForm(props) {
	const [input, setInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addTodo(input);
		setInput("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="todo-form">
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className="todo-input"
					placeholder="Add a todo"></input>
				<button type="submit" className="todo-button">
					Add  Todo
				</button>
			</form>
		</div>
	);
}
