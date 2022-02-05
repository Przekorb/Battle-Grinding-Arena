var CurrentWeaponHealth = 0;
var CurrentWeaponMana = 0;
var CurrentWeaponStrength=0;
var CurrentWeaponAgility=0;
var CurrentWeaponIntelligence=0;
var CurrentWeaponDefence=0;
var CurrentArmorHealth=0;
var CurrentArmorMana=0;
var CurrentArmorStrength=0;
var CurrentArmorAgility=0;
var CurrentArmorIntelligence=0;
var CurrentArmorDefence=0;
var CurrentHelmetHealth=0;
var CurrentHelmetMana=0;
var CurrentHelmetStrength=0;
var CurrentHelmetAgility=0;
var CurrentHelmetIntelligence=0;
var CurrentHelmetDefence=0;
var CurrentShieldHealth=0;
var CurrentShieldMana=0;
var CurrentShieldStrength=0;
var CurrentShieldAgility=0;
var CurrentShieldIntelligence=0;
var CurrentShieldDefence=0;
var itemHealthComparision="dot";
var itemManaComparision="dot";
var itemStrengthComparision="dot";
var itemAgilityComparision="dot";
var itemDefenceComparision="dot";
var itemIntelligenceComparision="dot";
var playerCurrentWeaponID="emptyweapon";
var playerCurrentArmorID="emptyarmor";
var playerCurrentShieldID="emptyshield";
var playerCurrentHelmetID="emptyhelmet";
var playerCurrentWeaponRarity="Normal";
var playerCurrentArmorRarity="Normal";
var playerCurrentShieldRarity="Normal";
var playerCurrentHelmetRarity="Normal";
var droppedItem;
var skill1;
var skill2;
var skill3;
var skill4;
var randomizelegendaryitem;
var randomizecommonitem;
var randomizeuncommonitem;
var randomizemagicalitem;
var maxplayerhealth;
var randomize = function(start,range){
    let getRandom=Math.floor((Math.random()* range) + start);
    return getRandom;
}


let GameManager=
{
setGameStart: function(classType)
{
this.resetPlayer(classType);
this.setPreFight();
},
resetPlayer:function(classType) {
    switch (classType)
    {
        case "Berserker":
         skill1=new Skill("barbarianblow");
         skill2=new Skill("berserk");
         skill3=new Skill("berserkerslashes");
         skill4=new Skill("weaponthrow");
         player = new Player(classType, 600, 50, 20, 10 ,20, 10,"none","none","none","none",skill1.skillname,skill2.skillname,skill3.skillname,skill4.skillname);
         skill1.skilldamage=0.6*player.strength+0.1*player.health;
         maxplayerhealth=player.health;
         break;
         case "Paladin":
         skill1=new Skill("redemption");
         skill2=new Skill("holyshield");
         skill3=new Skill("sanctuary");
         skill4=new Skill("hammerofthunder");
         player = new Player(classType, 75, 75, 15, 15 ,15, 15,"none","none","none","none",skill1.skillname,skill2.skillname,skill3.skillname,skill4.skillname)
         maxplayerhealth=player.health;
         break;
         case "Mage":
         skill1=new Skill("fireballs");
         skill2=new Skill("walloffire");
         skill3=new Skill("holynova");
         skill4=new Skill("thunderbolt");
         player = new Player(classType, 50, 100, 10, 20 ,10, 20,"none","none","none","none",skill1.skillname,skill2.skillname,skill3.skillname,skill4.skillname)
         maxplayerhealth=player.health;
         break;
    }
//print interface
let getinterface = document.querySelector(".interface");
let getequipment=document.querySelector(".equipment");

document.getElementById("playerinterface").style.border= "12px solid #B88846";
document.querySelector(".playerinterface").style.width= "431px";
document.getElementById("playerinterface").style.height="auto";
document.getElementById("playerinterface").style.boxShadow= "0px 0px 4px #f8b600d8";
// document.getElementById("playerinterface").style.backgroundColor= "rgba(22,17,0,0.78)";
document.querySelector(".interface").style.gap= "86px";
document.querySelector(".playerinterface").style.backgroundColor= "rgba(0,0,0,0.76)";
document.querySelector("h1").style.color= "rgb(57,54,58)";
document.getElementById("arena").classList.remove('scoreboard');
document.getElementById("arena").classList.add('arena');
document.querySelector(".header").style.height= "5px";
//change scoreboard class to dropTitleContainer class
document.querySelector(".arena").innerHTML="<div class=\"dropTitleContainer\"></div>" 
document.querySelector(".dropTitleContainer").innerHTML= "<p>Press chest button to search for items <br> <br>Press sword button to fight the enemy</p>";







getinterface.innerHTML='<div id="playerStatisticsContainer"><h3>' + player.classType 
+ '</h3><p class="health-player"><img src=icons/health.png class="icons"> Health: ' + player.health +
 '</p><p><img src=icons/mana.png class="icons"> Mana: ' + player.mana + 
 '</p><p class="tooltip"><img src=icons/strength.png class="icons"> <span class="tooltiptext">Makes physical attacks stronger.</span> Strength: ' + player.strength +
 '</p><p class="tooltip"><img src=icons/agility.png class="icons"> <span class="tooltiptext">Decide whoever have the first attack, increase chance to dodge any kind of attack and to critically strike.</span> Agility: ' + player.agility + 
 '</p><p class="tooltip"><img src=icons/defence.png class="icons"> <span class="tooltiptext">Decreases damage taken by this amount.</span>Defence: ' + player.defence + 
 '</p><p class="tooltip"><img src=icons/intelligence.png class="icons"> <span class="tooltiptext">Makes spells deal more damage by this amount.</span>Intelligence: ' + player.intelligence + '</p></div>' +
 '<img src="avatar-player/' + 
 player.classType.toLowerCase() + '.jpg" class="img-avatar">';

 //bars
 getequipment.innerHTML=
 '<div class="bars">'+
 '<div class="health-bar" data-total='+maxplayerhealth+' data-value='+player.health+'><div class="insidehealthbar" id="insidehealthbar"><div class="hit"></div></div></div>'+
 '<div class="mana-bar" data-total="50" data-value='+player.mana+'><div class="insidemanabar"><div class="hit"></div></div></div>'+
 '<div class="experience-bar" data-total="1000" data-value="40"><div class="insideexperiencebar"><div class="hit"></div></div></div>'+
 '</div>' +
 //inventory table
 '<div class=equipmentTable><table><tr><td class="characterslot"><img id="helmetimage" class="slot1" src=items/'+playerCurrentHelmetID+'.gif></td><td class="characterslot"><img id="armorimage" class="slot2" src=items/'+playerCurrentArmorID+'.gif></td></tr>'
 +'<tr><td class="characterslot"><img id="weaponimage" class="slot3" src=items/'+playerCurrentWeaponID+'.gif></td><td class="characterslot"><img id="shieldimage" class="slot4" src=items/'+playerCurrentShieldID+'.gif></td></tr></table></div>'
 },

setPreFight: function(){
    let getHeader=document.querySelector(".header")
    let getActions=document.querySelector(".actions")
    let getArena=document.querySelector(".arena")
    getHeader.innerHTML =''
    getActions.innerHTML= '<div><a href="#" class="btn-prefight" onclick="GameManager.setLoot()"><img id="lootbutton" src=icons/chest.png></a><a href="#" class="btn-prefight" onclick="GameManager.setFight()"><img id="fightbutton" src=icons/fightbutton.png></a></div>'+
    '<div><a href="#" class="btn-skill"><img id="skillbutton1" src=icons/'+'autoattack'+'.png onclick="PlayerMoves.playerTurn(\'autoattack\')"><a href="#" class="btn-skill"><img id="skillbutton1" src=skills/'+player.skill1+'.png></a><a href="#" class="btn-skill"><img id="skillbutton2" src=skills/'+player.skill2+'.png></a><a href="#" class="btn-skill"><img id="skillbutton3" src=skills/'+player.skill3+'.png></a><a href="#" class="btn-skill"><img id="skillbutton4" src=skills/'+player.skill4+'.png></a></div>';
    getArena.style.visibility = "visible";
},

setFight: function(){

    let getHeader=document.querySelector(".header")
    let getActions=document.querySelector(".actions")
    let getEnemy=document.querySelector(".enemy")
    let getArena=document.querySelector(".arena")
    let getDropTitleContainer=document.querySelector(".dropTitleContainer")
    $('.dropTitleContainer').addClass('dropTitleContainerAfter');
    //css rules that change
    getArena.style.height="160px";
    getDropTitleContainer.style.overflowY= "scroll";
    getDropTitleContainer.style.overflowX= "hidden";
    getArena.style.border= "none";
    getDropTitleContainer.innerHTML=""
 
    // Create enemy!
    let enemy00 = new Enemy("Geist", 100,25,10,10,10,10);
    let enemy01 = new Enemy("Gorilla", 600,80,75,600,10,10);
    // randomize enemy
    let chooseRandomEnemy = Math.floor(Math.random()*Math.floor(2));
    switch(chooseRandomEnemy)
    {
        case 0:
            enemy=enemy00;
            break;
        case 1:
            enemy=enemy01
            break;
    }

    $(".dropTitleContainerAfter").append("<div class=\"insideDropTitleContainerAfter\"></div>");
    $(".insideDropTitleContainerAfter").append("<div class=\"information fade-in03\"><p>You've attacked "+enemy.classType+"</p></div>");
    
    
    getActions.innerHTML= '<div><a href="#" class="btn-prefight" ><img id="lootbutton" src=icons/chest.png></a><a href="#" class="btn-prefight" ><img id="fightbutton" src=icons/fightbutton.png></a></div>'+
    '<div><a href="#" class="btn-skill"><img id="skillbutton1" src=icons/'+'autoattack'+'.png onclick="PlayerMoves.playerTurn(\'autoattack\')"></a><a href="#" class="btn-skill"><img id="skillbutton1" src=skills/'+player.skill1+'.png></a><a href="#" class="btn-skill"><img id="skillbutton2" src=skills/'+player.skill2+'.png></a><a href="#" class="btn-skill"><img id="skillbutton3" src=skills/'+player.skill3+'.png></a><a href="#" class="btn-skill"><img id="skillbutton4" src=skills/'+player.skill4+'.png></a></div>';
    
   

    //enemy stats
    getEnemy.innerHTML='<div class="enemycontainer"><div class="enemystatscontainer"><h3>' 
    + enemy.classType + '</h3><p class="health-enemy"><img src=icons/health.png class="icons"> Health: ' + enemy.health + 
    '</p><p><img src=icons/mana.png class="icons" > Mana: ' + enemy.mana + 
    '</p><p><img src=icons/strength.png class="icons"> Strength: ' + enemy.strength + 
    '</p><p><img src=icons/agility.png class="icons"> Agility: ' + enemy.agility 
    + '</p><p><img src=icons/defence.png class="icons"> Defence: ' + enemy.defence +  
    '</p><p><img src=icons/intelligence.png class="icons"> Intelligence:' + enemy.intelligence + 
    '</p></div>'+
    //enemy bars
    '<div class="enemybars">'+
 '<div class="enemyhealth-bar" data-total="100" data-value="80"><div class="insideenemyhealthbar" id="insideenemyhealthbar"><div class="hit"></div></div></div>'+
 '<div class="enemymana-bar" data-total="50" data-value="40"><div class="insideenemymanabar" id="insideenemymanabar"><div class="hit"></div></div></div>'+
 '</div>' +
 //enemy image
    '<div class="enemyimagecontainer"><img src="avatar-player/' + 
    enemy.classType.toLowerCase() + '.jpg" alt="' + enemy.classType + ' " class="img-avatarEnemy"></div></div>';
},

setLoot: function(){
    let getActions=document.querySelector(".actions");
    /*adding items section*/
    console.log("setting loot");
    $('.enemycontainer').css("visibility","hidden");
    getActions.innerHTML= '<div><a href="#" class="btn-prefight" ><img id="lootbutton" src=icons/chest.png onclick="GameManager.setLoot()"></a><a href="#" class="btn-prefight" ><img id="fightbutton" src=icons/fightbutton.png onclick="GameManager.setFight()"></a></div>'+
    '<div><a href="#" class="btn-skill"><img id="skillbutton1" src=icons/'+'autoattack'+'.png onclick="PlayerMoves.playerTurn(\'autoattack\')"></a><a href="#" class="btn-skill"><img id="skillbutton1" src=skills/'+player.skill1+'.png></a><a href="#" class="btn-skill"><img id="skillbutton2" src=skills/'+player.skill2+'.png></a><a href="#" class="btn-skill"><img id="skillbutton3" src=skills/'+player.skill3+'.png></a><a href="#" class="btn-skill"><img id="skillbutton4" src=skills/'+player.skill4+'.png></a></div>';
    
    calculateexperience();
    let randomNumber = Math.floor(Math.random()*Math.floor(10001));
    //level 1 items
                    //itemID itemLVL                              health           mana          strength       agility            defence      intelligence
    let item100 = new Item(100,1,"Weapon","Long Sword","Normal",randomize(8,15),randomize(0,0),randomize(3,5),randomize(3,5),randomize(1,3),randomize(1,2));
    let item101 = new Item(101,1,"Armor","Steel Plate","Normal",randomize(10,14),randomize(10,14),randomize(1,3),randomize(1,3),randomize(3,6),randomize(1,1));
    let item102 = new Item(102,1,"Shield","Iron Shield","Normal",randomize(10,14),randomize(10,14),randomize(1,3),randomize(1,3),randomize(3,6),randomize(1,1));
    let item103 = new Item(103,1,"Helmet","Leather Helmet","Normal",randomize(4,6),randomize(6,10),randomize(1,3),randomize(1,3),randomize(3,6),randomize(1,1));
    let item104 = new Item(104,1,"Weapon","Mage Wand","Normal",randomize(7,9),randomize(20,24),randomize(2,3),randomize(4,5),randomize(5,6),randomize(10,13));
    let item105 = new Item(105,1,"Shield","Small Orb","Normal",randomize(15,16),randomize(14,16),randomize(2,3),randomize(4,5),randomize(5,6),randomize(4,6));
    let item106 = new Item(106,1,"Helmet","Huge Steel Helmet","Normal",randomize(22,24),randomize(15,17),randomize(4,6),randomize(3,4),randomize(8,9),randomize(3,4));
    let item107 = new Item(107,1,"Weapon","Cave Sword","Normal",randomize(10,12),randomize(12,14),randomize(13,15),randomize(5,7),randomize(3,4),randomize(3,4));
    let item108 = new Item(108,1,"Weapon","Ghoul Sword","Normal",randomize(20,22),randomize(10,12),randomize(12,13),randomize(8,9),randomize(2,3),randomize(2,3));
    let item109 = new Item(109,1,"Helmet","Court Paladin Helmet","Normal",randomize(20,24),randomize(28,34),randomize(6,7),randomize(5,6),randomize(7,8),randomize(5,6));
    let item110 = new Item(110,1,"Weapon","Experienced Mage Wand","Normal",randomize(15,16),randomize(22,30),randomize(6,7),randomize(10,12),randomize(5,6),randomize(14,15));
    let item111 = new Item(111,1,"Helmet","Adept Mage Hood","Normal",randomize(14,15),randomize(22,23),randomize(4,5),randomize(9,10),randomize(6,7),randomize(12,13));
    let item112 = new Item(112,1,"Shield","Dark Blue Orb","Normal",randomize(18,19),randomize(24,27),randomize(2,3),randomize(6,7),randomize(7,8),randomize(13,14));
    let item113 = new Item(113,1,"Shield","Guardian Shield","Normal",randomize(27,30),randomize(14,15),randomize(5,6),randomize(3,4),randomize(11,13),randomize(2,3));
    let item114 = new Item(114,1,"Shield","Oozing orb","Normal",randomize(20,22),randomize(25,26),randomize(3,5),randomize(10,13),randomize(8,9),randomize(14,15));
    let item115 = new Item(115,1,"Weapon","Long Freezing Wand","Normal",randomize(10,12),randomize(23,24),randomize(3,5),randomize(7,8),randomize(2,3),randomize(17,18));
    let item116 = new Item(116,1,"Helmet","Crimson Hat","Normal",randomize(4,5),randomize(20,23),randomize(1,2),randomize(5,6),randomize(5,7),randomize(15,16));
    let item117 = new Item(117,1,"Shield","Small Skeleton Shield","Normal",randomize(25,26),randomize(10,12),randomize(1,2),randomize(3,7),randomize(12,14),randomize(4,6));
    let item118 = new Item(118,1,"Shield","Small Templar Shield","Normal",randomize(15,17),randomize(14,15),randomize(4,5),randomize(4,5),randomize(12,14),randomize(8,9));
    let item119 = new Item(119,1,"Weapon","Sword of Warrior","Normal",randomize(18,20),randomize(3,5),randomize(17,18),randomize(1,2),randomize(4,5),randomize(2,3));
    let item120 = new Item(120,1,"Helmet","Red Chain Helmet","Normal",randomize(20,22),randomize(24,26),randomize(8,9),randomize(3,4),randomize(9,10),randomize(5,6));
    let item121 = new Item(121,1,"Helmet","Thorn Helmet","Normal",randomize(35,37),randomize(4,5),randomize(5,6),randomize(2,4),randomize(9,10),randomize(2,4));
    let item122 = new Item(122,1,"Weapon","Orc Rod","Normal",randomize(4,6),randomize(28,29),randomize(5,6),randomize(10,13),randomize(3,4),randomize(8,10));
    let item123 = new Item(123,1,"Shield","Tank Guard","Normal",randomize(12,15),randomize(10,14),randomize(5,6),randomize(2,3),randomize(16,17),randomize(2,3));
    let item124 = new Item(124,1,"Helmet","Slightly Magical Hat","Normal",randomize(10,12),randomize(32,34),randomize(4,5),randomize(4,5),randomize(3,4),randomize(6,7));
    let item125 = new Item(125,1,"Armor","Green Robe","Normal",randomize(16,17),randomize(24,26),randomize(1,2),randomize(6,7),randomize(5,6),randomize(10,11));
    let item126 = new Item(126,1,"Armor","Rusty Plate Armor","Normal",randomize(27,29),randomize(10,12),randomize(3,4),randomize(4,5),randomize(12,13),randomize(2,3));
    let item127 = new Item(127,1,"Armor","Armor Of Tribe","Normal",randomize(25,26),randomize(10,11),randomize(9,11),randomize(3,4),randomize(8,9),randomize(2,3));
    let item128 = new Item(128,1,"Armor","Shiny Paladin Armor","Normal",randomize(10,11),randomize(30,40),randomize(5,7),randomize(4,5),randomize(6,7),randomize(6,7));
    let item129 = new Item(129,1,"Armor","Slightly Magical Coat","Normal",randomize(10,9),randomize(23,24),randomize(3,5),randomize(5,7),randomize(3,4),randomize(12,13));
  
    //level 2 items
    let item200 = new Item(200,2,"Helmet","Viking Helmet","Uncommon",randomize(25,30),randomize(20,25),randomize(4,5),randomize(4,5),randomize(6,7),randomize(4,6));
    let item201 = new Item(201,2,"Weapon","Light Magic Sword","Uncommon",randomize(25,26),randomize(36,40),randomize(2,4),randomize(4,5),randomize(5,6),randomize(7,9));
    let item202 = new Item(202,2,"Weapon","Wolf sword","Uncommon",randomize(38,40),randomize(14,15),randomize(13,14),randomize(8,9),randomize(10,12),randomize(4,6));
    let item203 = new Item(203,2,"Weapon","Berserker Axe","Uncommon",randomize(27,30),randomize(12,14),randomize(14,16),randomize(5,7),randomize(11,13),randomize(4,6));
    let item204 = new Item(204,2,"Weapon","Double Axe","Uncommon",randomize(20,21),randomize(4,7),randomize(16,17),randomize(4,6),randomize(15,16),randomize(3,5));
    let item205 = new Item(205,2,"Weapon","Templar Sword","Uncommon",randomize(9,10),randomize(26,28),randomize(8,11),randomize(5,6),randomize(5,6),randomize(13,15));
    let item206 = new Item(206,2,"Armor","Fire Mage Robes","Uncommon",randomize(20,24),randomize(37,38),randomize(6,7),randomize(13,15),randomize(10,12),randomize(17,19));
    let item207 = new Item(207,2,"Armor","Brass Armor","Uncommon",randomize(22,24),randomize(12,19),randomize(10,11),randomize(8,10),randomize(14,17),randomize(5,6));
    let item208 = new Item(208,2,"Armor","Giant Skeleton Armor","Uncommon",randomize(35,37),randomize(22,24),randomize(8,12),randomize(4,5),randomize(14,17),randomize(5,6));
    let item209 = new Item(209,2,"Shield","Jewelled Shield","Uncommon",randomize(32,33),randomize(36,42),randomize(7,8),randomize(9,10),randomize(12,13),randomize(18,20));
    let item210 = new Item(210,2,"Shield","Nerubian Egg","Uncommon",randomize(30,32),randomize(30,32),randomize(10,11),randomize(15,16),randomize(3,6),randomize(27,28));
    let item211 = new Item(211,2,"Shield","Shell","Uncommon",randomize(40,42),randomize(22,24),randomize(12,13),randomize(6,7),randomize(22,24),randomize(11,12));
    let item212 = new Item(212,2,"Helmet","Spartakus Helmet","Uncommon",randomize(34,36),randomize(10,11),randomize(17,19),randomize(10,12),randomize(21,22),randomize(4,5));
    let item213 = new Item(213,2,"Armor","Tournament Armor","Uncommon",randomize(30,31),randomize(16,17),randomize(16,17),randomize(11,12),randomize(30,31),randomize(15,16));
    let item214 = new Item(214,2,"Weapon","Travaler's staf","Uncommon",randomize(30,32),randomize(40,42),randomize(12,13),randomize(13,14),randomize(7,9),randomize(22,23));
    let item215 = new Item(215,2,"Helmet","War Helmet","Uncommon",randomize(60,62),randomize(12,13),randomize(12,13),randomize(7,8),randomize(16,17),randomize(3,4));
    let item216 = new Item(216,2,"Armor","Monk Robe","Uncommon",randomize(40,41),randomize(44,45),randomize(10,11),randomize(18,19),randomize(12,13),randomize(20,21));
    let item217 = new Item(217,2,"Armor","Wizard's Robe","Uncommon",randomize(60,61),randomize(24,26),randomize(13,14),randomize(14,15),randomize(16,17),randomize(30,31));
   
    //level 3 items
    let item300 = new Item(300,3,"Shield","Burning Core Shield","Uncommon",randomize(55,56),randomize(19,21),randomize(10,11),randomize(6,9),randomize(15,17),randomize(4,5));
    let item301 = new Item(301,3,"Shield","Giant Skeleton Shield","Uncommon",randomize(40,41),randomize(60,61),randomize(14,15),randomize(11,12),randomize(22,24),randomize(14,18));
    let item302 = new Item(302,3,"Shield","Druid Orb","Uncommon",randomize(40,47),randomize(40,42),randomize(7,10),randomize(16,19),randomize(10,11),randomize(28,29));
    let item303 = new Item(303,3,"Armor","Plate Armor","Uncommon",randomize(70,71),randomize(20,21),randomize(12,13),randomize(9,11),randomize(16,19),randomize(6,7));
    let item304 = new Item(304,3,"Weapon","Necromancer Wand","Uncommon",randomize(20,24),randomize(50,51),randomize(9,11),randomize(12,14),randomize(6,7),randomize(27,30));
    let item305 = new Item(305,3,"Helmet","Arabic Mage Helmet","Uncommon",randomize(32,46),randomize(35,42),randomize(16,17),randomize(27,29),randomize(18,24),randomize(26,29));
    let item306 = new Item(306,3,"Armor","Gladiator Armor","Uncommon",randomize(40,41),randomize(60,61),randomize(14,15),randomize(27,29),randomize(18,24),randomize(26,29));
    let item307 = new Item(307,3,"Shield","Helmet of a half-mage","Uncommon",randomize(40,52),randomize(40,49),randomize(16,19),randomize(19,24),randomize(10,11),randomize(14,15));
    let item308 = new Item(308,3,"Weapon","Emerald Wand","Uncommon",randomize(30,36),randomize(40,60),randomize(12,13),randomize(20,22),randomize(12,13),randomize(30,31));
    let item309 = new Item(309,3,"Weapon","Cursed Sword","Uncommon",randomize(20,30),randomize(20,30),randomize(40,60),randomize(40,50),randomize(6,7),randomize(1,3));
    let item310 = new Item(310,3,"Weapon","Fully Golden Sword","Uncommon",randomize(55,75),randomize(60,65),randomize(21,24),randomize(5,6),randomize(16,17),randomize(27,30));
    let item311 = new Item(311,3,"Armor","Mysterious Robe","Uncommon",randomize(25,35),randomize(50,51),randomize(9,11),randomize(50,60),randomize(10,12),randomize(10,12));
    let item312 = new Item(312,3,"Weapon","Leaf Axe","Uncommon",randomize(70,80),randomize(20,22),randomize(25,30),randomize(10,17),randomize(10,12),randomize(7,10));
    let item313 = new Item(313,3,"Shield","Candle Orb","Uncommon",randomize(30,40),randomize(30,40),randomize(10,12),randomize(34,40),randomize(5,7),randomize(34,40));
    
    //level 4 items
    let item400 = new Item(400,4,"Weapon","Wand of Angel","Magical",randomize(82,83),randomize(80,88),randomize(13,15),randomize(25,26),randomize(8,10),randomize(50,60));
    let item401 = new Item(401,4,"Helmet","Hood of the Fire Mage","Magical",randomize(75,90),randomize(50,51),randomize(13,15),randomize(25,26),randomize(20,21),randomize(38,48));
    let item402 = new Item(402,4,"Helmet","Paladin Crown","Magical",randomize(40,42),randomize(140,160),randomize(25,26),randomize(12,14),randomize(40,42),randomize(20,23));
    let item403 = new Item(403,4,"Weapon","Frozen Sword","Magical",randomize(60,65),randomize(60,70),randomize(46,55),randomize(10,12),randomize(10,12),randomize(17,19));
    let item404 = new Item(404,4,"Armor","Frozen Armor","Magical",randomize(100,120),randomize(70,90),randomize(18,20),randomize(18,20),randomize(36,38),randomize(36,38));
    let item405 = new Item(405,4,"Shield","Golden Orb","Magical",randomize(60,63),randomize(75,80),randomize(5,6),randomize(29,37),randomize(15,16),randomize(40,49));
    let item406 = new Item(406,4,"Shield","Astral Shield","Magical",randomize(50,63),randomize(55,56),randomize(7,8),randomize(36,38),randomize(23,24),randomize(60,62));
    let item407 = new Item(407,4,"Shield","Expensive Magical Gift","Magical",randomize(30,35),randomize(90,92),randomize(5,6),randomize(55,60),randomize(17,20),randomize(50,51));
    let item408 = new Item(408,4,"Weapon","Court Wizard Wand","Magical",randomize(30,40),randomize(30,40),randomize(5,6),randomize(45,55),randomize(15,16),randomize(68,82));
    let item409 = new Item(409,4,"Helmet","Mysterious Tiara","Magical",randomize(80,82),randomize(67,70),randomize(5,6),randomize(21,33),randomize(20,21),randomize(33,36));
    let item410 = new Item(410,4,"Helmet","Crown of The Frozen Throne","Magical",randomize(50,60),randomize(120,155),randomize(20,35),randomize(20,35),randomize(15,16),randomize(25,35));
    let item411 = new Item(411,4,"Helmet","Undead Crown","Magical",randomize(110,120),randomize(30,35),randomize(50,52),randomize(10,11),randomize(30,40),randomize(10,11));
    let item412 = new Item(412,4,"Helmet","Berserker's Haubert","Magical",randomize(40,45),randomize(40,45),randomize(52,55),randomize(15,17),randomize(45,50),randomize(10,11));
    let item413 = new Item(413,4,"Shield","Royal Shield","Magical",randomize(90,120),randomize(35,40),randomize(30,42),randomize(15,17),randomize(60,62),randomize(10,11));
    let item414 = new Item(414,4,"Shield","War Blood Shield","Magical",randomize(70,95),randomize(50,52),randomize(52,55),randomize(15,17),randomize(45,50),randomize(3,5));
    let item415 = new Item(415,4,"Shield","Stolen Mage's Shield","Magical",randomize(50,52),randomize(120,130),randomize(28,32),randomize(4,6),randomize(27,29),randomize(25,35));
    let item416 = new Item(416,4,"Shield","Spell Block","Magical",randomize(70,75),randomize(110,120),randomize(24,25),randomize(15,17),randomize(22,26),randomize(45,55));
    let item417 = new Item(417,4,"Armor","Dragon Armor","Magical",randomize(60,65),randomize(136,150),randomize(23,25),randomize(15,17),randomize(30,50),randomize(25,35));
    let item418 = new Item(418,4,"Armor","Titan Armor","Magical",randomize(140,160),randomize(20,45),randomize(40,41),randomize(10,15),randomize(40,50),randomize(10,15));
    let item419 = new Item(419,4,"Armor","Fallen Knight's Armor","Magical",randomize(70,80),randomize(40,45),randomize(35,40),randomize(20,26),randomize(70,90),randomize(20,25));
    let item420 = new Item(420,4,"Armor","Magic Plate Armor","Magical",randomize(80,100),randomize(60,100),randomize(25,40),randomize(25,40),randomize(25,40),randomize(25,40));
    let item421 = new Item(421,4,"Armor","Sunfire Robe","Magical",randomize(60,70),randomize(120,130),randomize(10,15),randomize(60,65),randomize(15,25),randomize(30,31));
    let item422 = new Item(422,4,"Armor","Master Robe","Magical",randomize(80,100),randomize(80,110),randomize(3,5),randomize(20,35),randomize(15,25),randomize(70,90));
    let item423 = new Item(423,4,"Weapon","Sword Of Aura","Magical",randomize(80,100),randomize(90,110),randomize(30,40),randomize(20,22),randomize(7,13),randomize(30,40));
    let item424 = new Item(424,4,"Weapon","Elven Mage Sword","Magical",randomize(45,55),randomize(135,155),randomize(25,50),randomize(10,32),randomize(15,25),randomize(30,52));
    let item425 = new Item(425,4,"Weapon","Sword Of Cruelty","Magical",randomize(100,120),randomize(30,40),randomize(70,90),randomize(25,45),randomize(30,35),randomize(10,15));
    let item426 = new Item(426,4,"Weapon","Frozen Mace","Magical",randomize(120,130),randomize(10,20),randomize(85,100),randomize(10,13),randomize(19,25),randomize(10,11));
    //level 5 items
    let item500 = new Item(500,5,"Helmet","Greedy Conqueror's Crown","Legendary",randomize(160,240),randomize(90,150),randomize(60,100),randomize(40,65),randomize(85,125),randomize(30,50));
    let item501 = new Item(501,5,"Helmet","Mysterious Mask","Legendary",randomize(140,200),randomize(160,240),randomize(30,60),randomize(100,150),randomize(30,50),randomize(60,80));
    let item502 = new Item(502,5,"Helmet","Demon's Gaze","Legendary",randomize(130,180),randomize(30,100),randomize(130,160),randomize(30,45),randomize(40,60),randomize(15,30));
    let item503 = new Item(503,5,"Helmet","Crown of Ages","Legendary",randomize(100,200),randomize(200,300),randomize(35,60),randomize(80,130),randomize(30,50),randomize(130,170));
    let item504 = new Item(504,5,"Helmet","Crown of Anger","Legendary",randomize(160,240),randomize(160,250),randomize(45,65),randomize(20,35),randomize(25,35),randomize(80,120));
    let item505 = new Item(505,5,"Helmet","Helmet of the Apocalypse","Legendary",randomize(120,180),randomize(230,300),randomize(70,130),randomize(30,50),randomize(50,100),randomize(60,100));
    let item506 = new Item(506,5,"Weapon","Dragon Spear","Legendary",randomize(120,180),randomize(230,330),randomize(40,70),randomize(30,70),randomize(20,40),randomize(100,170));
    let item507 = new Item(507,5,"Weapon","Dulendar","Legendary",randomize(160,240),randomize(200,270),randomize(60,90),randomize(20,60),randomize(30,50),randomize(60,100));
    let item508 = new Item(508,5,"Weapon","Ancient Obsidian Axe","Legendary",randomize(200,300),randomize(140,260),randomize(110,145),randomize(20,60),randomize(20,100),randomize(20,50));
    let item509 = new Item(509,5,"Weapon","Gimli's Mallet","Legendary",randomize(170,240),randomize(120,180),randomize(130,210),randomize(20,50),randomize(50,80),randomize(20,50));
    let item510 = new Item(510,5,"Weapon","Rod Of Ages","Legendary",randomize(170,220),randomize(150,200),randomize(85,100),randomize(150,250),randomize(10,40),randomize(100,160));
    let item511 = new Item(511,5,"Weapon","Eon's Destruction","Legendary",randomize(130,200),randomize(180,270),randomize(20,50),randomize(50,90),randomize(10,40),randomize(150,250));
    let item512 = new Item(512,5,"Armor","War Leader's Armor","Legendary",randomize(220,320),randomize(100,160),randomize(65,90),randomize(20,60),randomize(90,140),randomize(20,50));
    let item513 = new Item(513,5,"Armor","Armor of the First General","Legendary",randomize(300,420),randomize(100,160),randomize(50,85),randomize(20,40),randomize(75,115),randomize(20,50));
    let item514 = new Item(514,5,"Armor","Ascended Light Armor","Legendary",randomize(165,235),randomize(220,320),randomize(25,65),randomize(120,169),randomize(30,70),randomize(70,130));
    let item515 = new Item(515,5,"Armor","War Archmage Armor","Legendary",randomize(140,270),randomize(200,300),randomize(85,100),randomize(70,110),randomize(30,70),randomize(140,190));
    let item516 = new Item(516,5,"Armor","Valhalla Conqueror's Armor","Legendary",randomize(150,250),randomize(270,370),randomize(70,120),randomize(20,50),randomize(60,95),randomize(60,100));
    let item517 = new Item(517,5,"Armor","Golden Dragon Armor","Legendary",randomize(150,250),randomize(380,520),randomize(50,85),randomize(30,55),randomize(50,80),randomize(40,70));
    let item518 = new Item(518,5,"Shield","Miracle Buckler","Legendary",randomize(170,260),randomize(130,260),randomize(70,135),randomize(30,50),randomize(65,95),randomize(50,80));
    let item519 = new Item(519,5,"Shield","Black Shield","Legendary",randomize(180,300),randomize(290,460),randomize(60,110),randomize(20,70),randomize(65,95),randomize(50,80));
    let item520 = new Item(520,5,"Shield","Berserker's Pride","Legendary",randomize(270,400),randomize(90,210),randomize(90,140),randomize(20,60),randomize(70,105),randomize(20,60));
    let item521 = new Item(521,5,"Shield","Evil Protection","Legendary",randomize(200,400),randomize(150,250),randomize(120,150),randomize(20,60),randomize(40,90),randomize(40,80));
    let item522 = new Item(522,5,"Shield","Archmage Symbol","Legendary",randomize(130,230),randomize(130,250),randomize(20,60),randomize(150,200),randomize(40,70),randomize(120,150));
    let item523 = new Item(523,5,"Shield","Necronomicon","Legendary",randomize(180,300),randomize(180,300),randomize(30,70),randomize(110,160),randomize(40,80),randomize(170,210));

    let itemsarray=[item417,item418,item419,item420,item421,item422,item423,item424,item425,item426,item500,item501,item502,item503,item504,item505,item506,item507,item508,item509,item510,item511,item512,item513,item514,item515,item516,item517,item518,item519,item520,item521,item522,item523];
/*drops decision*/
    switch(true)
    {
        //common
        case (randomNumber<=9500):
            let commonitemsarray=[item100,item101,item102,item103,item104,item105,item106,item107,item108,item109,item110,item111,item112,item113,item114,item115,item116,item117,item118,item119,item120,item121,item122,item123,item124,item125,item126,item127,item128,item129];
            randomizecommonitem = randomize(0,(commonitemsarray.length));
            console.log("randomize item:" + randomizecommonitem)
            droppedItem=commonitemsarray[randomizecommonitem];
            break;
            
        //uncommon
        case (randomNumber<=9830):
            let uncommonitemsarray=[item200,item201,item202,item203,item204,item205,item206,item207,item208,item209,item210,item211,item212,item213,item214,item215,item216,item217,item300,item301,item302,item303,item304,item305,item306,item307,item308,item309,item310,item311,item312,item313];
            console.log("randomize item:" + randomizeuncommonitem)
            randomizeuncommonitem = randomize(0,(uncommonitemsarray.length));
            droppedItem=uncommonitemsarray[randomizeuncommonitem];
            break;
            
        //magical
        case (randomNumber<=9960):
            let magicalitemsarray=[item400,item401,item402,item403,item404,item405,item406,item407,item408,item409,item410,item411,item412,item413,item414,item415,item416,item417,item418,item419,item420,item421,item422,item423,item424,item425,item426];
            console.log("randomize item:" + randomizemagicalitem)
            randomizemagicaltem = randomize(0,(magicalitemsarray.length));
            droppedItem=magicalitemsarray[randomizemagicaltem];
          break;
        //legendary
        case (randomNumber<=10000):
            let legendaryitemsarray=[item501,item502,item503,item504,item505,item506,item507,item508,item509,item510,item511,item512,item513,item514,item515,item516,item517,item518,item519,item520,item521,item522,item523];
            console.log("randomize item:" + randomizelegendaryitem)
            randomizelegendaryitem = randomize(0,(legendaryitemsarray.length));
            droppedItem=legendaryitemsarray[randomizelegendaryitem];
            break;
            
                            
    }
    console.log("randomNumber:" + randomNumber);
    console.log(droppedItem.itemType);
    console.log(droppedItem.itemName);
    console.log("--------------");
    compareItems(droppedItem.itemType);
    let getArena=document.querySelector(".arena");

    //DropTitleContainer
    getArena.innerHTML="<div class=\"dropTitleContainer\"><p>You've found </p><p id=\"droppedItemm\">" + 
    droppedItem.itemName + "</p>" + "<div class=\"itemTypeContainer\">" + droppedItem.itemType + 
    "<div><table><tr><td id=\"dropslot\"><img src=items/" + droppedItem.itemID + ".gif class=\"itemimage\"></td></table></div></div>" +
    
    //Statistics Container
    "<div class=\"statisticsContainer\"> <div><p><img src=icons/"+ itemHealthComparision +".png class=\"icons\"> HP: +" + droppedItem.health + "</p>" + "<p><img src=icons/"+ itemManaComparision +".png class=\"icons\"> MP: +" + droppedItem.mana + "</p>" + 
    "<p> <img src=icons/"+ itemStrengthComparision +".png class=\"icons\"> STR: +" + droppedItem.strength + "</p></div>" +
    "<div><p><img src=icons/"+ itemAgilityComparision +".png class=\"icons\"> AGI: +" + droppedItem.agility + "</p>" + 
    "<p> <img src=icons/"+ itemDefenceComparision +".png class=\"icons\"> DEF: +" + droppedItem.defence + "</p>" + 
    "<p> <img src=icons/"+ itemIntelligenceComparision +".png class=\"icons\"> INT: +" + droppedItem.intelligence + 
     "</p></div></div>"+

     //dropButtonsContainer
     "<div class=dropButtonsContainer> <a href=\"#\" class=\"btn-drop\" id=\"equip\" onclick=\"GameManager.EquipItem()\">Equip</a> <a href=\"#\" class=\"btn-drop\" id=\"drop\"onclick=\"GameManager.setLoot()\">Drop</a></div>";
     
     /* drop colours */
     switch(droppedItem.itemRarity)
     {
         case "Normal":
            document.getElementById("droppedItemm").style.color="white";
            document.getElementById("dropslot").style.borderColor="gray";
            document.getElementById("dropslot").style.boxShadow="0 0 6px #ffffff";
            break;
        case "Uncommon":
            document.getElementById("droppedItemm").style.color="#74c473";
            document.getElementById("dropslot").style.borderColor="#3f873e";
            document.getElementById("dropslot").style.boxShadow="0 0 6px #3f873e";
            break;
        case "Magical":
            document.getElementById("droppedItemm").style.color="#5c92f5";
            document.getElementById("dropslot").style.borderColor="#3e4587";
            document.getElementById("dropslot").style.boxShadow="0 0 6px #3e4587";
            break;
        case "Legendary":
            document.getElementById("droppedItemm").style.color="#b36d1d";
            document.getElementById("dropslot").style.borderColor="#b36d1d";
            document.getElementById("dropslot").style.boxShadow="0 0 6px #b36d1d";
            break;
     }
    
},

EquipItem: function(){
    //function to remove old and assign new item statistics
    changestatistics();
    calculateexperience();
//print interface
document.getElementById("playerinterface").style.border="12px solid #B88846";
let getinterface = document.querySelector(".interface");
let getequipment=document.querySelector(".equipment");

getinterface.innerHTML='<div id="playerStatisticsContainer"><h3>' + player.classType 
+ '</h3><p class="health-player"><img src=icons/health.png class="icons"> Health: ' + player.health +
 '</p><p><img src=icons/mana.png class="icons"> Mana: ' + player.mana + 
 '</p><p class="tooltip"><img src=icons/strength.png class="icons"> <span class="tooltiptext">Makes physical attacks stronger.</span> Strength: ' + player.strength +
 '</p><p class="tooltip"><img src=icons/agility.png class="icons"> <span class="tooltiptext">Decide whoever have the first attack, increase chance to dodge any kind of attack and to critically strike.</span> Agility: ' + player.agility + 
 '</p><p class="tooltip"><img src=icons/defence.png class="icons"> <span class="tooltiptext">Decreases damage taken by this amount.</span>Defence: ' + player.defence + 
 '</p><p class="tooltip"><img src=icons/intelligence.png class="icons"> <span class="tooltiptext">Makes spells deal more damage by this amount.</span>Intelligence: ' + player.intelligence + '</p></div>' +
 '<img src="avatar-player/' + 
 player.classType.toLowerCase() + '.jpg" class="img-avatar">';

 //bars
 getequipment.innerHTML=
 '<div class="bars">'+
 '<div class="health-bar" data-total="100" data-value='+player.health+'><div class="insidehealthbar" id="insidehealthbar"><div class="hit"></div></div></div>'+
 '<div class="mana-bar" data-total="50" data-value='+player.mana+'><div class="insidemanabar"><div class="hit"></div></div></div>'+
 '<div class="experience-bar" data-total="1000" data-value="40"><div class="insideexperiencebar"><div class="hit"></div></div></div>'+
 '</div>' +
 //inventory table
 '<div class=equipmentTable><table><tr><td class="characterslot"><img id="helmetimage" class="slot1" src=items/'+playerCurrentHelmetID+'.gif></td><td class="characterslot"><img id="armorimage" class="slot2" src=items/'+playerCurrentArmorID+'.gif></td></tr>'
 +'<tr><td class="characterslot"><img id="weaponimage" class="slot3" src=items/'+playerCurrentWeaponID+'.gif></td><td class="characterslot"><img id="shieldimage" class="slot4" src=items/'+playerCurrentShieldID+'.gif></td></tr></table></div>'
 //colour inventory borders
    colourinventory();
    
     GameManager.setLoot();
        }
}
