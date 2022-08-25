import React, {useReducer} from 'react'

const initial = [
  {
    id: 1,
    title: 'Todo 1',
    complete: false
   
  },
  {
    id: 2,
    title: 'Todo 2',
    complete: false,
  }
]

//! ACTION --> TYPE, ID
//! por ejemplo, que se modifique el segundo TODO
//! ACTION = { type: 'COMPLETE', id:2 }

const reducer = (state,action) => {

  switch( action.type ){
    case 'SWITCH':
      return state.map( (todo) => {

        if(todo.id === action.id){

          console.log({...todo,complete:!todo.complete })
          return {...todo,complete:!todo.complete } //! 1 dev, 2 . AGREGO O MODIFICO
        }else{
          return todo
        }


      } )

    default: 
      return state
  }

}




function UseReducer() {

  const [todos, dispatch] = useReducer(reducer, initial)
  const completeAction = (todo) => {
    dispatch( { type: "SWITCH", id: todo.id } )
  }
   

  /*
    (
      <></>
    ) 

    {
      return <></>
    }
  
  */
  return (
    <>
      { todos.map((todo) => (


        <div key={ todo.id }>
          <label>
            <input 
              type="checkbox"
              checked={todo.complete}
              onChange={() => completeAction(todo) }
            />
            <h2>{todo.title}</h2>
          </label>
        </div>
      ))

      }
    </>
  )
}

export default UseReducer