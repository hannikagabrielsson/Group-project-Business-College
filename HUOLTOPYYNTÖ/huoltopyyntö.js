function handleSubmit(event) {
  // Prevent the default form submission behavior
    event.preventDefault();
    event.target.reset();
    alert('Form successfully sent');

}