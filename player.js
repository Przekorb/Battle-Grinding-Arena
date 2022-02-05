let player;

function Player(
  classType,
  health,
  mana,
  strength,
  agility,
  defence,
  intelligence,
  helmet,
  armor,
  weapon,
  shield,
  skill1,
  skill2,
  skill3,
  skill4,
  experience,
  level
) {
  this.classType = classType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.defence = defence;
  this.intelligence = intelligence;
  this.helmet = helmet;
  this.armor = armor;
  this.weapon = weapon;
  this.shield = shield;
  this.skill1=skill1;
  this.skill2=skill2;
  this.skill3=skill3;
  this.skill4=skill4;
  this.experience=experience;
  this.level=level;
}
let PlayerMoves = {

  playerTurn: function(move)
  {
    enemyTurn=function()
          {
          let getPlayerHealth = document.querySelector(".health-player");
          let getEnemyHealth = document.querySelector(".health-enemy");
            totalEnemyDamage=enemy.strength;
          player.health=player.health-totalEnemyDamage;
          $(".insideDropTitleContainerAfter").append("<div class=\"enemyattack fade-in\"><p>Enemy dealt "+totalEnemyDamage+" damage</p></div>");
            $(".insideDropTitleContainerAfter").animate({
              scrollTop: $(
                ".insideDropTitleContainerAfter").get(0).scrollHeight
            }, 200);
            changebars(totalEnemyDamage);
          }
          
    let getActions=document.querySelector(".actions");
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");
      switch (move)
      {
        case "autoattack":
          totalPlayerDamage=player.strength;
          $(".insideDropTitleContainerAfter").append("<div class=\"playerattack fade-in03\"><p>You've dealt "+ totalPlayerDamage +" damage</p></div>");
      }
    $(".insideDropTitleContainerAfter").animate({
      scrollTop: $(
        ".insideDropTitleContainerAfter").get(0).scrollHeight
  }, 200);
  enemy.health=enemy.health-totalPlayerDamage;
  console.log("enemy health:" + enemy.health);
  if (enemy.health <=0)
  { $(".insideDropTitleContainerAfter").append("<div class=\"information fade-in03\"><p>You've defeated "+enemy.classType+".</p></div>");
  $(".insideDropTitleContainerAfter").append("<div class=\"information fade-in03\"><p>You've gained experience.</p></div>");
  $(".insideDropTitleContainerAfter").append("<div class=\"information fade-in03\"><p>Press chest button to continue.</p></div>");
  getActions.innerHTML= '<div><a href="#" class="btn-prefight" ><img id="lootbutton" src=icons/chest.png onclick="GameManager.setLoot()"></a><a href="#" class="btn-prefight" ><img id="fightbutton" src=icons/fightbutton.png></a></div>'+
    '<div><a href="#" class="btn-skill"><img id="skillbutton1" src=icons/'+'autoattack'+'.png></a><a href="#" class="btn-skill"><img id="skillbutton1" src=skills/'+player.skill1+'.png></a><a href="#" class="btn-skill"><img id="skillbutton2" src=skills/'+player.skill2+'.png></a><a href="#" class="btn-skill"><img id="skillbutton3" src=skills/'+player.skill3+'.png></a><a href="#" class="btn-skill"><img id="skillbutton4" src=skills/'+player.skill4+'.png></a></div>';
  //reset health
    player.health=maxplayerhealth+CurrentWeaponHealth+CurrentArmorHealth+CurrentHelmetHealth+CurrentShieldHealth;
    hBar.find('.insidehealthbar').css('width', "100%");
  }
          if (enemy.health>0)
         {enemyTurn();}
  if (player.health <=0)
  { 
    $(".insideDropTitleContainerAfter").append("<div class=\"information fade-in03\"><p>You've been defeated by "+enemy.classType+".</p></div>");
  $(".insideDropTitleContainerAfter").append("<div class=\"information fade-in03\"><p>Your deeds will be remembered.</p></div>");
  getActions.innerHTML= '<div><a href="#" class="btn-prefight"><img id="lootbutton" src=icons/chest.png></a><a href="#" class="btn-prefight"><img id="fightbutton" src=icons/fightbutton.png></a></div>'+
  '<div><a href="#" class="btn-skill"><img id="skillbutton1" src=icons/'+'autoattack'+'.png></a><a href="#" class="btn-skill"><img id="skillbutton1" src=skills/'+player.skill1+'.png></a><a href="#" class="btn-skill"><img id="skillbutton2" src=skills/'+player.skill2+'.png></a><a href="#" class="btn-skill"><img id="skillbutton3" src=skills/'+player.skill3+'.png></a><a href="#" class="btn-skill"><img id="skillbutton4" src=skills/'+player.skill4+'.png></a></div>';
}
  
  getEnemyHealth.innerHTML = "<img src=icons/health.png class=\"icons\"> Health: " + enemy.health;
  getPlayerHealth.innerHTML = "<img src=icons/health.png class=\"icons\"> Health: " + player.health;

  }
}
/*working code
let PlayerMoves = {
  calcAttack: function (move) {
    // Who attacks first?
    let getPlayerAgility = player.agility;
    let getEnemyAgility = enemy.agility;
    console.log(move);
    

    
    // Player attacks!
    let autoAttack = function () {
     
      let calcBaseDamage;
        calcBaseDamage = player.strength * 2;

      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      //number of hits
      let numberOfHits =
        Math.floor(Math.random() * Math.floor(player.agility / 10)) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
      }

    let enemyAttack = function () {
      let calcBaseDamage;
      if (enemy.mana > 0) {
        calcBaseDamage = enemy.strength * 2;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      //number of hits
      let numberOfHits =
        Math.floor(Math.random() * Math.floor(enemy.agility / 10)) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    };




  

    // get player/ enemy health to change later
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");

    //inititae attacks
    if (getPlayerAgility >= getEnemyAgility) {
      let PlayerAttackValues = autoAttack();
      let totalDamage = PlayerAttackValues[0] * PlayerAttackValues[1];
      enemy.health = enemy.health - totalDamage;

      
      $(".insideDropTitleContainerAfter").append("<div class=\"playerattack fade-in03\"><p>you dealt x damage</p></div>");
      $(".insideDropTitleContainerAfter").animate({
        scrollTop: $(
          'html, body').get(0).scrollHeight
    }, 2000);
     

      if (enemy.health <= 0) {
        alert("You win! Refresh to play again");
        getPlayerHealth.innerHtml = "Health: " + player.health;
        getEnemyHealth.innerHTML = "Health: 0";
      } else {
        getEnemyHealth.innerHTML = "Health: " + enemy.health;

        
        // Enemy attacks
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDamage;
        if (player.health <= 0) {
          alert("You lose! Refresh to play again");
          getPlayerHealth.innerHtml = "Health: 0";
          getEnemyHealth.innerHTML = "Health: " + enemy.health;
        } else {
          getPlayerHealth.innerHTML = "Health: " + player.health;
        }
      }

    } else if (getEnemyAgility >= getPlayerAgility) {
      let enemyAttackValues = enemyAttack();
      let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamage;

      $(".insideDropTitleContainerAfter").append("<div class=\"enemyattack\"><p>Enemy dealt x damage</p></div>");
      $(".insideDropTitleContainerAfter").animate({
        scrollTop: $(
          'html, body').get(0).scrollHeight
    }, 2000);
      if (player.health <= 0) {
        alert("You lose! Refresh to play again");
        getEnemyHealth.innerHtml = "Health: " + enemy.health;
        getPlayerHealth.innerHTML = "Health: 0";
      } else {
        getPlayerHealth.innerHTML = "Health: " + player.health;
        // Player attacks
        let autoAttackValues = autoAttack();
        let totalDamage = autoAttackValues[0] * autoAttackValues[1];
        enemy.health = enemy.health - enemyDamage;
        if (enemy.health <= 0) {
          alert("You win! Refresh to play again");
          getEnemyHealth.innerHtml = "Health: 0";
          getPlayerHealth.innerHTML = "Health: " + player.health;
        } else {
          getEnemyHealth.innerHTML = "Health: " + enemy.health;
        }
      }
    }
  }
}
*/
