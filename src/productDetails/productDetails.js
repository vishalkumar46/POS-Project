
const ItemList = [
    {
        barCode: '01001',
        item: {
            name: 'Banana',
            Price: 0.99,
        }
    },
    {
        barCode: '01002',
        item: {
            name: 'Apple',
            Price: 1.30,
        }
    },
    {
        barCode: '01003',
        item: {
            name: 'Carrot',
            Price: 1.66,
        }
    },

];

let skuList = [];


function removeItemToCart(barCode) {
    skuList = skuList.filter((item) => item.barCode !== barCode);
    console.log(skuList);
    cartTotal();
}


function addItemToCart(barCode) {
    ItemList.forEach((sku) => {
        if (sku.barCode == barCode) {

            skuList.push(sku);
            console.log('skuList', skuList);
        }
    })
    cartTotal();
}

function cartTotal() {
    // 1 x Apple @1.30 = 1.30

    // 2 x Banana @0.99 = 1.98

    // 3 x Carrot @1.66 = 4.98
    let newElement = '<div>Final Bill </div>';

    // function getCount(barCode) {
    //     if (skuList.indexOf(barCode) > -1) {
    //         itemCount += 1;
    //     }
    // }

    skuList.forEach((sku) => {
        const counts = {};
        counts[sku.barCode] = (counts[sku.barCode] || 0) + 1;

        console.log('counts', counts);
        newElement += `<div id=${sku.item.name}>${counts[sku.barCode]} * ${sku.item.name} @${sku.item.Price} = ${sku.item.Price * counts[sku.barCode]}</div>`;
    })
    let total = skuList.reduce((acc, item) => acc + item.item.Price, 0);
    console.log('total', total);
    console.log('newElement', newElement);
    return [total, newElement];


}

module.exports = {
    ItemList,
    cartTotal,
    addItemToCart,
    removeItemToCart,
    skuList
}
