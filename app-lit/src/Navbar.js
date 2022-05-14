import { LitElement, html, css } from 'lit'

import render from './render'

class NavbarTemplate extends LitElement {
    static styles = css`
        .lit-text {
            color: #325CFF;
        }
    `

    render() {
        return html`
            <div class="lit-text">
                Lit-Navbar !
            </div>
        `
    }
}

function Navbar(name) {
    render(NavbarTemplate, name)
}

export default Navbar