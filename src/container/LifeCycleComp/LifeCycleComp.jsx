import React, {Component} from 'react';
import './LifeCycleComp.scss';


class LifeCycleComp extends Component{
    constructor (props) {
        super(props);
        this.state = {
            count: 1
        }
    }

    static getDerivedStateFromProps(state, props){
        return null;
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                count:3
            })
        },3000)
    }

    shouldComponentUpdate(){
        return true;
    }

    render(){
        return(
            <button className="btn">Life Cycle Component {this.state.count}</button>
        )
    }
}

export default LifeCycleComp;