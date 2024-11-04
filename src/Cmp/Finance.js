import React from 'react'
import {Grid} from '@mui/system'
import { Link } from 'react-router-dom'
function Finance() {
  return (
    <div>
      <Grid container>  
        <Grid size={2}>
        <h1>HRM</h1>
        <Link to='/'> <p> DashBoard</p></Link> 
          <p>Finance</p>
        </Grid>
        <Grid size={10}>
        <div className="card-row">
          <h1> Finance</h1>

        <div className="card">
          <h2>Total Users</h2>
          <p>15,234</p>
        </div>
        <div className="card">
          <h2>New Orders</h2>
          <p>382</p>
        </div>
        <div className="card">
          <h2>money</h2>
          <p>$120,450</p>
        </div>
        </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Finance