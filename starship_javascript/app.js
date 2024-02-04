// app.js
document.addEventListener('DOMContentLoaded', function () {
  class Supplies {
    constructor(name, quantity) {
      this.name = name;
      this.quantity = quantity;
    }

    use(amount) {
      if (this.quantity >= amount) {
        this.quantity -= amount;
        console.log(`${amount} units of ${this.name} used.`);
      } else {
        console.log(`Not enough ${this.name} available.`);
      }
    }
  }

  class CrewMember {
    constructor(name, role) {
      this.name = name;
      this.role = role;
    }

    performTask(task) {
      console.log(`${this.name} is ${task}.`);
    }
  }

  class Shuttle {
    constructor(name) {
      this.name = name;
      this.fuelLevel = 100; // Initial fuel level
    }

    launch() {
      if (this.fuelLevel > 0) {
        this.fuelLevel -= 10;
        console.log(`${this.name} shuttle launched. Fuel remaining: ${this.fuelLevel}`);
      } else {
        console.log(`${this.name} shuttle has insufficient fuel.`);
      }
    }
  }

  class Starship {
    constructor(name) {
      this.name = name;
      this.supplies = [];
      this.crew = [];
      this.shuttles = [];
    }

    addSupplies(supply) {
      this.supplies.push(supply);
    }

    addCrewMember(crewMember) {
      this.crew.push(crewMember);
    }

    addShuttle(shuttle) {
      this.shuttles.push(shuttle);
    }

    mission() {
      console.log(`Mission for ${this.name} started!\n`);

      // Use supplies
      this.supplies.forEach((supply) => {
        supply.use(5);
      });

      console.log("\nCrew Tasks:");
      // Perform crew tasks
      this.crew.forEach((crewMember) => {
        crewMember.performTask("working on the navigation system");
      });

      console.log("\nShuttle Launches:");
      // Launch shuttles
      this.shuttles.forEach((shuttle) => {
        shuttle.launch();
      });

      console.log(`\nMission for ${this.name} completed!`);
    }

    addItemFromInput(itemClass, inputFields) {
      const item = new itemClass(...inputFields.map(field => field.value));
      this[`add${itemClass.name}`](item);
      inputFields.forEach(field => (field.value = ''));
    }
  }

  const shipNameInput = document.getElementById('shipName');
  const createShipBtn = document.getElementById('createShipBtn');
  const shipInfoDiv = document.getElementById('shipInfo');
  const showSuppliesBtn = document.getElementById('showSuppliesBtn');
  const showCrewBtn = document.getElementById('showCrewBtn');
  const showShuttlesBtn = document.getElementById('showShuttlesBtn');
  const startMissionBtn = document.getElementById('startMissionBtn');
  const addCrewBtn = document.getElementById('addCrewBtn');
  const addSupplyBtn = document.getElementById('addSupplyBtn');
  const addShuttleBtn = document.getElementById('addShuttleBtn');

  let starship;

  createShipBtn.addEventListener('click', function () {
    const shipName = shipNameInput.value;
    if (shipName) {
      starship = new Starship(shipName);
      shipInfoDiv.style.display = 'block';
      shipInfoDiv.innerHTML = `<p>${shipName} created!</p>`;
    } else {
      alert('Please enter a starship name.');
    }
  });

  addCrewBtn.addEventListener('click', function () {
    if (starship) {
      const crewNameInput = document.getElementById('crewName');
      const crewRoleInput = document.getElementById('crewRole');
      starship.addItemFromInput(CrewMember, [crewNameInput, crewRoleInput]);
    } else {
      alert('Starship not created yet.');
    }
  });

  addSupplyBtn.addEventListener('click', function () {
    if (starship) {
      const supplyNameInput = document.getElementById('supplyName');
      const supplyQuantityInput = document.getElementById('supplyQuantity');
      starship.addItemFromInput(Supplies, [supplyNameInput, supplyQuantityInput]);
    } else {
      alert('Starship not created yet.');
    }
  });

  addShuttleBtn.addEventListener('click', function () {
    if (starship) {
      const shuttleNameInput = document.getElementById('shuttleName');
      starship.addItemFromInput(Shuttle, [shuttleNameInput]);
    } else {
      alert('Starship not created yet.');
    }
  });

  // Additional buttons for displaying information
  showSuppliesBtn.addEventListener('click', function () {
    if (starship) {
      const suppliesInfo = starship.supplies.map(supply => `${supply.name}: ${supply.quantity}`).join('<br>');
      shipInfoDiv.innerHTML = `<p>Supplies:<br>${suppliesInfo}</p>`;
    } else {
      alert('Starship not created yet.');
    }
  });

  showCrewBtn.addEventListener('click', function () {
    if (starship) {
      const crewInfo = starship.crew.map(crewMember => `${crewMember.name} - ${crewMember.role}`).join('<br>');
      shipInfoDiv.innerHTML = `<p>Crew:<br>${crewInfo}</p>`;
    } else {
      alert('Starship not created yet.');
    }
  });

  showShuttlesBtn.addEventListener('click', function () {
    if (starship) {
      const shuttlesInfo = starship.shuttles.map(shuttle => `${shuttle.name} - Fuel: ${shuttle.fuelLevel}`).join('<br>');
      shipInfoDiv.innerHTML = `<p>Shuttles:<br>${shuttlesInfo}</p>`;
    } else {
      alert('Starship not created yet.');
    }
  });

  startMissionBtn.addEventListener('click', function () {
    if (starship) {
      starship.mission();
      alert(`Mission for ${starship.name} completed!`);
    } else {
      alert('Starship not created yet.');
    }
  });
});
