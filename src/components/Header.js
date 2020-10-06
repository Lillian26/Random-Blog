import React from "react"

function tick(){
    return <h2 style={{fontFamily:'monospace', color:'#1E90FF'}}> {new Date().toLocaleTimeString()}.</h2>
}

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillMount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({date: new Date()});
    }

    render(){
        return <h4 style={{ color:'#d0d0d5'}}> {new Date().toLocaleTimeString()}.</h4>
    }
}

const Header = () => {
    return (
        <header>
            <div className="row text-center">
                <div className="col-6">
                    <h1 style={{color:'rgba(234,72,18,.8)', fontFamily: 'Lobster, monospace'}}>Tech Ideas</h1>
                </div>
                <div className="col-6"><Clock /></div>
            </div>
        </header>
    )
}

setInterval(tick, 1000);

export default Header