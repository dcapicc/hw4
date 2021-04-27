window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)


  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
// Create a Variable for the ride data

// Loop through the ride data
let x
for (x = 0; x < json.length; x++) {
  let ride = json[x]

  // Store Rider First Name
  let riderFirstName = ride.passengerDetails.first
  // Store Rider Last Name
  let riderLastName = ride.passengerDetails.last
  // Store Rider Phone Number
  let riderPhone = ride.passengerDetails.phoneNumber
  // Store Pick Up Address
  let riderAddress = ride.pickupLocation.address
  // Store Pick Up City
  let riderCity = ride.pickupLocation.city
  // Store Pick Up State
  let riderState = ride.pickupLocation.state
  // Store Pick Up Zip
  let riderZip = ride.pickupLocation.zip 
  // Store Drop Off Address
  let riderDropAddress = ride.dropoffLocation.address
  // Store Drop Off City
  let riderDropCity = ride.dropoffLocation.city
  // Store Drop Off State
  let riderDropState = ride.dropoffLocation.state
  // Store Drop Off Zip
  let riderDropZip = ride.dropoffLocation.zip
  // Store Number of Passengers
  let passengers = ride.numberOfPassengers
  // Store Purple Requested
  let purple = ride.purpleRequested
  // Define Car Types
  let carTypes = [`Noober X`, `Noober XL`, 'Noober Purple']
  // Conditional Statement to determine car needed
  let car
  if (purple == true) {car = carTypes[2]
} else if (passengers > 3 && purple == false) {car = carTypes[1]
} else {car = carTypes[0]}

// Create variable for HTML element to include
  let ridesData = document.querySelector(`.rides`)

  if (car == `Noober Purple`) {
  ridesData.insertAdjacentHTML(`beforeend`,
  
// Insert HTML

  `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl font-extrabold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${car}</span>
    </h1>

    <div class="border-4 p-4 my-4 text-left border-purple-500">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${riderFirstName} ${riderLastName}</h2>
          <p class="font-bold text-gray-600">${riderPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2">
            ${passengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-indigo-500">PICKUP</div>
          <p>${riderAddress}</p>
          <p>${riderCity}, ${riderState} ${riderZip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-indigo-500">DROPOFF</div>
          <p>${riderDropAddress}</p>
          <p>${riderDropCity}, ${riderDropState} ${riderDropZip}</p>
        </div>
      </div>
    </div>`
  
  ) }
  else {

  ridesData.insertAdjacentHTML(`beforeend`,
  
// Insert HTML

  `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${car}</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${riderFirstName} ${riderLastName}</h2>
          <p class="font-bold text-gray-600">${riderPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${passengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${riderAddress}</p>
          <p>${riderCity}, ${riderState} ${riderZip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${riderDropAddress}</p>
          <p>${riderDropCity}, ${riderDropState} ${riderDropZip}</p>
        </div>
      </div>
    </div>`
  
  ) }
  



}





})