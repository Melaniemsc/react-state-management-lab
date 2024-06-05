import React from "react";
import './App.css';
const App = () => {
  const [team, setTeam] = React.useState([])
  const [money, setMoney] = React.useState(100)
  const [strength, setStrength] = React.useState(0)
  const [agility, setAgility] = React.useState(0)
  const [search, setSearch]= React.useState()
  const [filteredFigthers, setFilteredFighters] = React.useState([])

  const zombieFighters = [
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]
  


  function handleAddFighter(fighters) {
    // e.preventDefault();
    if (money >= fighters.price) {
      const newTeam = structuredClone(team);
      newTeam.push(fighters)
      setTeam(newTeam)
      let newMoney = structuredClone(money);
      newMoney = money - fighters.price;
      setMoney(newMoney)
      let newStrength = structuredClone(strength);
      newStrength = strength + fighters.strength
      setStrength(newStrength)
      let newAgility = structuredClone(agility);
      newAgility = agility + fighters.agility
      setAgility(newAgility)
    } else {
      console.log("Not enough money");
    }
  }

  function handleDeleteFighter(member,index) {
    const newTeam = structuredClone(team);
    newTeam.splice(index, 1)
    setTeam(newTeam)
    let newMoney = structuredClone(money);
    newMoney = money + member.price;
    setMoney(newMoney)
    let newStrength = structuredClone(strength);
    newStrength = strength - member.strength
    setStrength(newStrength)
    let newAgility = structuredClone(agility);
    newAgility = agility - member.agility
    setAgility(newAgility)
  }
  
  function handleSearch(e) {
    setSearch(e.target.value);
    const filtered = structuredClone(zombieFighters).filter(
      (fighter) => fighter.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredFighters(filtered);
  }

  

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: ${money}</h2>
      <h2>Team Strength: {strength}</h2>
      <h2>Team Agility: {agility}</h2>
      <h2>Team:</h2>
      <ul>
        {team.length === 0 ? 'Pick some team members!' :
          (team.map((member, index) => {
            return <li key={index}>
              <img src={member.img} alt={member.name} />
              <p>{member.name}</p>
              <p>Price: {member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
              <button onClick={() => handleDeleteFighter(member, index)}>🗑️</button>
            </li>
          }))}
      </ul>

      <div>
        <h2>Fighters</h2>
        <input
          type="text"
          placeholder="Search your Fighter here..."
          onChange={handleSearch}
          value={search}
        />
        <ul>
          {(filteredFigthers.length>0?filteredFigthers:zombieFighters).map((fighter, index) => {
            return <li key={index}>
              <img src={fighter.img} alt={fighter.name} />
              <p>{fighter.name}</p>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          })}
        </ul>
      </div>
    </>
  );
}

export default App;