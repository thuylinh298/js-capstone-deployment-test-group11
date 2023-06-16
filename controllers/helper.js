'use strict'

const getEle = n => document.getElementById(n)

// Hàm lấy dữ liệu
function getData() {
    let email = getEle('email').value,
        password = getEle('password').value,
        passwordConfirmation = getEle('passwordConfirm').value,
        name = getEle('name').value,
        genderArr = document.getElementsByName('gender'),
        gender = getGender(genderArr),
        phone = getEle('phone').value;

    let isValid = 
        validateEmail(email, 'emailHelp') &
        validatePassword(password, 'passwordHelp') &
        validatePassConfirm(password, passwordConfirmation, 'passwordConfirmHelp') &
        validateName(name, 'nameHelp') &
        validatePhone(phone, 'phoneHelp') &
        validateGender(genderArr, 'genderHelp');

    if (!isValid) {
        return;
    }

    // let gender = getGender(genderArr);

    let user = new Users(email, password, name, gender, phone);

    return user;
}

//Hàm Bỏ dấu tiếng Việt trước khi validate
function removeAscent(str) {
    if (str === null || str === undefined) return str;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
}