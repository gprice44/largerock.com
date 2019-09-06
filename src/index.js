import React from 'react'
import ReactDOM from 'react-dom'
import './style/style.scss'

// header and footer imports 
import Header from './components/header'
import Footer from './components/footer' 

// import main app components
import Main from './apps/main'
import Food from './apps/food'
import Exercise from './apps/exercise'
import Resume from './apps/resume'
import NotFound from './apps/notfound'

import { HashRouter, Route, Switch } from 'react-router-dom'

export default class Root extends React.Component{
    render() {
        return (
            <HashRouter>
                <Header
                name = "LargeRock"
                />
                    <div className='container'>
                        <Switch>
                            <Route path='/' exact component={Main}/>
                            <Route path='/food/' component={Food}/>
                            <Route path='/exercise/' component={Exercise}/>
                            <Route path='/resume/' component={Resume}/>
                            <Route path='*' component={NotFound}/>
                        </Switch>
                    </div>
                <Footer/>
            </HashRouter>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'))