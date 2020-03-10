let printEntries = (new_list) => {
    let previousEntries = document.getElementById("previously")
    // let entryBlockDisplay ="";
    let p = document.createElement("p");
    
     // let sum = 0;
    new_list.forEach(function(currentValue,index){
    //     let p = document.createElement("p");
        p.innerHTML=(`${currentValue.date_created}<br> <strong>${currentValue.reflectTitle}</strong><br> ${currentValue.reflect_message}<br> Confidence is ${currentValue.reflect_confidence}`);
        // document.getElementById("previously").appendChild(p);
    

    // new_list.forEach(function(currentValue){
    //     entryBlockDisplay= (`${entryBlockDisplay} ${currentValue.date_created}\n ${currentValue.reflectTitle}\n ${currentValue.reflect_message}\n Confidence is ${currentValue.reflect_confidence}\n`);
    });
    document.getElementById("previously").appendChild(p);
    // for (let index = 0; index < new_list.length; index++) {
        // let prevJournal = document.createElement("p");
        // prevJournal.textConent = (`${new_list[index].date_created}\n ${new_list[index].reflectTitle}\n ${new_list[index].reflect_message}\n Confidence is ${new_list[index].reflect_confidence}`);
        // document.getElementById("previously").appendChild(prevJournal);
        
        // !! your commented out version is closer to solution, you will need to iterate through the list and it can be achieved without append child - check out my solution in the gist I sent in the slack for a possible approach
    
    console.log(new_list)
    // let p = document.createElement("p");
    // p.textContent = `${new_list[index].date_created}`
    
    // document.getElementById("previously").appendChild(p);
    // index++;
    

}


//Function for creating object instances of journal data
let createJournal = (date, title, message, confidence,list) => {
    // let journalEntries =[];
    const journalEntry = {
        date_created: date,
        reflectTitle: title,
        reflect_message: message,
        reflect_confidence: confidence,
    }
    //Pushing everything to a list


    // console.log(journalEntries);
    list.push(journalEntry);
    //more debugging statements
    console.log(list);

    //Sending list to print to DOM
    printEntries (list);

}
let main = () => {
    let journalEntries = [];
    // !! not sure the point of the index value
    reflectDate = document.getElementById("date");
    reflectTitle = document.getElementById("title");
    reflectMessage = document.getElementById("message");
    reflectConfidence = document.getElementById("reflection_confidence");
    submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", (evt) => {
        evt.preventDefault();
        console.log(reflectDate.value);
        console.log(reflectTitle.value);
        console.log(reflectConfidence.value);
        // !! your object could have been created right here more efficiently 
        dateValue = reflectDate.value;
        titleValue = reflectTitle.value;
        messageValue = reflectMessage.value;
        confidenceValue = reflectConfidence.value;
        createJournal(dateValue, titleValue, messageValue, confidenceValue,journalEntries);
        // evt.preventDefault();
    })




}
main();