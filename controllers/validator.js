'use strict'

//Hàm validate email
const validateEmail = function (inputValue, messageElement) {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputValue == '') {
        getEle(messageElement).innerHTML = 'Please enter a valid email address.'
        return false
    }
    else {
        if (inputValue.match(emailFormat)) {
            getEle(messageElement).innerHTML = '';
            return true
        }
        else {
            getEle(messageElement).innerHTML = 'Invalid Email. Please enter a valid email address.'
            return false
        }
    }
}

// Hàm validate password
const validatePassword = function (inputValue, messageElement) {
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    if (inputValue == '') {
        getEle(messageElement).innerHTML = 'Please enter a valid password.'
        return false
    }
    else {
        if (inputValue.match(passw)) {
            getEle(messageElement).innerHTML = ''
            return true
        }
        else {
            getEle(messageElement).innerHTML = 'Minimum of 8 characters / 1 uppercase leter / 1 lowercase letter / 1 number.'
            return false
        }
    }
}

// Hàm validate password confirmation
const validatePassConfirm = function (password, confirmPass, messageElement) {
    if (confirmPass == '') {
        getEle(messageElement).innerHTML = 'Password does not match.'
        return false
    }
    else {
        if (confirmPass.match(password)) {
            getEle(messageElement).innerHTML = ''
            return true
        }
        else {
            getEle(messageElement).innerHTML = 'Password does not match.'
            return false
        }
    }
}

// Hàm validate tên user
const validateName = function (inputValue, messageElement) {
    const letters = /^[\p{L} ]+$/u;

    if (inputValue == '') {
        getEle(messageElement).innerHTML = 'Please enter a valid name.'
        return false
    }
    else {
        if (removeAscent(inputValue).match(letters)) {
            getEle(messageElement).innerHTML = '';
            return true
        }
        else {
            getEle(messageElement).innerHTML = 'Please enter a valid name.';
            return false
        }
    }
}

//Hàm validate số điện thoại
const validatePhone = function (inputValue, messageElement) {
    const phoneno = /^\d{10}$/;

    if (inputValue == '') {
        getEle(messageElement).innerHTML = 'Please enter a phone number.'
        return false
    }
    else {
        if (inputValue.match(phoneno)) {
            getEle(messageElement).innerHTML = ''
            return true
        }
        else {
            getEle(messageElement).innerHTML = 'Please enter a valid phone number.'
            return false
        }
    }
}

// Hàm validate giới tính 
const validateGender = function (arr, messageElement) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].checked === true) {
            getEle(messageElement).innerHTML = ''
            return true
        }
    }
    getEle(messageElement).innerHTML = 'Please select your gender.'
    return false
}

// Hàm lấy giá trị giới tính
const getGender = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].checked === true) {
            if (arr[i].defaultValue === 'male') {
                return true
            }
            else if (arr[i].defaultValue === 'female') {
                return false
            }
        }
    }
}