function sendMail(contactForm) {
    emailjs.send("service_67f64t9","template_wfd4op1",{
        from_name: contactForm.name.value,
        message: contactForm.message.value,
        from_email: contactForm.emailaddress.value
        })
        .then(
            function(response) {
            console.log("SUCCESS", response)
        },
        function(error) {
            console.log("FAILED", error)
        });
        return false;
}