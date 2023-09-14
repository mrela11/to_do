import { useState } from "react"

export default function Task ({title, id, removeTask, handleClick ,checked}:any) {

    return (
        <div className="todo-item">
                <div className="checker" ><span className=""><input type="checkbox" checked={checked} onClick={() => handleClick(id)}/></span></div>
            <span className="todo_text">{title}</span>
            <div className="body_task">
                <button className="nav_del" onClick={() => removeTask(id) }>delete</button>
                <a href="javascript:void(0);" className="float-right remove-todo-item"><i className="icon-close"></i></a>
            </div>
        </div>
        )
}