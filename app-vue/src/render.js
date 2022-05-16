import { createApp } from 'vue'

import './index.css'

function render(component, element) {
    createApp(component).mount(element)
}

export default render