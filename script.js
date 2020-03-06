let printEntries = (new_list) => {
    // previousEntries = document.getElementById("previously")
    let sum = 0;
    new_list.forEach(function(currentValue,index){
        let p = document.createElement("p");
        p.textContent=currentValue.date_created;
        document.getElementById("previously").appendChild(p);



    });
    
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
    reflectDate = document.getElementById("date");
    reflectTitle = document.getElementById("title");
    reflectMessage = document.getElementById("reflection");
    reflectConfidence = document.getElementById("reflection_confidence");
    submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", (evt) => {
        evt.preventDefault();
        console.log(reflectDate.value);
        console.log(reflectTitle.value);
        console.log(reflectConfidence.value);
        dateValue = reflectDate.value;
        titleValue = reflectTitle.value;
        messageValue = reflectMessage.value;
        confidenceValue = reflectConfidence.value;
        createJournal(dateValue, titleValue, messageValue, confidenceValue,journalEntries);
        // evt.preventDefault();
    })




}
main();