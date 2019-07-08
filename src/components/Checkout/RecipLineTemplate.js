import {
    AppTitle,
    Prompay
} from '../../config';

const numberWithCommas = x => {
    let parts = x.toString().split('.');
    if (parts[1] === '00') {
    } else if (parts[1] === undefined) {
      x = `${x}.00`;
      parts = x.toString().split('.');
    } else if (Number(parts[1]) < 10) {
      parts[1] = `${parts[1]}0`; //edit
    }
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  };
  
  const productSubtotoalCal = product => {
    let amount = Number(product.amount);
    let price = Number(product.price);
    return amount * price;
  };
  
  const productAllTotalCal = products => {
    let result = 0;
    products.forEach(product => {
      result = result + productSubtotoalCal(product);
    });
  
    return result;
  };

const renderItems = (cart) => {
    const recipes =  cart.map(product => {
        return {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: `${product.title} ${product.amount} ${product.unit} X ฿${product.price}`,
                size: 'sm',
                color: '#555555',
                flex: 0
              },
              {
                type: 'text',
                text: `฿${numberWithCommas(productSubtotoalCal(product))}`,
                size: 'sm',
                color: '#111111',
                align: 'end'
              }
            ]
          }
    });

    recipes.push({
        type: 'box',
        layout: 'horizontal',
        margin: 'xxl',
        contents: [
          {
            type: 'text',
            text: 'ยอดรวม',
            weight: 'bold',
            size: 'sm',
            color: '#555555',
            flex: 0
          },
          {
            type: 'text',
            text: `฿${numberWithCommas(productAllTotalCal(cart))}`,
            size: 'sm',
            color: '#111111',
            align: 'end'
          }
        ]
      })

    return recipes;
}

export const genRecipeLineTemplate =  (cart) => {
    return {
        type: 'bubble',
        styles: {
          footer: {
            separator: true
          }
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'RECEIPT',
              weight: 'bold',
              color: '#1DB446',
              size: 'sm'
            },
            {
              type: 'text',
              text: AppTitle,
              weight: 'bold',
              size: 'xxl',
              margin: 'md'
            },
            // {
            //   type: 'text',
            //   text: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
            //   size: 'xs',
            //   color: '#aaaaaa',
            //   wrap: true
            // },
            {
              type: 'separator',
              margin: 'xxl'
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'xxl',
              spacing: 'sm',
              contents: renderItems(cart)
            },
            {
              type: 'separator',
              margin: 'xxl'
            },
            {
                type: 'box',
                layout: 'horizontal',
                margin: 'md',
                contents: [
                  {
                    type: 'text',
                    text: 'โอนเงิน',
                    size: 'xs',
                    color: '#555555',
                    weight: 'bold',
                    flex: 0
                  }
                ]
              },
            {
              type: 'box',
              layout: 'horizontal',
              margin: 'md',
              contents: [
                {
                  type: 'text',
                  text: 'Prompay',
                  size: 'xs',
                  color: '#555555',
                  flex: 0
                },
                {
                  type: 'text',
                  text: Prompay.tel,
                  color: '#555555',
                  size: 'xs',
                  align: 'end'
                }
              ]
            },
            {
                type: 'box',
                layout: 'horizontal',
                margin: 'md',
                contents: [
                  {
                    type: 'text',
                    text: `คุณ ${Prompay.name}`,
                    size: 'xs',
                    color: '#555555',
                    flex: 0
                  }
                ]
              }
          ]
        }
      }
}