import './index.css'

function render(component, id) {
    document.querySelector(id).innerHTML = component
}

export default render