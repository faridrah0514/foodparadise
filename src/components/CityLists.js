import React from 'react'
import CityCard from './CityCard'

function CityLists(props) {
    return (
        <>
            <h1>{props.title}</h1>
            {
                props.showSubtitle === true && props.subtitle !== "" &&
                <h6 className="text-muted">Search result for keyword '{props.subtitle}'</h6>
            }
            <div className="row">
                {
                    (!props.cities) ?
                        (<div className="col">
                            <p>Loading ...</p>
                        </div>
                        ) : (
                            props.cities.map(item => {
                                return (
                                    <CityCard key={item.id} item={item} />
                                )
                            })
                        )
                }
            </div>
        </>
    )
}

export default CityLists