function isValidDOB(dobInput){
    let birthDate = new Date(dobInput);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    if(age < 17){
        return false;
    }else if(age > 36){
        return false;
    }
    return true;
} 
