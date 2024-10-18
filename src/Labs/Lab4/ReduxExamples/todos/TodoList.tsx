import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
    const { todos } = useSelector((state: any) => state.todosReducer);
    return (
        <div id="wd-todo-list-redux">
            <h2>Todo List</h2>
            <ul className="list-group w-50">
                <TodoForm />
                {todos.map((todo: any) => (
                    <TodoItem id={todo.id} title={todo.title}  />
                ))}
            </ul>
            <hr />
        </div>
    );
}




