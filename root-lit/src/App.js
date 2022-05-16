import { LitElement, adoptStyles, unsafeCSS, html, css } from 'lit'

import LitNavbar from 'app_lit/Navbar'
import ReactHeader from 'app_react/Header'
import VanillaTitle from 'app_vanilla/Title'
import SvelteSidebar from 'app_svelte/Sidebar'
import VueFooter from 'app_vue/Footer'

export class App extends LitElement {
    static styles = css`
        div {
            font-family: Arial, Helvetica, sans-serif;
        }
    `

    render() {
        return html`
            <navbar-lit></navbar-lit>
            <div id="header-react"></div>
            <div id="title-vanilla"></div>
            <div>
                Lit-Root !
            </div>
            <div id="sidebar-svelte"></div>
            <div id="footer-vue"></div>
        `
    }

    firstUpdated() {
        const mountHeader = this.renderRoot.querySelector('#header-react')
        const mountTitle = this.renderRoot.querySelector('#title-vanilla')
        const mountSidebar = this.renderRoot.querySelector('#sidebar-svelte')
        const mountFooter = this.renderRoot.querySelector('#footer-vue')
    
        LitNavbar('navbar-lit')
        ReactHeader(mountHeader)
        VanillaTitle(mountTitle)
        SvelteSidebar(mountSidebar)
        VueFooter(mountFooter)

        const styleList = []
        document.querySelectorAll('style').forEach(e => {
            styleList.push(css`${unsafeCSS(e.childNodes[0].nodeValue)}`)
        })

        adoptStyles(this.renderRoot, styleList)

    }
}
customElements.define('root-lit', App)