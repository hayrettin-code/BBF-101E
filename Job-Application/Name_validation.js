function isValidName(nameInput){
    let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let characters = nameInput.split("");
   for(let i=0; i < characters.length; i++){
    if (digits.includes(characters[i])) {
            return false;
        }
   }
    if(characters.length < 6){
        return false;
    }
   return true;
}
