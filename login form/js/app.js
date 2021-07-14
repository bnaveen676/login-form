//start preloader
$(window).on('load', () => {
    $(".preloader").fadeOut(800);
    $(".preloadContainer").delay(800).fadeOut(1000);
});
// end preloader

//login form validation
class LoignForm {
    validate(loginData) {
        $(loginData.submit).on('click', () => {
            // user name
            const userValue = $(loginData.userControl).val().trim();
            const passwordControl = $(loginData.passwordControl).val().trim();
            if (userValue.length === 0) {
                this.setErrorMessage($(loginData.userControl), 'please user name can not be blank', loginData);
            }
            // user name
            if (passwordControl.length === 0) {
                this.setErrorMessage($(loginData.passwordControl), 'please password can not be blank', loginData);
            }
        });

        // user name
        $(loginData.userControl).on(loginData.eventName, () => {
            const userValue = $(loginData.userControl).val().trim();
            if (userValue.length < 6) {
                this.setErrorMessage($(loginData.userControl), 'please username should be at least 6 characters', loginData);
                return false;
            } else {
                this.setSuccessMessage($(loginData.userControl))
            }
        });
        // pass word
        $(loginData.passwordControl).on(loginData.eventName, () => {
            const passwordControl = $(loginData.passwordControl).val().trim();
            if (passwordControl.length <= 5) {
                this.setErrorMessage($(loginData.passwordControl), "please enter your password at least 6 characters.", loginData);
                return false;
            } else {
                this.setSuccessMessage($(loginData.passwordControl));
            }
        });
    }

    setErrorMessage(input, feedBack, data) {
        const smallEle = $(input).next()[0];
        $(smallEle).html(feedBack);
    }

    setSuccessMessage(ele) {
        const smallEle = $(ele).next()[0];
        $(smallEle).hide(500);

    }
}
// dom content is loading
$(() => {
    // login form
    const loginCls = new LoignForm;
    loginCls.validate({
        submit: '.submit',
        userControl: '#userControl',
        passwordControl: '#passwordControl',
        eventName: 'keyup',
    });

});