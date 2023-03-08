var arrayPlayer = [];
var count = 0;

function buyNowbtn(element)
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

    

}

function disableButton(buttonId) {
    document.getElementById(buttonId).disabled = true;
  }
 
  
  
  
  
  
  