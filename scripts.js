function submitForm(event) {
    event.preventDefault();

    let genderValues = [];
    if (document.getElementById("male").checked) {
        genderValues.push(document.getElementById("male").value);
    }
    if (document.getElementById("female").checked) {
        genderValues.push(document.getElementById("female").value);
    }

    const formData = {
        "First Name": document.getElementById("firstName").value,
        "Last Name": document.getElementById("lastName").value,
        "Date of Birth": document.getElementById("dob").value,
        "Country": document.getElementById("country").value,
        "Gender": genderValues.join(', '),
        "Profession": document.getElementById("profession").value,
        "Email": document.getElementById("email").value,
        "Mobile Number": document.getElementById("mobile").value
    };

    let message = "Form Data Submitted:\n\n";
    for (let key in formData) {
        message += key + ": " + formData[key] + "\n";
    }

    alert(message);
    document.getElementById("surveyForm").reset();
}
