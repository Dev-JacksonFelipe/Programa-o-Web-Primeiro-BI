import { useState } from 'react'
import './App.css'

const initialTasks = [
  { id: 1, text: 'Aprender Hooks' },
  { id: 2, text: 'Criar componentes React' },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [taskText, setTaskText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedTask = taskText.trim()

    if (!trimmedTask) {
      return
    }

    const newTask = {
      id: Date.now(),
      text: trimmedTask,
    }

    setTasks((currentTasks) => [...currentTasks, newTask])
    setTaskText('')
  }

  const handleRemoveTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    )
  }

  return (
    <main className="app-shell">
      <section className="todo-card">
        <div className="todo-header">
          <p className="eyebrow">Atividade 8</p>
          <h1>To-Do List com React</h1>
          <p className="description">
            A lista e o campo de texto sao controlados com <code>useState</code>
            , e a interface eh atualizada de forma declarativa.
          </p>
        </div>

        <form className="todo-form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="task-input">
            Digite uma nova tarefa
          </label>
          <input
            id="task-input"
            type="text"
            placeholder="Digite uma tarefa"
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
          />
          <button type="submit">Adicionar</button>
        </form>

        <div className="list-header">
          <h2>Minhas tarefas</h2>
          <span>{tasks.length} item(ns)</span>
        </div>

        {tasks.length > 0 ? (
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <span>{task.text}</span>
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => handleRemoveTask(task.id)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-state">
            Nenhuma tarefa cadastrada. Adicione a primeira acima.
          </p>
        )}
      </section>
    </main>
  )
}

export default App
