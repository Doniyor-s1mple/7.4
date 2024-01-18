import React from 'react'
import { Link, Switch, Route } from 'react-router-dom/cjs/react-router-dom'
import Xodimlar from './Pages/Xodimlar/Xodimlar'
import Lavozim from './Pages/Lavozimlar/Lavozim'
import Levels from './Pages/Levels/Levels'

const App = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-6 offset-3">
                    <Link to='/xodimlar' className='btn btn-outline-light px-5'>Xodimlar</Link>
                    <Link to='/lavozim' className='btn btn-outline-light mx-2 px-5'>Lavozim</Link>
                    <Link to='/levels' className='btn btn-outline-light px-5'>Levels</Link>
                </div>
            </div>
            <hr />
            <div className="row my-4">
                <div className="col-12">
                    <Switch>
                        <Route path='/xodimlar' component={Xodimlar} />
                        <Route path='/lavozim' component={Lavozim} />
                        <Route path='/levels' component={Levels} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default App