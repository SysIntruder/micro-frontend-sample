<script>
    import { onMount } from 'svelte'

    import LitNavbar from 'app_lit/Navbar'
    import ReactHeader from 'app_react/Header'
    import VanillaTitle from 'app_vanilla/Title'
    import SvelteSidebar from 'app_svelte/Sidebar'
    import VueFooter from 'app_vue/Footer'

    onMount(() => {
        const mountHeader = document.querySelector('#header-react')
        const mountTitle = document.querySelector('#title-vanilla')
        const mountSidebar = document.querySelector('#sidebar-svelte')
        const mountFooter = document.querySelector('#footer-vue')
    
        LitNavbar('navbar-lit')
        ReactHeader(mountHeader)
        VanillaTitle(mountTitle)
        SvelteSidebar(mountSidebar)
        VueFooter(mountFooter)
    })
</script>

<navbar-lit />
<div id="header-react" />
<div id="title-vanilla" />
<div>
    Svelte-Root !
</div>
<div id="sidebar-svelte" />
<div id="footer-vue" />