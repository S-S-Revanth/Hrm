import React from 'react'
import { Grid } from '@mui/system'
import { Link } from 'react-router-dom'
function Products() {
  return (
    <div>
      <Grid container>
        <Grid size={2}>
          <h1>HRM</h1>
        <Link to='/'><p>DashBoard</p></Link>
        <Link to='/finance'><p>Finance</p></Link>
        <p>Products</p>
        </Grid>
        <Grid size={10}>
        <h1>Products</h1>
        </Grid>
      </Grid>
    </div>
  )
}

export default Products