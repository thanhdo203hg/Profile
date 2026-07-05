/*
=======================================
        PROJECT THANH
=======================================
*/

/* ============================= */
/* Load Data */
/* ============================= */

let profileData = {}

/* ============================= */
/* Fetch JSON */
/* ============================= */

async function loadData(){

    try{

        const response =
        await fetch("data.json")

        profileData =
        await response.json()

        applyData()

    }

    catch(error){

        console.error(
            "Failed to load data.json",
            error
        )

    }

}

loadData()

/* ============================= */
/* Apply Data */
/* ============================= */

function applyData(){

    /* Title */

    document.title =
    profileData.name || "Thanh"

    /* Name */

    document.getElementById(
        "profile-name"
    ).textContent =
    profileData.name

    /* Bio */

    document.getElementById(
        "profile-bio"
    ).textContent =
    profileData.bio

    /* Footer */

    document.getElementById(
        "footer-line1"
    ).textContent =
    profileData.footer1

    document.getElementById(
        "footer-line2"
    ).textContent =
    profileData.footer2

    /* Greeting */

    updateGreeting()

    /* Social */

    setSocial(
        "instagram",
        profileData.instagram
    )

    setSocial(
        "facebook",
        profileData.facebook
    )

    setSocial(
        "tiktok",
        profileData.tiktok
    )

    setSocial(
        "locket",
        profileData.locket
    )

    setSocial(
        "discord",
        profileData.discord
    )

    setSocial(
        "github",
        profileData.github
    )

    /* Status */

    updateSmartStatus()

}

/* ============================= */
/* Social */
/* ============================= */

function setSocial(id, link){

    const element =
    document.getElementById(id)

    if(link){

        element.href = link

    }

    else{

        element.style.display =
        "none"

    }

}
/* ============================= */
/* Greeting */
/* ============================= */

function updateGreeting(){

    const hour =
    new Date().getHours()

    const greeting =
    document.getElementById(
        "greeting"
    )

    if(hour >= 5 && hour < 12){

        greeting.textContent =
        "Good Morning ☀"

    }

    else if(hour >= 12 && hour < 18){

        greeting.textContent =
        "Good Afternoon 🌤"

    }

    else{

        greeting.textContent =
        "Good Evening 🌙"

    }

}

/* ============================= */
/* Local Time */
/* ============================= */

function updateClock(){

    const now =
    new Date()

    let hours =
    now.getHours()

    let minutes =
    now.getMinutes()

    hours =
    String(hours).padStart(2,"0")

    minutes =
    String(minutes).padStart(2,"0")

    document.getElementById(
        "time"
    ).textContent =
    `${hours}:${minutes}`

}

updateClock()

setInterval(
    updateClock,
    1000
)

/* ============================= */
/* Dynamic Theme */
/* ============================= */

function updateTheme(){

    const hour =
    new Date().getHours()

    const body =
    document.body

    const icon =
    document.getElementById(
        "time-icon"
    )

    body.classList.remove(
        "morning",
        "afternoon",
        "evening",
        "night"
    )

    /* Morning */

    if(hour >= 5 && hour < 12){

        body.classList.add(
            "morning"
        )

        icon.textContent =
        "☀"

    }

    /* Afternoon */

    else if(hour >= 12 && hour < 18){

        body.classList.add(
            "afternoon"
        )

        icon.textContent =
        "🌤"

    }

    /* Evening */

    else if(hour >= 18 && hour < 22){

        body.classList.add(
            "evening"
        )

        icon.textContent =
        "🌆"

    }

    /* Night */

    else{

        body.classList.add(
            "night"
        )

        icon.textContent =
        "🌙"

    }

}

updateTheme()

setInterval(
    updateTheme,
    60000
)

/* ============================= */
/* Smart Status */
/* ============================= */

function updateSmartStatus(){

    if(!profileData.status) return

    const hour =
    new Date().getHours()

    const statusText =
    document.getElementById(
        "status-text"
    )

    const statusSwitch =
    document.getElementById(
        "status-switch"
    )

    let currentStatus

    /* Morning */

    if(hour >= 5 && hour < 12){

        currentStatus =
        profileData.status.morning

        statusSwitch.classList.add(
            "active"
        )

    }

    /* Afternoon */

    else if(hour >= 12 && hour < 18){

        currentStatus =
        profileData.status.afternoon

        statusSwitch.classList.add(
            "active"
        )

    }

    /* Evening */

    else if(hour >= 18 && hour < 22){

        currentStatus =
        profileData.status.evening

        statusSwitch.classList.add(
            "active"
        )

    }

    /* Night */

    else{

        currentStatus =
        profileData.status.night

        statusSwitch.classList.remove(
            "active"
        )

    }

    statusText.textContent =
    `${currentStatus.icon} ${currentStatus.text}`

}

setInterval(
    updateSmartStatus,
    60000
)
/* ============================= */
/* Loading Screen */
/* ============================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            document
            .getElementById(
                "loading-screen"
            )
            .classList.add(
                "hide"
            )

        },1200)

    }
)

/* ============================= */
/* Music */
/* ============================= */

const music =
document.getElementById(
    "background-music"
)

const musicButton =
document.getElementById(
    "music-button"
)

let musicPlaying = false

musicButton.addEventListener(
    "click",
    () => {

        if(!musicPlaying){

            music.play()

            musicPlaying = true

            musicButton.classList.add(
                "active"
            )

        }

        else{

            music.pause()

            musicPlaying = false

            musicButton.classList.remove(
                "active"
            )

        }

    }
)

/* ============================= */
/* Back To Top */
/* ============================= */

const backToTop =
document.getElementById(
    "back-to-top"
)

window.addEventListener(
    "scroll",
    () => {

        if(window.scrollY > 200){

            backToTop.classList.add(
                "show"
            )

        }

        else{

            backToTop.classList.remove(
                "show"
            )

        }

    }
)

backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        })

    }
)

/* ============================= */
/* Easter Egg */
/* ============================= */

let tapCount = 0

const profileName =
document.getElementById(
    "profile-name"
)

const popup =
document.getElementById(
    "secret-popup"
)

const popupMessage =
document.getElementById(
    "secret-message"
)

const popupClose =
document.getElementById(
    "secret-close"
)

profileName.addEventListener(
    "click",
    () => {

        tapCount++

        if(tapCount >= 5){

            popup.classList.add(
                "show"
            )

            popupMessage.textContent =
            profileData.secretMessage ||
            "Thank you for being here."

            tapCount = 0
        }

    }
)

popupClose.addEventListener(
    "click",
    () => {

        popup.classList.remove(
            "show"
        )

    }
)

/* ============================= */
/* Cursor Glow */
/* ============================= */

if(window.innerWidth > 768){

    const glow =
    document.createElement("div")

    glow.classList.add(
        "cursor-glow"
    )

    document.body.appendChild(
        glow
    )

    document.addEventListener(
        "mousemove",
        e => {

            glow.style.left =
            e.clientX + "px"

            glow.style.top =
            e.clientY + "px"

        }
    )

}

/* ============================= */
/* Scroll Reveal */
/* ============================= */

const reveals =
document.querySelectorAll(
    ".reveal"
)

window.addEventListener(
    "scroll",
    () => {

        reveals.forEach(
            reveal => {

                const top =
                reveal.getBoundingClientRect().top

                if(top < window.innerHeight - 100){

                    reveal.classList.add(
                        "active"
                    )

                }

            }
        )

    }
)/* ============================= */
/* Fade In */
/* ============================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const animatedElements = [

            document.querySelector(
                ".profile-card"
            ),

            document.getElementById(
                "footer"
            )

        ]

        animatedElements.forEach(
            (element,index) => {

                if(element){

                    element.classList.add(
                        "fade-in"
                    )

                    element.style.animationDelay =
                    `${index * 0.2}s`

                }

            }
        )

    }
)

/* ============================= */
/* Auto Update */
/* ============================= */

setInterval(() => {

    updateGreeting()

    updateTheme()

    updateSmartStatus()

},60000)

/* ============================= */
/* Prevent Video Pause */
/* ============================= */

const backgroundVideo =
document.getElementById(
    "background-video"
)

backgroundVideo.addEventListener(
    "pause",
    () => {

        backgroundVideo.play()

    }
)

/* ============================= */
/* Gallery Hover Sound */
/* Optional */
/* ============================= */

const galleryButton =
document.getElementById(
    "gallery-button"
)

galleryButton.addEventListener(
    "mouseenter",
    () => {

        galleryButton.style.transform =
        "translateY(-3px) scale(1.01)"

    }
)

galleryButton.addEventListener(
    "mouseleave",
    () => {

        galleryButton.style.transform =
        ""

    }
)

/* ============================= */
/* Console Message */
/* ============================= */

console.log(`

=======================================

        PROJECT THANH

    Thank you for being here.

=======================================

`)

/* ============================= */
/* Finish */
/* ============================= */
