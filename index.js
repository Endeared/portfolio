function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('targetMe')) {
                entry.target.classList.add('fadeInClass')
            } else if (entry.target.classList.contains('targetMeHr')) {
                entry.target.classList.add('open')
            } else if (entry.target.classList.contains('nav')) {
                entry.target.classList.remove('nav')
                entry.target.classList.add('navAnim')
            } else if (entry.target.classList.contains('github')) {
                entry.target.classList.remove('github')
                entry.target.classList.add('githubAnim')
            } else if (entry.target.classList.contains('linkedin')) {
                entry.target.classList.remove('linkedin')
                entry.target.classList.add('linkedinAnim')
            } else if (entry.target.classList.contains('html5')) {
                entry.target.classList.remove('html5')
                console.log('found html')
                entry.target.classList.add('html5Anim')
            } else if (entry.target.classList.contains('css3')) {
                entry.target.classList.remove('css3')
                entry.target.classList.add('css3Anim')
            } else if (entry.target.classList.contains('js')) {
                entry.target.classList.remove('js')
                entry.target.classList.add('jsAnim')
            } else if (entry.target.classList.contains('react')) {
                entry.target.classList.remove('react')
                entry.target.classList.add('reactAnim')
            } else if (entry.target.classList.contains('node')) {
                entry.target.classList.remove('node')
                entry.target.classList.add('nodeAnim')
            } else if (entry.target.classList.contains('python')) {
                entry.target.classList.remove('python')
                entry.target.classList.add('pythonAnim')
            } else if (entry.target.classList.contains('cpp')) {
                entry.target.classList.remove('cpp')
                entry.target.classList.add('cppAnim')
            } else if (entry.target.classList.contains('lua')) {
                entry.target.classList.remove('lua')
                entry.target.classList.add('luaAnim')
            }
        } else {
            if (entry.target.classList.contains('fadeInClass')) {
                entry.target.classList.remove('fadeInClass')
            } else if (entry.target.classList.contains('open')) {
                entry.target.classList.remove('open')
            } else if (entry.target.classList.contains('navAnim')) {
                entry.target.classList.remove('navAnim')
                entry.target.classList.add('nav')
            } else if (entry.target.classList.contains('linkedinAnim')) {
                entry.target.classList.remove('linkedinAnim')
                entry.target.classList.add('linkedin')
            } else if (entry.target.classList.contains('githubAnim')) {
                entry.target.classList.remove('githubAnim')
                entry.target.classList.add('github')
            } else if (entry.target.classList.contains('html5Anim')) {
                entry.target.classList.remove('html5Anim')
                entry.target.classList.add('html5')
            } else if (entry.target.classList.contains('css3Anim')) {
                entry.target.classList.remove('css3Anim')
                entry.target.classList.add('css3')
            } else if (entry.target.classList.contains('jsAnim')) {
                entry.target.classList.remove('jsAnim')
                entry.target.classList.add('js')
            } else if (entry.target.classList.contains('reactAnim')) {
                entry.target.classList.remove('reactAnim')
                entry.target.classList.add('react')
            } else if (entry.target.classList.contains('nodeAnim')) {
                entry.target.classList.remove('nodeAnim')
                entry.target.classList.add('node')
            } else if (entry.target.classList.contains('pythonAnim')) {
                entry.target.classList.remove('pythonAnim')
                entry.target.classList.add('python')
            } else if (entry.target.classList.contains('cppAnim')) {
                entry.target.classList.remove('cppAnim')
                entry.target.classList.add('cpp')
            } else if (entry.target.classList.contains('luaAnim')) {
                entry.target.classList.remove('luaAnim')
                entry.target.classList.add('lua')
            }
        }
    })
}

function handleIntersectHr(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('open')
        } else {
            entry.target.classList.remove('open')
        }
    })
}

let observer = new IntersectionObserver(handleIntersect);
let targets = '.targetMe'
let targetsHr = '.targetMeHr'
let targetNav = '.nav'
let github = document.getElementById('github')
let linkedin = document.getElementById('linkedin')
let html5 = document.getElementById('html5')
let css3 = document.getElementById('css3')
let js = document.getElementById('js')
let react = document.getElementById('react')
let node = document.getElementById('node')
let python = document.getElementById('python')
let cpp = document.getElementById('cpp')
let lua = document.getElementById('lua')
document.querySelectorAll(targets).forEach((target) => {
    if (target) {
        observer.observe(target)
    }
})
document.querySelectorAll(targetsHr).forEach((targetHr) => {
    if (targetHr) {
        observer.observe(targetHr)
    }
})
document.querySelectorAll(targetNav).forEach((nav) => {
    if (nav) {
        observer.observe(nav)
    }
})
observer.observe(github)
observer.observe(linkedin)
observer.observe(html5)
observer.observe(css3)
observer.observe(js)
observer.observe(react)
observer.observe(node)
observer.observe(python)
observer.observe(cpp)
observer.observe(lua)
// let projTitle = document.getElementById('projTitle')
// observer = new IntersectionObserver(handleIntersect);
// observer.observe(projTitle)