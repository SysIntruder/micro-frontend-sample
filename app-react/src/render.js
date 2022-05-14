import ReactDOM from 'react-dom/client'

import './index.css'

function render(component, id) {
    ReactDOM.createRoot(
        document.querySelector(id)
    ).render(component)
}

export default render