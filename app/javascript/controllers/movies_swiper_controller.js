import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["movie","infos","arrow","button"]

  connect() {
  }

  zoomCard(event) {
    gsap.timeline();
    gsap.to(event.currentTarget, {duration: 0.5, transformOrigin: "50% 50%", scale: 1.1 })

    this.infosTargets.forEach((element) => {
      if (event.currentTarget.dataset.movieId === element.dataset.movieId) {
        element.style.height = "65%"
        element.style.padding = "2px 8px"
      }
    })

    this.buttonTargets.forEach((element) => {
      if (event.currentTarget.dataset.movieId === element.dataset.movieId) {
        element.style.display = "block"
        element.style.visibility =  "visible"
        element.style.opacity = "1"
      }
    })

  }

  dezoomCard(event) {
    gsap.to(event.currentTarget, {duration: 0.5, transformOrigin: "50% 50%", scale: 1 })

    this.infosTargets.forEach((element) => {
      element.style.height = "0"
      element.style.padding = "0"
    })

    this.buttonTargets.forEach((element) => {
      if (event.currentTarget.dataset.movieId === element.dataset.movieId) {
        element.classList.add('d-none')
      }
    })
  }

  showArrows() {
    this.arrowTargets.forEach((element) => {
      element.classList.remove("d-none")
    })
  }

  hideArrows(event) {
    this.arrowTargets.forEach((element) => {
      element.classList.add("d-none")
    })
  }
}
