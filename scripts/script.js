 // Show the selected idea
 function showIdea(ideaId) {
      // Set dialog title
      const titles = {
        'slowstartup': 'Make Your PC Faster',
        'unclogDrain': 'Unclog Drain Naturally',
        'lightbulb': 'Change Bulb In Your House Easily',
        'doorknob': 'Fix DoorKnob'
    };
    const template = document.getElementById(ideaId);
    const dialogContent = document.getElementById('dialogContent');
    
    // Clone and show the selected idea
    dialogContent.innerHTML = '';//Clear ANy content if previousily present
    const clone = template.cloneNode(true);// To copy the parent and child
    dialogContent.appendChild(clone);
    
  
    document.getElementById('dialogTitle').textContent = titles[ideaId];//Change Dialog Title With the title from the map given above
    
    // Show first step by default
    showStep(0, ideaId);
    
    // Show the dialog
    document.getElementById('ideaDialog').showModal();
}
function showStep(stepNum, ideaId) {
    // Update active state in sidebar
   let items= document.querySelectorAll("#" + ideaId + " .step-list li")
    //selects al <li> elements inside step list
//querySelector returns a nodelist(array) with the size of no of <li> #ideaId selects the div tag and the other selects the entire list
for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("active");
}
// remove the active from the li and assiging the class="active" to active step which is selected
    document.querySelector(`#${ideaId} .step-list li:nth-child(${stepNum + 1})`).classList.add('active');
    //cant use double quotes 

    //nth child means the seleting the nth list from the nodelist returned and it starts from 1 to n and we add a classlist active to the element

    

    // Show corresponding content
    let steps =document.querySelectorAll("#"+ ideaId +" .step-content")//selects all elements inside step-content
    for(i=0;i<steps.length;i++){
        steps[i].classList.remove("active");
    }

    document.querySelector(`#${ideaId} .step-content[data-step="${stepNum}"]`).classList.add('active');
    //#$ acts as an variable and select stepcontent with data step equal to step num
}



// Close dialog
function closeDialog() {
    document.getElementById('ideaDialog').close();
}