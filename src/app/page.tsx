"use client"

import React, {useState} from "react"
import Task from "@/component/task/task"
import { data } from "autoprefixer"

// const initialState = [
//   {id: 2, title:'html', active: true,}, 
//   {id: 3, title:'csss', active: true,},
//   {id: 5, title:'car', active: false,},
//   {id: 4, title:'soo', active: false,},
//   {id: 1, title:'duck', active: true,},
// ]

const usst = [
      {id: 2, title:'html', active: true,}, 
      {id: 3, title:'csss', active: true,},
      {id: 5, title:'car', active: false,},
      {id: 4, title:'soo', active: false,},
      {id: 1, title:'duck', active: true,},
    ]
export default function Home() {

    const [value, newState] = useState<string>("")
    const [tasks, setTasks] = useState<any>(usst)

    const handleClick  = (id) => {      

      const a =  tasks.find(el => el.id ===  id)
      a.active = !a.active
      setTasks()  
      // setTasks(el => [...el, a]);                 
     }
    
    const statusHandler = (value) => {
      if (value == 'all'){
        setTasks(usst)
      }
      if(value == 'active'){
        setTasks(arr => arr.filter(el => el.active === false ) )  
      }if(value == 'comleted') {
        // setTasks(arr => arr.filter(el => el.active === true ) )
        setTasks(usst.filter(el => el.active === true) )    
      }
    }

    function removeTask (id) {
      setTasks(arr => arr.filter(el => el.id !== id) )
    }

    // function removeActive () {
    //   setTasks(arr => arr.filter(el => el.active ) )
    // }
    
    

    return (
    <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="card card-white">
                <div className="card-body">
                <div className="H1">To DO Lists</div>
                  <div className="add_body">
                    <form action="javascript:void(0);">
                        <input type="text" className="form-control_add-task" placeholder="New Task..." value = {value} onChange = {(e => newState(e.target.value))}/>
                      </form>
                      <button type='button' className="add_button" onClick={()=> {

                        //@ts-ignoreww
                        newState('')
                        setTasks(el => [...el, {title:value, active:false, id:Math.random()}])}
                        
                        }>
                        
                        <div>Add</div>
                      </button>
                  </div>
                  <div className="nav_body">
                        <button value='all' className="nav-but" onClick={() => statusHandler('all')}>All</button>
                        <button value='active' className="nav-but" onClick={() => statusHandler('active')}>Active</button>
                        <button value='completed' className="nav-but" onClick={() => statusHandler('comleted')}>Completed</button>
                  </div>
                    <div className="todo-list">
                        {tasks.map(el => (
                            <Task checked={el?.active} removeTask={removeTask} handleClick={handleClick} id={el.id} title={el.title}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

