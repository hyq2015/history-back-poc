import * as React from 'react';
import {PageFrame} from './PageFrame';

export default class Page3 extends React.Component<{auth: boolean; name: string, history: any}, {}> {
    componentDidMount(): void {
        history.pushState('test', null, '/');
        history.pushState('test1', null, '/page3');
        // history.pushState('test1', null, '#');
        // window.addEventListener('popstate', this.navigate.bind(this), false);
    }
    navigate() {
        this.props.history.push({
            pathname: '/'
        });
    }
    componentWillUnmount(): void {
        console.log('component will remove');
        window.removeEventListener('popstate', this.navigate.bind(this), false);
    }

    render() {
        return (
            <PageFrame {...this.props}>
                <div>
                    <p>this is page3</p>
                </div>
            </PageFrame>
        );
    }
}
