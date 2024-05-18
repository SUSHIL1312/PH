// const cells = document.querySelectorAll('.cell');

// cells.forEach(cell => {
//     cell.addEventListener('click', () => {
//         cell.style.transform = 'rotateY(180deg)';
//         const imageNumber = cell.id.replace('Image', '');
//         const imageName = `Img${imageNumber}.png`; // Assuming images are named as Img1.png, Img2.png, ...
//         cell.innerHTML = `<img src="${imageName}" alt="Image ${imageNumber}">`;
//     });
// });

// const cells = document.querySelectorAll('.cell');

// cells.forEach(cell => {
//     cell.addEventListener('click', () => {
//         cell.classList.toggle('flipped'); // Toggle the 'flipped' class on click
//     });
// });



document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll('.cell');

    document.addEventListener('click', () => {
        cells.forEach(cell => {
            if (cell.classList.contains('flipped')) {
                cell.style.transform = 'none';
                cell.classList.remove('flipped');
            }
        });
    });

    cells.forEach(cell => {
        cell.addEventListener('click', (event) => {
            event.stopPropagation();
            if (!cell.classList.contains('flipped')) {
                cell.style.transform = 'rotateY(360deg) scale(2.4)';
                cell.classList.add('flipped');
            } else {
                cell.style.transform = 'none';
                cell.classList.remove('flipped');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const passkey = document.getElementById('passkey').value;

        if (passkey === 'believe') {
            window.location.href = 'first.html'; // Redirect to first.html on successful verification
        } else {
            alert('Invalid passkey. Please try again.');
        }
    });
});

