import * as React from 'react';
import * as Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// @ts-ignore
const HelloWorld = Loadable({
        loader: () => import('./components/HelloWorld'),
        loading: () => <div>Loading...</div>
    }),
    Page404 = Loadable({
        loader: () => import('./components/404'),
        loading: () => <div>Loading...</div>
    }),
    Page1 = Loadable({
        loader: () => import('./components/Page1'),
        loading: () => <div>Loading...</div>
    }),
    Page2 = Loadable({
        loader: () => import('./components/Page2'),
        loading: () => <div>Loading...</div>
    }),
    Page3 = Loadable({
        loader: () => import('./components/Page3'),
        loading: () => <div>Loading...</div>
    });
class App extends React.Component<{}, {}> {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact render={ (props: any) => <HelloWorld {...props} auth={true}/>} />
                    <Route path='/page1' exact render={ (props: any) => <Page1 {...props} auth={true}/>} />
                    <Route path='/page2' exact render={ (props: any) => <Page2 {...props} auth={true}/>} />
                    <Route path='/page3' exact render={ (props: any) => <Page3 {...props} auth={true}/>} />
                    <Route path='/404' component={Page404}/>
                    <Redirect to='/404' />
                </Switch>
            </Router>
        );
    }
}
export {App};
