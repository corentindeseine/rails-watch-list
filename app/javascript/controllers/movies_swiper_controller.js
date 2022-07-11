import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["movie","infos","button","arrow1","arrow2","arrow3","arrow4"]

  connect() {
  }

  zoomLike(event) {
    gsap.timeline();
    gsap.to(event.currentTarget, {duration: 0.5, transformOrigin: "50% 50%", scale: 1.05 })
  }

  dezoomLike(event) {
    gsap.to(event.currentTarget, {duration: 0.5, transformOrigin: "50% 50%", scale: 1 })
  }


  zoomCard(event) {
    console.log(event.currentTarget)

    gsap.timeline();
    gsap.to(event.currentTarget, {duration: 0.5, transformOrigin: "50% 50%", scale: 1.1 })

    this.infosTargets.forEach((element) => {
      if (event.currentTarget.dataset.movieId === element.dataset.movieId) {
        element.style.height = "83%"
        element.style.padding = "4px 8px"
      }
    })

    this.buttonTargets.forEach((element) => {
      if (event.currentTarget.dataset.movieId === element.dataset.movieId) {
        element.style.display = "block"
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
        element.style.display = "none"
      }
    })
  }

  showArrowsLike() {
    this.arrow1Targets.forEach((e) => {
      e.classList.remove('d-none')
    })
  }

  hideArrowsLike() {
    this.arrow1Targets.forEach((e) => {
      e.classList.add('d-none')
    })

  }


  showArrowsNow() {
    this.arrow2Targets.forEach((e) => {
      e.classList.remove('d-none')
    })
  }

  hideArrowsNow() {
    this.arrow2Targets.forEach((e) => {
      e.classList.add('d-none')
    })

  }

  showArrowsRated() {
    this.arrow3Targets.forEach((e) => {
      e.classList.remove('d-none')
    })
  }

  hideArrowsRated() {
    this.arrow3Targets.forEach((e) => {
      e.classList.add('d-none')
    })

  }

  showArrowsPopular() {
    this.arrow4Targets.forEach((e) => {
      e.classList.remove('d-none')
    })
  }

  hideArrowsPopular() {
    this.arrow4Targets.forEach((e) => {
      e.classList.add('d-none')
    })

  }
}
