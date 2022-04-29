import { useState } from "react"
import { Todosinput } from "./Todosinput"
import { Todoitem } from "./Todoitem"
import { nanoid } from "nanoid"

function Todo() {
    const [todo, setTodosList] = useState([]);

    const getdata = (todo) => {
        const payload = {
            title: todo,
            status: false,
            id: nanoid(4),
        }
        setTodosList([...todo, payload])
        console.log(todo)
    }
    const handlestatus = (id) => {
        setTodosList(todo.map((e) => (e.id === id ? { ...e, status: !e.status } : e)))
    }
    const deleteitem = (id) => {
        const del = todo.filter(todo => id !== todo.id)
        setTodosList(del)
    }
    return (
        <div>
            {todo.map((e) => (
                <Todoitem deleteitem={deleteitem} handlestatus={handlestatus} todo={e}></Todoitem>
            ))}
            <Todosinput getdata={getdata} />


        </div>

    );
}
export { Todo }