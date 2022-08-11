import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
  }

  zoomCardIndex  (event) {
    gsap.timeline();
    gsap.to(event.currentTarget, {duration: 0.5, transformOrigin: "50% 50%", scale: 1.1 })
  }

  dezoomCardIndex (event) {
    gsap.to(event.currentTarget, {duration: 0.5, transformOrigin: "50% 50%", scale: 1 })
  }
}
