import ReactDOM from 'react-dom/client'

import './index.css'

function render(component, element) {
    ReactDOM.createRoot(element).render(component)
}

export default render