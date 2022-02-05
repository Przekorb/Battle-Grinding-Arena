var droprange=29;
var calculateexperience=function()
{
    player.experience = 0.1*player.health+0.1*player.mana+0.2*player.strength + 0.2*player.intelligence + 0.2*player.agility +0.2*player.defence;
    player.level=1;
    droprange=1;
    
    if (player.experience>=62)
    {
    player.level=2;
    droprange=34;
    }
    if (player.experience>=85)
    {
        player.level=3;
        droprange=40;
    }
    if (player.experience>=90)
    {player.level=4;}
    if (player.experience>=105)
    {player.level=5;}
}