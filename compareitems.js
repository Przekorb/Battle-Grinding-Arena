var compareItems=function(itemType)
{
    if (itemType=="Weapon")
    {
        if (droppedItem.health>CurrentWeaponHealth)
        {itemHealthComparision="plus";}
        else if (droppedItem.health==CurrentWeaponHealth)
        {itemHealthComparision="dot";}
        else if (droppedItem.health<CurrentWeaponHealth)
        {itemHealthComparision="minus";}

        if (droppedItem.mana>CurrentWeaponMana)
        {itemManaComparision="plus";}
        else if (droppedItem.mana==CurrentWeaponMana)
        {itemManaComparision="dot";}
        else if (droppedItem.mana<CurrentWeaponMana)
        {itemManaComparision="minus";}

        if (droppedItem.defence>CurrentWeaponDefence)
        {itemDefenceComparision="plus";}
        else if (droppedItem.defence==CurrentWeaponDefence)
        {itemDefenceComparision="dot";}
        else if (droppedItem.defence<CurrentWeaponDefence)
        {itemDefenceComparision="minus";}

        if (droppedItem.agility>CurrentWeaponAgility)
        {itemAgilityComparision="plus";}
        else if (droppedItem.agility==CurrentWeaponAgility)
        {itemAgilityComparision="dot";}
        else if (droppedItem.agility<CurrentWeaponAgility)
        {itemAgilityComparision="minus";}

        if (droppedItem.strength>CurrentWeaponStrength)
        {itemStrengthComparision="plus";}
        else if (droppedItem.strength==CurrentWeaponStrength)
        {
        itemStrengthComparision="dot";
        }
        else if (droppedItem.strength<CurrentWeaponStrength)
        {itemStrengthComparision="minus";}

        if (droppedItem.intelligence>CurrentWeaponIntelligence)
        {itemIntelligenceComparision="plus";}
        else if (droppedItem.intelligence==CurrentWeaponIntelligence)
        {itemIntelligenceComparision="dot";}
        else if (droppedItem.intelligence<CurrentWeaponIntelligence)
        {itemIntelligenceComparision="minus";}
        
    }

    if (itemType=="Armor")
    {
        if (droppedItem.health>CurrentArmorHealth)
        {itemHealthComparision="plus";}
        else if (droppedItem.health==CurrentArmorHealth)
        {itemHealthComparision="dot";}
        else if (droppedItem.health<CurrentArmorHealth)
        {itemHealthComparision="minus";}

        if (droppedItem.mana>CurrentArmorMana)
        {itemManaComparision="plus";}
        else if (droppedItem.mana==CurrentArmorMana)
        {itemManaComparision="dot";}
        else if (droppedItem.mana<CurrentArmorMana)
        {itemManaComparision="minus";}

        if (droppedItem.defence>CurrentArmorDefence)
        {itemDefenceComparision="plus";}
        else if (droppedItem.defence==CurrentArmorDefence)
        {itemDefenceComparision="dot";}
        else if (droppedItem.defence<CurrentArmorDefence)
        {itemDefenceComparision="minus";}

        if (droppedItem.agility>CurrentArmorAgility)
        {itemAgilityComparision="plus";}
        else if (droppedItem.agility==CurrentArmorAgility)
        {itemAgilityComparision="dot";}
        else if (droppedItem.agility<CurrentArmorAgility)
        {itemAgilityComparision="minus";}

        if (droppedItem.strength>CurrentArmorStrength)
        {itemStrengthComparision="plus";}
        else if (droppedItem.strength==CurrentArmorStrength)
        {itemStrengthComparision="dot";}
        else if (droppedItem.strength<CurrentArmorStrength)
        {itemStrengthComparision="minus";}

        if (droppedItem.intelligence>CurrentArmorIntelligence)
        {itemIntelligenceComparision="plus";}
        else if (droppedItem.intelligence==CurrentArmorIntelligence)
        {itemIntelligenceComparision="dot";}
        else if (droppedItem.intelligence<CurrentArmorIntelligence)
        {itemIntelligenceComparision="minus";}
        
    }
    if (itemType=="Shield")
    {
        if (droppedItem.health>CurrentShieldHealth)
        {itemHealthComparision="plus";}
        else if (droppedItem.health==CurrentShieldHealth)
        {itemHealthComparision="dot";}
        else if (droppedItem.health<CurrentShieldHealth)
        {itemHealthComparision="minus";}

        if (droppedItem.mana>CurrentShieldMana)
        {itemManaComparision="plus";}
        else if (droppedItem.mana==CurrentShieldMana)
        {itemManaComparision="dot";}
        else if (droppedItem.mana<CurrentShieldMana)
        {itemManaComparision="minus";}

        if (droppedItem.defence>CurrentShieldDefence)
        {itemDefenceComparision="plus";}
        else if (droppedItem.defence==CurrentShieldDefence)
        {itemDefenceComparision="dot";}
        else if (droppedItem.defence<CurrentShieldDefence)
        {itemDefenceComparision="minus";}

        if (droppedItem.agility>CurrentShieldAgility)
        {itemAgilityComparision="plus";}
        else if (droppedItem.agility==CurrentShieldAgility)
        {itemAgilityComparision="dot";}
        else if (droppedItem.agility<CurrentShieldAgility)
        {itemAgilityComparision="minus";}

        if (droppedItem.strength>CurrentShieldStrength)
        {itemStrengthComparision="plus";}
        else if (droppedItem.strength==CurrentShieldStrength)
        {itemStrengthComparision="dot";}
        else if (droppedItem.strength<CurrentShieldStrength)
        {itemStrengthComparision="minus";}

        if (droppedItem.intelligence>CurrentShieldIntelligence)
        {itemIntelligenceComparision="plus";}
        else if (droppedItem.intelligence==CurrentShieldIntelligence)
        {itemIntelligenceComparision="dot";}
        else if (droppedItem.intelligence<CurrentShieldIntelligence)
        {itemIntelligenceComparision="minus";}
        
    }
    if (itemType=="Helmet")
    {
        if (droppedItem.health>CurrentHelmetHealth)
        {itemHealthComparision="plus";}
        else if (droppedItem.health==CurrentHelmetHealth)
        {itemHealthComparision="dot";}
        else if (droppedItem.health<CurrentHelmetHealth)
        {itemHealthComparision="minus";}

        if (droppedItem.mana>CurrentHelmetMana)
        {itemManaComparision="plus";}
        else if (droppedItem.mana==CurrentHelmetMana)
        {itemManaComparision="dot";}
        else if (droppedItem.mana<CurrentHelmetMana)
        {itemManaComparision="minus";}

        if (droppedItem.defence>CurrentHelmetDefence)
        {itemDefenceComparision="plus";}
        else if (droppedItem.defence==CurrentHelmetDefence)
        {itemDefenceComparision="dot";}
        else if (droppedItem.defence<CurrentHelmetDefence)
        {itemDefenceComparision="minus";}

        if (droppedItem.agility>CurrentHelmetAgility)
        {itemAgilityComparision="plus";}
        else if (droppedItem.agility==CurrentHelmetAgility)
        {itemAgilityComparision="dot";}
        else if (droppedItem.agility<CurrentHelmetAgility)
        {itemAgilityComparision="minus";}

        if (droppedItem.strength>CurrentHelmetStrength)
        {itemStrengthComparision="plus";}
        else if (droppedItem.strength==CurrentHelmetStrength)
        {itemStrengthComparision="dot";}
        else if (droppedItem.strength<CurrentHelmetStrength)
        {itemStrengthComparision="minus";}

        if (droppedItem.intelligence>CurrentHelmetIntelligence)
        {itemIntelligenceComparision="plus";}
        else if (droppedItem.intelligence==CurrentHelmetIntelligence)
        {itemIntelligenceComparision="dot";}
        else if (droppedItem.intelligence<CurrentHelmetIntelligence)
        {itemIntelligenceComparision="minus";}
        
    }
}