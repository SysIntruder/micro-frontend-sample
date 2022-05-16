import SidebarTemplate from './SidebarTemplate.svelte'

import render from './render'

function Sidebar(element) {
    return render(SidebarTemplate, element)
}

export default Sidebar