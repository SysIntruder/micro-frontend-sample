import { LitElement, html, css } from 'lit'

export class App extends LitElement {
    static styles = css`
        div {
            font-family: Arial, Helvetica, sans-serif;
        }
    `

    render() {
        return html`
            <div>
                Lit-App !
            </div>
        `
    }
}
customElements.define('app-lit', App)