import * as React from 'react';

export default class Page2 extends React.Component<{auth: boolean; name: string, history: any}, {}> {
    goPage3() {
        this.props.history.push({
            pathname: '/page3'
        });
    }
    render() {
        return (
            <div>
                <p>this is page2</p>
                <button  onClick={this.goPage3.bind(this)}>go to page 3</button>
            </div>
        );
    }
}
