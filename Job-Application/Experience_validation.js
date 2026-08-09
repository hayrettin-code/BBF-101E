function isValidExperience(expInput , dobInput){
    let birthDate = new Date(dobInput);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    let experience = Number(expInput);
    if(experience < 0){
        return false;
    }else if (experience > (age - 10) ){
        return false;
    }
    return true;

} 
