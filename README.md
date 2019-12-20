# Password-Generator

This application is a random password generator. Initially when the page loads the user will see a header(Password Generator) and a content area with a subheader (Generate Password), a blank textarea with placeholder text and two buttons (Generate Password) and (Copy to Clipboard). Also Copy to Clipboard button will be disabled when the page initially loads, as there is nothing to copy yet. When the generate button is click the user will begin to recieve a series of prompts. These prompts will be used to set the parameters of the password. The first parameter, (length), will ask the user to input a number between 8 and 128. If the user inputs anything other than a number or a number that is less than 8 or greater than 128 they will be alerted that their entry is invalid and will need to begin the process again. Next will be a series of prompts asking the types of characters to include, uppercase characters, lowercase characters, numbers and special characters. At least one of these character types must be chosen, if the user doesn't choose any of the character types they will be alerted that they needed to choose at least one character type and will need to begin the process again. Once the parameters are met javascript will run the necessary functions to create and display the new password into the textarea of the HTML page and enable the button Copy to Clipboard. Clicking the Copy to Clipboard button will copy the generated password to the users clipboard allowing them to paste the new password wherever they like.