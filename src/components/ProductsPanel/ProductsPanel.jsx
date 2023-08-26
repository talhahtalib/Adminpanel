import React, { useState } from 'react'
import { DataGrid, GridDeleteIcon} from '@mui/x-data-grid'
import { Products } from '../Data/Products'
import { Button } from '@mui/material'

export const ProductsPanel = () => {
  
  const [data, setData] = useState(Products)

  const deleteHandler = (row) => {
    const deleteConfirmation = confirm(`Do you wannna delete ${row.title} with id "${row.id}"`)
    if (deleteConfirmation) {
      setData(data.filter(product => product.id !== row.id))
      alert('You deleted this item.')
    } else {
      alert('Your item was not deleted')
    }
  }

  const editHandler = (row) => {

  }
  const columns = [
    { field: "id", headerName: "ID", width: 25 },
    { field: "title", headerName: "Title", width: 200},
    { field: "price", headerName: "Price", width: 75 },
    { field: "description", headerName: "Description", width: 250 },
    { field: "category", headerName: "Category", width: 130 },
    { field: "rating", headerName: "Rating", width: 25},
    { field: "count", headerName: "Count", width: 25 },
    {
      field: 'delete', headerName: 'Delete',width:100, sortable: false,

      renderCell: ({row}) => {
        return <Button onClick={() => deleteHandler(row)} variant="contained" startIcon={<GridDeleteIcon />} size='small'>Delete</Button>;
      },
    },
    {
      field: 'edit', headerName: 'Delete', sortable: false,
      renderCell: ({ row }) => {
        return <Button onClick={() => editHandler(row)} variant="contained" size='small'>Edit</Button>
      }
    }
  ]

  const rows = data.map(product => ({
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    rating: product.rating['rate'],
    count: product.rating['count'],
  }))
  return (
    <div className='ProductsPanel'>
      <DataGrid rows={rows} columns={columns} />
    </div>
  )
}
