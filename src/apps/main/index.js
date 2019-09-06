import React, { Component } from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle } from 'reactstrap'

class Main extends Component {
    render () {
        return(
            <Card>
                <CardHeader className="card">
                <CardTitle><h1>George P</h1></CardTitle>
                <CardSubtitle>Welcome</CardSubtitle>
                </CardHeader>
                
                <CardBody className="stripe card">
                    <CardText className="inside_stripe">
                        <p>Personal website for your's truly.</p>
                        <p>A work in progress</p>
                    </CardText>
                </CardBody>
            </Card>
        )
    }
}

export default Main