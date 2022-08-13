var username = document.querySelector("#username")
var email = document.querySelector("#email")
var password = document.querySelector("#password")
var confirm_password = document.querySelector("#confirm-password")
var form = document.querySelector("form")

function showError(input, error){
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add("error")
    small.innerText = error
}

function showSuccess(input){
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove("error")
    small.innerText = ''
}

function checkEmpty(listInput){
    let isEmpty = false

    listInput.forEach(input=>{
        input.value = input.value.trim()
        if (!input.value){
            showError(input,"Không được để trống ô này")
        }else {
            showSuccess(input)
        }
    })
}

function checkEmailError(input){
    const regexEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    input.value = input.value.trim()
    let bool = regexEmail.test(input.value)
    if (!bool){
        showError(input,"Email Invalid")
    }
    else {
        showSuccess(input)
    }
    return bool
}

function checkLengthError(input, min){
    input.value = input.value.trim()

    if (input.value < min){
        showError(input, `Phải có ít nhất ${min} ký tự`)
        return true
    }

    return false
}

function checkConfirmPassword(fpass, secondPass){
    if(secondPass.value !== fpass.value){
        showError(secondPass, "Mật khẩu không trùng khớp!")
    }
}

form.addEventListener("submit", function (e){
    e.preventDefault()
    checkEmpty([username, email, password, confirm_password])
    checkEmailError(email)
    checkLengthError(username, 3)
    checkLengthError(password, 5)
    checkConfirmPassword(password, confirm_password)
})




