// Use this sample to create your own voice commands
intent("(hello)", p => {
    p.play('(hello and welcome to Just Try It Hope you will love our service)');
});
intent("(checkout|try it out|let's try|try on)", p => {
    p.play('(Sure! Preparing Virtual Room For You)');
    p.play({command: 'check-out'});
});
intent("(upload own product|own product|upload)", p => {
    p.play('(Sure! Why Not)');
    p.play({command: 'upload-own'});
});
intent("(add to try on list|add|add to list)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'add-tryon'});
});
intent("(add ORRA Diamond necklace to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'orra'});
});
intent("(add Antique gold necklace to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'antique'});
});
intent("(add to Pendant necklace to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'pendant'});
});
intent("(add Pearl Emerald Diamond necklace to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'pearl'});
});
intent("(add Layered bobble chain to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'bobble'});
});
intent("(add Autumn floral earrings to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'autumn'});
});
intent("(add Round gold plated blue stone earrings to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'round'});
});
intent("(add Silver sapphire blue earrings to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'silver'});
});
intent("(add Studded long earrings to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'studded'});
});
intent("(add The Geometric elegance to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'elegance'});
});
intent("(add Red Tassel earrings to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'tassel'});
});
intent("(add Purple orchid tiara to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'orchid'});
});
intent("(add Flower crown to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'flower'});
});
intent("(add Evicha white flower tiara to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'evicha'});
});
intent("(add Pink nylon bucket hat to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'nylon'});
});
intent("(add Fabric pink rose tiara to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'pinkrose'});
});
intent("(add Multicoloured tiara to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'multicoloured'});
});
intent("(add Premium cotton polo collar t-shirt to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'polo'});
});
intent("(add Short sleeve fashionable t-shirt to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'short'});
});
intent("(add Girls cotton half sleeve printed t-shirts to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'cotton'});
});
intent("(add Designer t-shirt to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'designer'});
});
intent("(add Plain orange t-shirt to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'orange'});
});
intent("(add Plain white t-shirt to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'white'});
});
intent("(add Summer style emoji dress to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'emoji'});
});
intent("(add Delight floral printed dress to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'delight'});
});
intent("(add Emoji dress to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'emojidress'});
});
intent("(add London bouquet of love mini dress to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'bouquet'});
});
intent("(add Women's surplice neck floral printed to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'surplice'});
});
intent("(add to try on list|add|add to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'g1'});
});
intent("(add to try on list|add|add to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'g2'});
});
intent("(add to try on list|add|add to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'g3'});
});
intent("(add to try on list|add|add to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'g4'});
});
intent("(add to try on list|add|add to cart)", p => {
    p.play('(Item added to Try On list)');
    p.play({command: 'g5'});
});
