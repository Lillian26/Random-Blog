import React from "react";

export default class User extends React.Component {
    render(){
        return (
            <div className="row my-4 ">
                <img className="col-3" src={this.props.user.picture.large}
                style={{borderRadius: "50%"}} />
                <div className="col-8 my-auto">
                    <div>{this.props.user.name.title} &nbsp;
                    {this.props.user.name.first} &nbsp;
                    {this.props.user.name.last}</div>
                    <div>{this.props.user.email}</div>
                </div>
            </div>
        );
    }
}