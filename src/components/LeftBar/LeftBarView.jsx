import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const LeftBarView = (props) => {
  return (
    <Fragment>
      <li>
        <Link to={props.link}>{props.heading}</Link>
      </li>
    </Fragment>
  );
}
