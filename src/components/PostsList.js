import React from "react";
import PostItem from "./PostItem";

export default class PostsList extends React.Component{
    render(){
        return (
            <div className="list-group">
                {this.props.posts.map( post =>(
                    <PostItem key={post.id} post={post}/>
                ))}
            </div>
        );
    }
}