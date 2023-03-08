var arrayPlayer = [];
var count = 0;

function buyNowbtn(element,buttonId)
{
   

    const playerName = element.parentNode.parentNode.children[0].innerText;
    // console.log(productName);
    // arrayPlayer.push(playerName);
    // console.log(arrayPlayer);

    // display(arrayPlayer);

     count++;
     if(count == 6)
     {
        alert('do not added player .beacuse player limit close')
     }
    const playerBody = document.getElementById('playerList');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <tr>
                        <th>${count}</th>
                        <td>${playerName}</td>
                        
                        </tr>
    `
    playerBody.appendChild(tr);



    document.getElementById(buttonId).disabled = true;

    

}

// function disableButton(buttonId) {

    
//   }

  // Get all the buttons on the page

//   const buttons = document.querySelectorAll('button');

//   // Loop through each button and add an event listener to disable it when clicked
//   buttons.forEach(button => {
//     button.addEventListener('click', function() {
//       button.disabled = true;
//     });
//   });



document.getElementById('calculator_btn').addEventListener('click',function()

{
    const perPlayerString = document.getElementById('per_player_input').value;
    const perPlayer = parseFloat(perPlayerString);
    

    const playerExpenses = document.getElementById('player_expen');
    playerExpenses.innerText = perPlayer;
   

    


})

document.getElementById('total_cal_btn').addEventListener('click',function()
{

    const playerExpenses = document.getElementById('player_expen');
    const expensesString = playerExpenses.innerText;
    const expenses = parseFloat(expensesString);


    const managerInputFiled = document.getElementById('manager_input').value;
    const mangerInput = parseFloat(managerInputFiled);

    const coachInputFiled = document.getElementById('coach_input').value;
    const coachinput = parseFloat(coachInputFiled);

    const totalAmount =  mangerInput + coachinput +expenses;

    const total = document.getElementById('total_display');
    total.innerText = totalAmount;
})
 
  
  
  
  
  
  
 
  
  
  
  
  
  