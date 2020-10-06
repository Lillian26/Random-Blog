import React from "react";
import Header from "./Header";
import User from "./User";
import PostsList from "./PostsList";

export default class Home extends React.Component {
    state = {
        loading: true,
        person: null,
        posts: null
    }

    async componentDidMount(){
        const userUrl = "https://api.randomuser.me/";
        const response = await fetch(userUrl);
        const data = await response.json();
        this.setState({person: data.results[0], loading: false});

        const postsUrl = "https://jsonplaceholder.typicode.com/posts";
        const response2 = await fetch(postsUrl);
        const data2 = await response2.json();
        this.setState({posts: data2.slice(0, 4)});
        
    }

    render(){
        return (
            <div style={{borderWidth:'1px', borderStyle:'dotted solid', borderColor: '#003366'
            , padding: '20px'}}>
                {this.state.loading || !this.state.person ? (
                <div>loading...</div>
                ) : (
                <div >
                    <Header />
                    <User user={this.state.person}/>
                    <h4>Posts uploaded sofar:</h4>
                </div>
                )}

                {this.state.posts ? (
                    <PostsList posts={this.state.posts}/>
                ) : (
                    <div>No posts made</div>
                )}
            </div>
        );
    }
}