// Set up function to simply attempt to run another function
function test(cb, arg) {
    // We will try to do the work inside of cb first
    try {
        cb(arg)
    }
    // If an error is thrown we will be able to handle it. Err is referring to the error we manually threw inside of cb.
    catch (err) {
        console.log(err)
    }
    // This will console.log no matter what
    console.log("If you didn't pass in 2, there will be error output above")
  }
  
  
  function returnTwo(arg) {
    //   If arg is anything except 2, we'll throw a custom error
    if (arg !== 2) {
        // We are using the built in Error class to return a custom error
        throw new Error("The argument provided is not the number 2")
    } else {
        // If we make it past the if check, we will simply return 2
        return arg
    }
  }
  
//   Will run fine
  test(returnTwo, 2)
//   Will throw us the error we defined.
  test(returnTwo, 3)