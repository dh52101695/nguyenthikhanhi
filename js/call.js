function validateForm()  {
    var name = nameInput.value.trim();
    var sdt = sdtInput.value.trim();
    var mail = emailInput.value.trim();
    var isValid=true;

    if (name === '') {
        nameErrorMessage.textContent = 'Vui Lòng Nhập Tên Của Bạn';
        isValid = false;
    } else {
        nameErrorMessage.textContent = '';
    }
    if (sdt === '') {
        sdtErrorMessage.textContent = 'Vui Lòng Nhập Số Điện Thoại Của Bạn';
        isValid = false;
    } else {
        sdtErrorMessage.textContent = '';
    }
    if (!validateEmail(emailInput.value)) {
        emailErrorMessage.textContent = 'Vui lòng nhập một địa chỉ email hợp lệ.';
        isValid = false;
    } else {
        emailErrorMessage.textContent = '';
    }
    if (isValid) {
        alert('Gửi Yêu Cầu thành công!');
    }
}

function validateEmail(mail) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(mail);
}