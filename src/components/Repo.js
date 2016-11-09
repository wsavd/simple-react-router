import React from 'react';

export default class Repo extends React.Component {
    render() {

        /*var pathPrefix = true;
        var l = window.location;
        console.log(l.pathname);
        console.log(l.search);
        console.log(l.hash);
        console.log(l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 2 * pathPrefix).join('/') + '/?p=/' +
        l.pathname.slice(1).split('/').slice(pathPrefix).join('/').replace(/&/g, '~and~') +
        (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash);*/

        return (
            <div>
                <h2>{this.props.params['userName']}</h2>
                <h2>{this.props.params.repoName}</h2>
            </div>
        )
    }
}
