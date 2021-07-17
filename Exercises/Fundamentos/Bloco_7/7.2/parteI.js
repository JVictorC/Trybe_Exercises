const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  /*"Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701". */
  const name = order.name
  const phoneNumber = order.phoneNumber
  const address = order.address
  const orderObject = order.order

  console.log(`Olá ${orderObject.delivery.deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${address.street}, Nª ${address.number}, AP: ${address.apartment}`);




}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  // "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."

  const orderObject = order.order;
  let drinks = orderObject.drinks.coke
  drinksType = Object.values(drinks);
  const deliveryPrice= orderObject.delivery.price
  let total = order.payment
  total = Object.values(total);
  let pizza = orderObject.pizza
  pizza = Object.keys(pizza);

  const text = `Olá ${order.name}, o total do pedido de ${pizza[0]}, ${pizza[1]} e ${drinksType[0]} é R$ ${total[0]}`
  
  console.log(text);

}

orderModifier(order);