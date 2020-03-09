import React, { Component } from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import Terminal from 'terminal-in-react';

class Main extends Component {
    showMsg = () => 'Hello World'
    render () {
        return(
            <Card className="card">
                <CardHeader>
                <CardTitle><h1>custom</h1></CardTitle>
                </CardHeader>
                <CardBody className="stripe">
                <Terminal
                    color='green'
                    backgroundColor='black'
                    barColor='black'
                    style={{ fontWeight: "bold", fontSize: "1em" }}
                    commands={{
                        'resume': () => window.open('http://localhost:3000/#/resume', '_blank'),
                        showmsg: this.showMsg,
                        popup: () => alert('Terminal in React')
                    }}
                    descriptions={{
                        'open-google': 'opens google.com',
                        showmsg: 'shows a message',
                        alert: 'alert', popup: 'alert'
                    }}
                    msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
                />
                </CardBody>
            </Card>
        )
    }
}

export default Main