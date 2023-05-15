
import React from 'react'

interface props {
    styles: string
}

function Divider({ styles }: props) {
    return (
        <div className={styles} />
    )
}

export default Divider