import React, { Component } from 'react'

export default class PropClass extends Component
{
    render()
    {
        return(
            <div>
                <h1>The OG of {this.props.College}</h1>
            </div>
        )
    }
}