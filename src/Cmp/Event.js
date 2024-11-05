import React from 'react'
import { Grid } from '@mui/system'
import { Link } from 'react-router-dom'

function Event() {
  return (
    <div>
      <Grid container>
        <Grid size={2}>
            <h1>Hrm</h1>
            <Link to='/'><p>DashBoard</p></Link>
            <Link to='/finance'><p>Finance</p></Link>
            <Link to='/product'><p>Products</p></Link>
            <Link to='/report'><p>Report</p></Link>
            <p>Event</p>
        </Grid>
        <Grid size={10}>
        <div className="card-row">
          <h1> Event</h1>

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

export default Event
