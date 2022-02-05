var changestatistics=function()
{
    player.health=player.health+droppedItem.health;
    player.mana=player.mana+droppedItem.mana;
    player.strength=player.strength+droppedItem.strength;
    player.agility=player.agility+droppedItem.agility;
    player.intelligence=player.intelligence+droppedItem.intelligence;
    player.defence=player.defence+droppedItem.defence;
    switch (droppedItem.itemType)
    {
    case "Weapon":
        playerCurrentWeaponRarity=droppedItem.itemRarity;
        playerCurrentWeaponID=droppedItem.itemID;
        player.weapon=droppedItem.itemName;
        player.health=player.health-CurrentWeaponHealth;
        player.mana=player.mana-CurrentWeaponMana;
        player.strength=player.strength-CurrentWeaponStrength;
        player.agility=player.agility-CurrentWeaponAgility;
        player.intelligence=player.intelligence-CurrentWeaponIntelligence;
        player.defence=player.defence-CurrentWeaponDefence;
        CurrentWeaponHealth=droppedItem.health;
        CurrentWeaponMana=droppedItem.mana;
        CurrentWeaponStrength=droppedItem.strength;
        CurrentWeaponAgility=droppedItem.agility;
        CurrentWeaponIntelligence=droppedItem.intelligence;
        CurrentWeaponDefence=droppedItem.defence;
        break;
    case "Armor":
        playerCurrentArmorRarity=droppedItem.itemRarity;
        playerCurrentArmorID=droppedItem.itemID;
        player.armor=droppedItem.itemName;
        player.health=player.health-CurrentArmorHealth;
        player.mana=player.mana-CurrentArmorMana;
        player.strength=player.strength-CurrentArmorStrength;
        player.agility=player.agility-CurrentArmorAgility;
        player.intelligence=player.intelligence-CurrentArmorIntelligence;
        player.defence=player.defence-CurrentArmorDefence;
        CurrentArmorHealth=droppedItem.health;
        CurrentArmorMana=droppedItem.mana;
        CurrentArmorStrength=droppedItem.strength;
        CurrentArmorAgility=droppedItem.agility;
        CurrentArmorIntelligence=droppedItem.intelligence;
        CurrentArmorDefence=droppedItem.defence;
    
        break;
    case "Helmet":
        playerCurrentHelmetRarity=droppedItem.itemRarity;
        playerCurrentHelmetID=droppedItem.itemID;
        player.helmet=droppedItem.itemName
        player.health=player.health-CurrentHelmetHealth;
        player.mana=player.mana-CurrentHelmetMana;
        player.strength=player.strength-CurrentHelmetStrength;
        player.agility=player.agility-CurrentHelmetAgility;
        player.intelligence=player.intelligence-CurrentHelmetIntelligence;
        player.defence=player.defence-CurrentHelmetDefence;
        CurrentHelmetHealth=droppedItem.health;
        CurrentHelmetMana=droppedItem.mana;
        CurrentHelmetStrength=droppedItem.strength;
        CurrentHelmetAgility=droppedItem.agility;
        CurrentHelmetIntelligence=droppedItem.intelligence;
        CurrentHelmetDefence=droppedItem.defence;
        break;
    case "Shield":
        playerCurrentShieldRarity=droppedItem.itemRarity;
        playerCurrentShieldID=droppedItem.itemID;
        player.shield=droppedItem.itemName
        player.health=player.health-CurrentShieldHealth;
        player.mana=player.mana-CurrentShieldMana;
        player.strength=player.strength-CurrentShieldStrength;
        player.agility=player.agility-CurrentShieldAgility;
        player.intelligence=player.intelligence-CurrentShieldIntelligence;
        player.defence=player.defence-CurrentShieldDefence;
        CurrentShieldHealth=droppedItem.health;
        CurrentShieldMana=droppedItem.mana;
        CurrentShieldStrength=droppedItem.strength;
        CurrentShieldAgility=droppedItem.agility;
        CurrentShieldIntelligence=droppedItem.intelligence;
        CurrentShieldDefence=droppedItem.defence;
        break;            
    }
    
}