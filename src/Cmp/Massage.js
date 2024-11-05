import React from 'react'
import { Grid } from '@mui/system'
import { Link } from 'react-router-dom'

function Massage() {
  return (
    <div>
      <Grid container>
        <Grid size={2}>
            <h1>Hrm</h1>
            <Link to='/'> <p>DashBoard</p></Link>
            <Link to='/finance'><p>Finance</p></Link>
            <p>Massage</p>
        </Grid>
        <Grid size={10}>
            <h1>Massage</h1>

        </Grid>

      </Grid>
    </div>
  )
}

export default Massage
