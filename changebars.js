var changebars=function(totaldamage)
{
    $(document).ready(function(){
        hBar=$('.health-bar'),
        bar=hBar.find('.insidehealthbar');

        mBar=$('.mana-bar');
        manabar=mBar.find('.insidemanabar');

        var totalHealth = hBar.data('total');
        
        var newHealthValue=player.health-totaldamage;
        console.log(newHealthValue);
        var barWidth= (player.health / totalHealth) * 100;
        console.log("barwidth: " +barWidth);
        bar.css('width', barWidth + "%");
        
    });
}