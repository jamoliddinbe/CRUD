import './App.css';
import React, { useState, Fragment } from 'react';
import AddUser from './form/Add';
import EditForm from './form/Edit';
import UserTable from './table/UserTable';

const App = () => {
  // There is data

  const usersData = [
    // {id: 1, name: 'Tania', username: 'tania1234'}
 ]
  const usualForm = { id: null, name: '', username: '' }


  //setting state
  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(usualForm)
  const [editing, setEditing] = useState(false)

  //CRUD operations

  const addUser = user =>{
    user.id = user.length + 1
    setUsers([...users, user])
  }  // adding(CREATE)

  const deleteUser = id => {
   setEditing(false)
   setUsers(users.filter(user => user.id !== id ))
  } // deleting(DELETE)

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user ) ))
  } // updating(UPDATE)

  const editRow = user => {
    setEditing(true)

    setCurrentUser({id: user.id, name: user.name, username: user.username })
  } // editing (EDIT)

  return(
    <div className='container'>
      <h1> CRUD App </h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
            						<Fragment>
                        <h2>Edit user</h2>
                        <EditForm
                          editing={editing}
                          setEditing={setEditing}
                          currentUser={currentUser}
                          updateUser={updateUser}
                        />
                      </Fragment>
          ) : (		
          <Fragment>
            <h2>Add user</h2>
            <AddUser addUser={addUser} />
          </Fragment>)
        }
        </div>
        <div className='flex-large'>
           <h2>Users</h2>
           <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
            </div>
      </div>
    </div>
  )



}

export default App;
