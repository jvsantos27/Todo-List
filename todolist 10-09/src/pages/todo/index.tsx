import React, { useContext, useState, useEffect } from 'react'
import TodoList from '../../components/todolist'
import CriarTodo from '../../components/criarTodo'
import { TodoProps } from '../../@types/todo'
import { useTodo } from '../../hook/useTodo'

enum TodoPages {
  'criarTodo' = 'criarTodo',
  'listarTodo' = 'listarTodo'
}

const Todo = () => {
    const todoService = useTodo()
    const [getTodos, setTodos] = useState<TodoProps[]>([])
    
    const [getPaginaAtual, setPaginaAtual] = useState<TodoPages>(TodoPages.listarTodo);

    useEffect(() => {
      console.log({getTodos, todos: todoService.get()})
    }, [getTodos])

    const renderizarPagina = () => {
      switch (getPaginaAtual) {
        case TodoPages.criarTodo:
          return (
            <CriarTodo criarTodo={(novoTodo: TodoProps) => {
              const id: number  = getTodos.length + 1
              novoTodo.id = id
              const tmpTodos: TodoProps[] = [...getTodos, novoTodo]
              setTodos(tmpTodos)
              todoService.set(tmpTodos)
              // setPaginaAtual(TodoPages.listarTodo)
            }} />
          )
        case TodoPages.listarTodo:
          return (
            <TodoList
              getTodos={getTodos} 
              setTodos={(novaLista: TodoProps[]) => setTodos(novaLista)} />
          )
        default:
          return (
            <TodoList
              getTodos={getTodos} 
              setTodos={(novaLista: TodoProps[]) => setTodos(novaLista)} />
          )
      }
    }

    const renderizarBotoes = () => (
      <div>
        <button onClick={() => setPaginaAtual(TodoPages.listarTodo)}>Lista de tarefas</button>
        <button onClick={() => setPaginaAtual(TodoPages.criarTodo)}>Criar tarefa</button>
      </div>
    )

    return (
      <div style={{ textAlign: 'center' }}>
        {renderizarBotoes()}
        {renderizarPagina()}
      </div>
    );
}

export default Todo;

