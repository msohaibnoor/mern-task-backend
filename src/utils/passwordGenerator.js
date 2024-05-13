function generateRandomPassword() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const passwordLength = 8;
  let password = "";

  // Ensure at least one letter and one number
  let hasLetter = false;
  let hasNumber = false;

  while (!hasLetter || !hasNumber || password.length < passwordLength) {
    password = "";
    hasLetter = false;
    hasNumber = false;

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const char = characters.charAt(randomIndex);

      password += char;

      // Check if the character is a letter or a number
      if (/[a-zA-Z]/.test(char)) {
        hasLetter = true;
      } else if (/[0-9]/.test(char)) {
        hasNumber = true;
      }
    }
  }

  return password;
}

module.exports = {
  generateRandomPassword
};
