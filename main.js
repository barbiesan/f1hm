// Create a scope to limit variables

{
    // Set the navbar to dark by replacing the word light with dark in className
    // let body = document.body;
    // let children = body.children;
    // console.log(children);
    // let navBar = children[0];
    // let navBar = document.getElementsByTagName('nav')[0];
    let navBar = document.querySelector('nav');
    navBar.className = navBar.className.replaceAll('light', 'dark');

    // Set the buttons to be bootstrap style colors
    // let buttonColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

    // let myButtons = document.querySelectorAll('.col-2 > button');
    
    // Loop through buttons and apply button color to class name
    for (let i = 0; i < myButtons.length; i++){
        myButtons[i].className = `btn btn-${buttonColors[i]}`
    }

    // Add a header under the buttons in the container
    // First create the header
    let newHeader = document.createElement('h4');
    newHeader.id = 'myHeader';
    newHeader.className = 'text-center mt-3';
    newHeader.innerHTML = 'Created by Brian with the help of JavaScript';
    newHeader.style.color = 'black';


    // Get the row of buttons
    let buttonRow = document.getElementsByClassName('row')[0];
    // Add the new header AFTER the row of buttons (as opposed to being appended as the last child of the row)
    buttonRow.after(newHeader);

}

// Create a new scope

{
    // Get the header
    let myHeader = document.getElementById('myHeader');
    // console.log(myHeader);

    // Create a function to be executed when the event is triggered
    function handleHeaderEvent(e){
        // console.log(e)
        let elementToChange = e.target;
        if (elementToChange.style.color === 'black'){
            elementToChange.style.color = 'red';
        } else {
            elementToChange.style.color = 'black'
        }

    }

    // Add the handleHeaderEvent function to trigger when event happens to myHeader
    myHeader.addEventListener('click', handleHeaderEvent)
}

// Add event listeners for our buttons
{
    // let buttonColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

    // let myButtons = document.querySelectorAll('.col-2 > button');

//     for (let i = 0; i < myButtons.length; i++){
//         let button = myButtons[i];
//         button.addEventListener('click', () => {
//             let body = document.body;
//             body.className = `bg-${buttonColors[i]}`
//         })
//     }
// }

// Get the country from the form and display info on page
{
    // Grab the form
    let form = document.getElementById('seasonForm');
    
    // Create a function to handle submit event
    async function handleSubmit(e){
        e.preventDefault();
        // Get the input data from the form
        let inputSeason= e.target.season.value;
        let inputRound e.target.round.value;
        // Get country info from the input data
        let season = await getSeasonInfo(inputSeason,inputRound)
        
        // Build and add country card to display
        buildDriverCard(driver)
        e.target.driverName.value = '';
    }

    // Add handleSubmit function as listener to submit even on form
    form.addEventListener('submit', handleSubmit);


    // Function that will get the data from the country API
    async function getSeasonInfo(seasonInfo){
        try{
            let res = await fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
            let data = await //res.json()
            return data[]
        } catch(err) {
            console.error(err)
        }
    }

    // Function that will create country card and add to country display div
    function builddriverCard(driverObj){
        // Create the card div
        const card = document.createElement('div');
        card.className = 'card';

        // Create a top image
        // const image = document.createElement('img');
        // image.className = 'card-img-top';
        // image.src = driveryObj.flags.png;
        // Add image as a child to the card div
        // card.append(image);

        // Create card body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Create country name and population elements
        // const driverTitle = document.createElement('h5');
        // driverTitle.className = 'card-title'
        // driverTitle.innerHTML = driverObj.name.official;

        // const population = document.createElement('p');
        // population.className = 'card-text'
        // population.innerHTML = `Population: ${countryObj.population.toLocaleString('en-US')}`;

        // Append title and population to card body
        // cardBody.append(driverTitle);
        // cardBody.append(population);

        // Add card body to card div
        // card.append(cardBody);

        // Create our column for the row
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-3'

        // Add the card to the column
        col.append(card)

        // Get the country display row
        const driverDisplay = document.getElementById('driverDisplay');

        // Add the new column to our display
        driverDisplay.append(col);
    }
}
