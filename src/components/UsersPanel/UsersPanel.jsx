import React, { useEffect, useState } from 'react'
import { DataGrid, GridDeleteIcon, renderActionsCell } from '@mui/x-data-grid'
import { Users } from '../Data/Users'
import { Button } from '@mui/material'


export const UsersPanel = () => {
  const [data, setData] = useState(Users)

  const deleteHandler = (row) => {
    const deleteConfirmation = confirm(`Do you wannna delete ${row.name} with id "${row.id}"`)
    if (deleteConfirmation) {
      setData(data.filter(user => row.id !== user.id))
      alert('You deleted this item.')
    } else {
      alert('Your item was not deleted')
    }
  }

  const editHandler = (row) => {
    console.log(row)
  }

  const columns = [
    { field:"id", headerName:"ID", width:10},
    { field:"name", headerName:"Name", width:200},
    { field:"username", headerName:"Username", width:150},
    { field: "email", headerName: "Email", width: 250 },
    {
      field: 'delete', headerName: 'Delete', width: 100, sortable: false,
      renderCell: ({ row }) => {
        return <Button onClick={() => deleteHandler(row)} variant="contained" startIcon={<GridDeleteIcon />} size='small'>Delete</Button>;
      },
    },
    {
      field: 'edit', headerName: 'Delete', sortable: false,
      renderCell: ({ row }) => {
        return <Button onClick={() => editHandler(row)} variant="contained" startIcon={<GridDeleteIcon />} size='small'>Edit</Button>
      }
    }
  ]

  const rows = data.map((user) => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email:user.email
  }))
  return (
    <div className='UsersPanel'>
    <DataGrid rows={rows} columns={columns} editMode='row'/>
    </div>
  )
}
