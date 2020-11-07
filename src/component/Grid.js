import React from 'react'

export default function Grid() {
    return (
        <div className='project-grid'>
            {Array.from({ length: 31 })
                .map((l, i) => <figure data-day={i + 1} key={i} />)}
        </div>
    )
}
