import React, { Component } from 'react'

class Test extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return (
            <div className="text-center">
                <h1>dodol</h1>
                {
                    (5 > 2 && 7 < 8) ?

                    ( <><h1>hayoloh</h1>
                        <h2>bisa aja</h2> </> ) :
                    ( <h1>iya deh</h1> )
                }
            </div>
        )
    }
}

export default Test