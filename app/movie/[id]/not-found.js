import React from 'react'
import Link from 'next/link'

const Movie404 = () => {
  return (
    <div style={{
        height:"100%",
        display:'flex',
        alingItems:'center',
        justifyContent:'center',
        flexDirection:'column'

    }}>
        <h1>We couldn&apos;t find the movie you loking for! </h1>
        <Link href='/' style={{textDecoration:'underline',fontSize:20,marginTop:8}}>Go Home</Link>
    </div>
  )
}

export default Movie404