const overlay = document.querySelector('.overlay')

const container = document.querySelectorAll('.container')

const burger_in = document.querySelector('.burger_in')
const burger_out = document.querySelector('.burger_out')

burger_in.addEventListener('click', () => {
    overlay.style.transform = 'translateX(0px)'
    overlay.style.display = 'block'

    setTimeout(() => {
        for (let cont of container) {
            cont.style.display = 'none'
        }
    }, 400);
})

burger_out.addEventListener('click', () => {
    overlay.style.transform = 'translateX(-1000px)'    
    for (let cont of container) {
        cont.style.display = 'flex'
    }
})

// 1
const button_1 = document.querySelector('.green_button_1')
button_1.addEventListener('click', () => {
    window.alert("You pressed in the button 'READ MORE ABOUT MINUS'")
})

// 2
const button_2 = document.querySelector('.white_button_2')
button_2.addEventListener('click', () => {
    window.alert("You pressed in the button 2 'READ MORE ABOUT MINUS'")
})

// 3
const button_3 = document.querySelector('.white_button_3')
button_3.addEventListener('click', () => {
    window.alert("You pressed in the button 3 'MEET THE REST OF THE TEAM'")
})

// 4
const button_4_1 = document.querySelector('.grey_button_4_1')
button_4_1.addEventListener('click', () => {
    window.alert("You pressed in the button 4_1 'READ MORE'")
})
const button_4_2 = document.querySelector('.grey_button_4_2')
button_4_2.addEventListener('click', () => {
    window.alert("You pressed in the button 4_2 'READ MORE'")
})
const button_4_3 = document.querySelector('.grey_button_4_3')
button_4_3.addEventListener('click', () => {
    window.alert("You pressed in the button 4_3 'READ MORE'")
})

// 5
const button_5 = document.querySelector('.white_button_5')
button_5.addEventListener('click', () => {
    window.alert("You pressed in the button 5 'GO TO PROJECT INGUIRY'")
})

// 6
const button_6 = document.querySelector('.white_button_6')
button_6.addEventListener('click', () => {
    window.alert("You pressed in the button 6 'SEND MESSAGE'")
})

// 7
const button_7 = document.querySelector('.white_button_7')
button_7.addEventListener('click', () => {
    window.alert("You pressed in the button 7 'FOLLOW US ON'")
})