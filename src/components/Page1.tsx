import * as React from 'react';
import {PageFrame} from './PageFrame';

export default class Page1 extends React.Component<{auth: boolean; name: string, history: any}, {}> {
    goPage2() {
        this.props.history.push({
            pathname: '/page2'
        });
    }
    render() {
        return (
            <PageFrame {...this.props}>
                <div>
                    <p>this is page1</p>
                    <button onClick={this.goPage2.bind(this)}>go to page 2</button>
                </div>
            </PageFrame>
        );
    }
}
