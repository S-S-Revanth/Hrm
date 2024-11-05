import React from 'react'
import {Grid} from '@mui/system'
import { Link } from 'react-router-dom'
function Finance() {
  return (
    <div>
      <Grid container>  
        <Grid size={2}>
        <h1>HRM</h1>
         <p> DashBoard</p>
       <Link to='/finance'> <p>Finance</p></Link>  
       <Link to='/products'><p>Products</p></Link> 
       <Link to='/event'><p>Event</p></Link>
        </Grid>
        <Grid size={10}>
        <div className="card-row">
          <h1> DashBoard</h1>
        <div className="card">
          <h2>Total Users</h2>
          <p>15,234</p>
        </div>
        <div className="card">
          <h2>New Orders</h2>
          <p>382</p>
        </div>
        <div className="card">
          <h2>Revenue</h2>
          <p>$120,450</p>
        </div>
        </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Finance