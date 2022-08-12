import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
  }

  zoomCardIndex  (event) {
    gsap.timeline();
    gsap.to(event.currentTarget, {duration: 0.5, transformOrigin: "50% 50%", scale: 1.1 })
    event.currentTarget.style.border = '2px solid #10ea96'
  }

  dezoomCardIndex (event) {
    gsap.to(event.currentTarget, {duration: 0.5, transformOrigin: "50% 50%", scale: 1 })
    event.currentTarget.style.border = '0px solid #10ea96'

  }
}
