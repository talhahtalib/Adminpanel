import React, { Fragment } from 'react'
import { LeftBarView } from './LeftBarView.jsx'
import { AdminUsers } from '../Data/AdminUsers.jsx'

export const LeftBar = () => {
  const links = [
    { link: "/UsersPanel", heading: "Users Panel" }
    ,{ link: "/ProductsPanel", heading: "Products Panel" }
  ]

  const loginHandler = () => {
   let email = prompt('Enter email!')
   let password = prompt('Enter password')

   AdminUsers.find(email,password)
  }
  return (
    <Fragment>
      <div id="sidebar">
        <h1>Dashboard</h1>
        {/* <button onClick={loginHandler}>Login</button> */}
        {/* <p>{ localStorage.getItem('user')}</p> */}
        <nav>
          <ul>
            {links.map(link => <LeftBarView link={link.link} heading={link.heading} />)}
          </ul>
        </nav>
      </div>
    </Fragment>
  )
}
