function myFunction() {
    const email = 'geergrace@gmail.com';

    // Create a temporary textarea element to hold the text to copy
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = email;
    document.body.appendChild(tempTextArea);

    // Select the text in the textarea
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices

    // Execute the copy command
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);



        var notification = document.getElementById('notification');
    notification.classList.add('show');
    
    // Call hideNotification function after 2000 milliseconds (2 seconds)
    setTimeout(hideNotification, 1500);
}

function hideNotification() {
    var notification = document.getElementById('notification');
    notification.classList.remove('show');
}







// function myFunction() {
//     const email = 'geergrace@gmail.com';

//     // Use navigator.clipboard.writeText if available
//     if (navigator.clipboard && navigator.clipboard.writeText) {
//         navigator.clipboard.writeText(email).then(function() {
//             showNotification();
//         }).catch(function(err) {
//             console.error('Could not copy text: ', err);
//             fallbackCopyTextToClipboard(email);
//         });
//     } else {
//         fallbackCopyTextToClipboard(email);
//     }
// }

// function fallbackCopyTextToClipboard(text) {
//     // Create a temporary textarea element to hold the text to copy
//     const tempTextArea = document.createElement('textarea');
//     tempTextArea.value = text;
//     document.body.appendChild(tempTextArea);

//     // Select the text in the textarea
//     tempTextArea.select();
//     tempTextArea.setSelectionRange(0, 99999); // For mobile devices

//     // Execute the copy command
//     document.execCommand('copy');

//     // Remove the temporary textarea
//     document.body.removeChild(tempTextArea);

//     showNotification();
// }

// function showNotification() {
//     const notification = document.getElementById('notification');
//     if (notification) {
//         notification.classList.add('show');
//         // Call hideNotification function after 1500 milliseconds (1.5 seconds)
//         setTimeout(hideNotification, 1500);
//     } else {
//         console.error('Notification element not found');
//     }
// }

// function hideNotification() {
//     const notification = document.getElementById('notification');
//     if (notification) {
//         notification.classList.remove('show');
//     } else {
//         console.error('Notification element not found');
//     }
// }
