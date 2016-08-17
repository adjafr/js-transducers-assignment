

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

        return { itemNames
          // wizz: 600
          // bang: 300

        }
      }

      function grossPerItemInSate (state, startTime, endTime, customers) {

        return customers
          .filter( custom => custom.state === state)
          .reduce( flatMap(customer => customer.orders), [])
          .filter( custom => custom.timeStamp >= startTime && custom.timeStamp <= entTime)
          .reduce( flatMap(order => order.items), [])
          .reduce( groupBy(0 , (a,b) =>a + b )( item => item.name , item => item.price ),{}) //item => item.name , item => item.price, 0 , (mapperAElement, mapperBElement) => mapperAElement + mapperBElement),{})
      }


          function groupBy(mapperA, mapperB, initV, typeFunc) {
            return function doMap(toKey, toValue){
            return function (sum, element) {
              const key = toKey(element)
              const value = toValue(element)

              if(group[Key] === undefined)
              {
                group[Key] = initV
              }
              group[key] = combine(group[key], value)
              return sum
            }
          }
}

          const flatMap = (mapper) =>
            (sum, element) =>
              [...sum,...mapper(element)]

          module.exports = {
            customer,
            order,
            item,
            grossPerItemInState
          }

//reduce method returns some and next and executes that on a series of

//.reduce(Sum, next)=>[...sum, ...next] // the original code
//.reduce(Function(order, element) {return[...orders,...mapper(element)]}) stick return function into the original
//.reduce(Function(order,element){return{...orders, ...(customers)Customer.orders),[]) map apart being put into the flatmap being put into the orignial
//}})
//Passing a function of a function that returns it into a function

      // function flatMap (mapper) { //flatMap takes a function and then returns a function and then reduce uses that function to return an array (flattens the array)
      //   return function (orders, element) {
      //     return [...orders, ...mapper(element)]
      //   }
      // }
//
// const mapCombine =
//   combiner =>
//     mapper =>
//       (sum, element) =>
//         combiner(sum, mapper(element))
//
// const flatMap = mapCombine((arr1, arr2) => [...arr1, ...arr2])
//   //mapper => (sum, element) => [...sum, ...mapper(element)]
//   const objFlat = mapCombine((obj1, obj2) => {
//
//
// const customerFlat = // flatMap(customer => customer.orders)
//   (arr, elem) => [...arr, ...elem.orders]
//
//   const orderFlat = // flatMap(customer => customer.orders)
//     (arr, elem) => [...arr, ...elem.items]

//everything after flatMap gets returned to flatMap








// const namePrice = mapCombine((arr1, arr2) => [...item.name,...item.price])
// mapper => (sum, customer.item.name) => [...sum,...mapper(price)]
// const endFlat = mapCombine(name, price) =>
//
// const employeeCombiner = mapCombine((arr1, arr2)) => [...arr1,...arr2])
//   mapper => (sum, employee.manager.name) => [sum,...mapper(managerName)]
//   const employeeFlat = mapCombine((employee, managerName) =>{)}
//   {
//
// const nameFlat = flatMap(item => item.name)
//   (arr, name) => [...arr, ...item.name]
//
// const priceFlat = flatMap(item => item.price)
//   (arr, price) => [...arr, ...item.price]
//   }




    // const function itemName(item) {
    //   return item.name
    //}

//original class code
      // function grossPerItemInSate (state, startTime, endTime, customers) {
      //   return customers
      //     .filter(customer => customer.state === state)
      //     .reduce(mapCombine((arr1, arr2) => [...arr1,...arr2])(customer => customer.orders),
      //     .filter(order => startTime <= order.timeStamp && order.timeStamp <= endTime)
      //     .reduce(flatMap(orderFlat), [])
      //     .reduce(
      //       (gross, item) => {
      //         if (gross[item.name] === undefined) {
      //           gross[item.name] = 0
      //         }
      //         gross[item.name] += item.price
      //         return gross
      //     },
      //     {}
      //   )

  //      elem.items //return elem.items or (elem) =>
    //  }

    // function grossPerItemInSate (state, startTime, endTime, customers) {
    //   return customers
    //     .filter(customer => customer.state === state)
    //     .reduce((flatMap(customer => customer.orders), [])
    //     .filter(order => startTime <= order.timeStamp && order.timeStamp <= endTime)
    //     .reduce(flatMap(order => order.items), [])
    //     .reduce(
    //       (gross, item) => {
    //         if (gross[item.name] === undefined) {
    //           gross[item.name] = 0
    //         }
    //         gross[item.name] += item.price
    //         return gross
    //     },
    //     {}
    //   )

      // const mapReduceArrays =
      //   (mapper, customers) =>
      //     array
      //       .map(mapper)
      //       .reduce((sum, next) => [...sum, ...next], [])




        // module.exports = {
        //   customer,
        //   order,
        //   item,
        //   grossPerItemInState
        // }


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
