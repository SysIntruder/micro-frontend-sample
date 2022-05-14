import { createApp } from 'vue'

import './index.css'

function render(component, id) {
    createApp(component).mount(id)
}

export default render