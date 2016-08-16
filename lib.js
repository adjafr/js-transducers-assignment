

function customer(orders, state) {
  return { orders, state }
}

function order(items, timeStamp) {
  return { items, timeStamp }
}

function item(name, price) {
  return { name, price }
}

/*
 *
 * @param state String name of a state.
 * @param startTime a Number representing a starting time.
 * @param endTime a Number representing an ending time.
 * @param customers an array of Customer objects.
 * @returns An Object of item names mapped to the total sales of that item
 *  in the given State and between the given startTime and endTime.
 */
function grossPerItemInState(state, startTime, endTime, customers) {

  const itemNames = {}

    customers.filter((customer) => {return(customer.state === state)})
        .forEach((customer) => {customer.orders
          .filter((orders) => {return (orders.timeStamp > startTime && orders.timeStamp < endTime)})
        .forEach((orders) => {orders.items
        .forEach((items) => {if(itemNames[items.name] === undefined){
          itemNames[items.name] = 0}itemNames[items.name]+=items.price
        })})})
        

        // customers.filter((customer) => {return(customer.state === state)})
        //     .forEach((customer) => {customer.orders
        //       .filter((orders) => {return (orders.timeStamp > startTime && orders.timeStamp < endTime)})
        //     .forEach((orders) => {orders.items
        //     .forEach((items) => {if(itemNames[items.name] === undefined){
        //       itemNames[items.name] = 0}itemNames[items.name]+=items.price
        //     })})})



    // customers.forEach(function (n) {customers[c.orders.filter((item) => {})] = customer(o, orders)}) //iterates over what is left in map
    // state.filter(function (orders) {return !== state} ) //iterates over all n
    // item.map(function (items) {return grossPerItemInState}) //iterates over what is left in filter

    //
    // for (customers i = 0; i < array.lencustomers; i++) {
    //   array[i]
    //   if (condition) {
    //
    //   }
    // }
    // if (timeStamp > startTime && timeStamp < endTime) {
    //   customers.reduce((sum, price) => {next, ...sum}, [])
    // }


  return { itemNames
    // wizz: 600
    // bang: 300
  }
}



module.exports = {
  customer,
  order,
  item,
  grossPerItemInState
}
