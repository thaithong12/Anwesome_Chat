export const transValidation = {
    email_incorrect : "Email phai co dang example@gmail.com",
    gender_incorrect : "M bi be de a :))",
    password_incorrect : "Mat khau phai chua it nhat 8 ki tu , chu hoa, chua thuong, ki tu dac biet",
    confirmPassword_incorrect: "Mat khau chua chinh xac",
}
export const transError = {
    account_in_use : "Email nay da duoc su dung",
    account_in_delete  : "Tai khoan da xoa",
    account_in_active : "Tai khoan chua duoc active"
};

export const transSuccess  = {
    user_created : (userEmail) => {
        return `Tai khoan <strong>${userEmail}<strong> da duoc tao, vui long kiem tra email`;
    }
}