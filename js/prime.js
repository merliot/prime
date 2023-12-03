import { WebSocketController } from './common.js'

export function run(prefix, ws) {
	const prime = new Prime()
	prime.run(prefix, ws)
}

class Prime extends WebSocketController {

	constructor() {
		super()
		this.view = document.getElementById("view")
	}

	open() {
		super.open()
		document.title = this.state.Child.Model + " - " + this.state.Child.Name
		this.view.data = "/" + this.state.Child.Id + "/"
	}
}
