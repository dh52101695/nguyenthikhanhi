function validateForm()  {
    var mail = emailInput.value.trim();
    var sdt = sdtInput.value.trim();
    var name = nameInput.value.trim();
    var username = usernameInput.value.trim();
    var pass = passInput.value.trim();
    var isValid=true;

    if (!validateEmail(emailInput.value)) {
        emailErrorMessage.textContent = 'Vui lòng nhập một địa chỉ email hợp lệ.';
        isValid = false;
    } else {
        emailErrorMessage.textContent = '';
    }
    if (sdt === '') {
        sdtErrorMessage.textContent = 'Vui Lòng Nhập Số Điện Thoại Của Bạn';
        isValid = false;
    } else {
        sdtErrorMessage.textContent = '';
    }
    if (name === '') {
        nameErrorMessage.textContent = 'Vui Lòng Nhập Tên Của Bạn';
        isValid = false;
    } else {
        nameErrorMessage.textContent = '';
    }
    if (username === '') {
        usernameErrorMessage.textContent = 'Vui Lòng Nhập Tên user Của Bạn';
        isValid = false;
    } else {
        usernameErrorMessage.textContent = '';
    }
    if (pass === '') {
        passErrorMessage.textContent = 'Vui Lòng Nhập PASS Của Bạn';
        isValid = false;
    } else {
        passErrorMessage.textContent = '';
    }
    if (isValid) {
        alert('Đăng Ký thành công!');
    }
}

function validateEmail(mail) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(mail);
}