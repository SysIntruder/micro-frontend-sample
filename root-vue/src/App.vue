<template>
    <div id="header-react" />
    <navbar-lit></navbar-lit>
    <div id="title-vanilla" />
    <div>
        Vue-Root !
    </div>
    <div id="sidebar-svelte" />
    <div id="footer-vue" />
</template>

<script>
import ReactHeader from 'app_react/Header'
import SvelteSidebar from 'app_svelte/Sidebar'
import VueFooter from 'app_vue/Footer'
import LitNavbar from 'app_lit/Navbar'
import VanillaTitle from 'app_vanilla/Title'

export default {
    mounted () {
        ReactHeader('#header-react')
        SvelteSidebar('#sidebar-svelte')
        VueFooter('#footer-vue')
        LitNavbar('navbar-lit')
        VanillaTitle('#title-vanilla')
    }
}
</script>