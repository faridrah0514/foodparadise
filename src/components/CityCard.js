import React from 'react'

function CityCard(props) {
    return (
        <div className="col-4">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        {props.item.name}
                    </h4>
                    <p className="card-text">{props.item.country_name}</p>
                    <p className="card-text"><a href="/#">See restaurants in {props.item.name}</a></p>
                </div>
            </div>
        </div>
    )
}

export default CityCard