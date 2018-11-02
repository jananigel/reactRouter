# React Router 4: react-router-dom

## Use Router
1. install react-router-dom: `npm install --save-dev react-router-dom`
2. in component, we will need import `Route` and `Link` from `react-router-dom`
    > import { Route, Link } from 'react-router-dom';
3. use `<Link to="/pathName">` to instead of `<a href="/pathName">`
4. the `{this.props.children}` will send the path which component match the name to thi.props(ex: if path is /about and then it will find the About component). Actually, I don't know it is exactly or not that I explain and understand.
5. use the tag `<Route>` to render the component.

## HashRouter

1. import { HashRouter } from 'react-router-dom'
2. use <HashRouter> to resolve the problem of 'Can not Get ...' when browser refreshed.
