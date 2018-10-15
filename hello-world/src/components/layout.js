import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
        <header style={{ marginBottom: `1.5rem` }}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuZHIASPuh2Q7ETJynBEWvGe00YaipO7Fy6327PpoQFGH6w3p9` }}>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
            </ul>
        </header>    
        {children}
    </div>
)
