import React, {Component} from 'react';
import {connect} from 'react-redux';

import Beam from './Beam';
import MessagePanel from './MessagePanel';
import BoardsSidePanel from './BoardsSidePanel';

class App extends Component {

    render(){

        return (
            <section>
                <Beam user={this.props.user} />
                <MessagePanel message={this.props.message} />
                <section id="contentHolder">
                    <BoardsSidePanel boards={this.props.user.boardsList} />
                    <section id="view">
                        {this.props.children}
                    </section>
                </section>
            </section>
        )
    }

}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(App);