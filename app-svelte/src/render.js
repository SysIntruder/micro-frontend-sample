import './index.css'

function render(Component, id) {
    const app = new Component({
        target: document.querySelector(id)
    })

    return app
}

export default render