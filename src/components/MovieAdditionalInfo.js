import React from 'react'

export default function MovieAdditonalInfo({ movie }) {
    const { vote_average, release_date, original_language, vote_count } = movie
    return (
        <div className="card p-30 mt-30 additional-info-card">
            <div className="item">
                <p><span>Vote average:</span> { vote_average }</p>
            </div>
            <div className="item">
                <p><span>Release date:</span> { release_date }</p>
            </div>
            <div className="item">
                <p><span>Original language:</span> { original_language }</p>
            </div>
            <div className="item">
                <p><span>Vote count:</span> { vote_count }</p>
            </div>
        </div>
    )
}