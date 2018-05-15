$("#email-form").validate({
    rules: {
        name: "required",
        email: {
            required: true,
            email: true
        },
        message: "required"
    }
});