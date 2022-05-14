import SidebarTemplate from './SidebarTemplate.svelte'

import render from './render'

function Sidebar(id) {
    return render(SidebarTemplate, id)
}

export default Sidebar