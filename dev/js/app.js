// Get the size of the matrix from user input
let size = parseInt(window.prompt(`Enter the size of the matrix (integer greater than 0)`));

// Make sure the input is valid
while (size < 1 || size === null || isNaN(size)) {
    size = parseInt(window.prompt(`Invalid input. Please enter a valid size for the matrix (integer greater than 0)`));
}

// Create a 1D array to represent the matrix
let matrix = new Array(size);

// Calculate the halfway point of the matrix (used for flipping)
let midpoint = parseInt((size * size / 2.0));

// Populate the matrix with arbitrary numbers
for (let i = 0; i < size; i++) {
    matrix[i] = new Array(size);
    for (let j = 0; j < size; j++) {
        matrix[i][j] = 1 + j + (i * size);
    }
}

// Flip the matrix diagonally
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        // If the current element is not on the diagonal, flip it
        if ((size + ((size - 1) * i)) !== (i * size + j + 1)) {
            if ((i * size + j) < midpoint) {
                let temp = matrix[i][j];
                matrix[i][j] = matrix[size - i - 1][size - j - 1];
                matrix[size - i - 1][size - j - 1] = temp;
            }
        }
    }
}

// Display the matrix
let display = (version) => {
    let container = document.querySelector(`body`).appendChild(document.createElement(`div`));
    container.setAttribute(`class`, `matrix`);
    let content = ``;
    for (let i = 0; i < size; i++) {
        content += `<tr>`;
        for (let j = 0; j < size; j++) {
            // If the current element is on the diagonal, add the `unflipped` class
            if ((size + ((size - 1) * i)) === (i * size + j + 1)) {
                content += `<td class="unflipped">${1 + j + (i * size)}</td>`;
            } else if (version === `original`) {
                content += `<td>${1 + j + (i * size)}</td>`;
            } else if (version === `flipped`) {
                content += `<td>${matrix[i][j]}</td>`;
            }
        }
        content += `</tr>`;
    }
    container.innerHTML = `<table>${content}</table>`;
};

// Display the original matrix
display(`original`);

// Display the flipped matrix
display(`flipped`);
