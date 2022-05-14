import React from 'react'

import render from './render'

function Header(id) {
    const component = (
        <div className="react-text">
            React-Header !
        </div>
    )

    render(component, id)
}

export default Header
