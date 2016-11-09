import React from 'react';
import NavLink from './NavLink';
import { browserHistory } from 'react-router';

export default class Repos extends React.Component {

    /*constructor(props, context) {
       super(props);
       console.log(this.context); //=> not undefined
    }*/

    /*static contextTypes = {
         router: React.PropTypes.object
     };*/

    handleSubmit(event) {
        event.preventDefault()
        const userName = event.target.elements[0].value;
        const repo = event.target.elements[1].value;
        const path = `/repos/${userName}/${repo}`;
        //console.log(path);
        browserHistory.push(path);
        //this.context.router.push(path);
        /*console.log(browserHistory);
        console.log(event);
        console.log(event.target);
        console.log(event.target.elements);*/
    }

    render() {

        return (
            <div>
                <h2>Repos</h2>
                <ul>
                     <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
                     <li><NavLink to="/repos/facebook/react">React</NavLink></li>
                     {/* add this form */}
                     <li>
                       <form onSubmit={this.handleSubmit}>
                         <input type="text" placeholder="userName"/> / {' '}
                         <input type="text" placeholder="repo"/>{' '}
                         <button type="submit">Go</button>
                       </form>
                     </li>
               </ul>
               {this.props.children}
            </div>
        );
    }
}
