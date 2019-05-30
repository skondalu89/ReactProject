import React,{Component} from 'react';
import User from './User'

class Users extends Component
{
    render()
    {
        return (<div>
            <h1>{this.props.title}</h1>
    <User >kondalu</User>
    <User age="25">Bhuvaneswari</User>
    <User age ="1.5">Yeshu</User>
            
            </div>)
    }
}
export default Users;