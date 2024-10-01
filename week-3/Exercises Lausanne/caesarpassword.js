// Function to encrypt the message using Caesar Cipher
function caesarCipherEncrypt(message, key) {
    let encryptedMessage = '';
    
    for (let i = 0; i < message.length; i++) {
        let char = message[i];

        // Check if the character is a letter
        if (char.match(/[a-z]/i)) {
            // Get the ASCII code of the character
            let charCode = message.charCodeAt(i);

            // Uppercase letters
            if (charCode >= 65 && charCode <= 90) {
                encryptedMessage += String.fromCharCode(((charCode - 65 + key) % 26) + 65);
            }
            // Lowercase letters
            else if (charCode >= 97 && charCode <= 122) {
                encryptedMessage += String.fromCharCode(((charCode - 97 + key) % 26) + 97);
            }
        } else {
            // If it's not a letter, keep it unchanged
            encryptedMessage += char;
        }
    }

    return encryptedMessage;
}

// Ask the user for a message and a key
let message = prompt("Enter the message to encrypt:");
let key = parseInt(prompt("Enter the key (shift value):"));

// Encrypt the message
let encryptedMessage = caesarCipherEncrypt(message, key);

// Display the encrypted message
console.log("Encrypted Message: " + encryptedMessage);
