import './index.css'

function render(Component, element) {
    const app = new Component({
        target: element
    })

    return app
}

export default render