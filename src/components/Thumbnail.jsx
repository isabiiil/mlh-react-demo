import React from 'react'

export default function Thumbnail({ image, title }) {
  const styles = {
    container: {
      backgroundImage: `url(${image})`,
      // backgroundColor: 'rgba(0,0,0,0.5)',
      backgroundSize: 'cover',
      width: '40vw',
      height: '40vh',
      padding: '0',
      margin: '1vw',
      borderRadius: '24px',
    },
    filter: {
      backgroundColor: 'rgba(0,0,0,0.4)',
      width: '100%',
      height: '100%',
      // margin: '20px',
      position: 'relative',
      borderRadius: '24px',
    },
    title: {
      color: 'white',
      fontSize: '2em',
      position: 'absolute',
      bottom: '20px',
      left: '20px',
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.filter}>
        <h1 style={styles.title}>{title}</h1>
      </div>
    </div>
  )
}
