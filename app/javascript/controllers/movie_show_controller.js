import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { lists: Array, like: Number  }

  connect() {
    console.log(this.listsValue)
  }

  toLikeFull (event) {
    event.target.classList.remove('fa-regular')
    event.target.classList.add('fa-solid')
  }

  toLikeEmpty (event) {
    if (this.likeValue === 0) {
      event.target.classList.remove('fa-solid')
      event.target.classList.add('fa-regular')
    }
  }
}
