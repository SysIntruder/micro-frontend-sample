import React from 'react'

import render from './render'

function Header(element) {
    const component = (
        <div className="react-text">
            React-Header !
        </div>
    )

    render(component, element)
}

export default Header
