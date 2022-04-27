/**
 * singleton demo
 */

 import{Singleton} from './Singleton'

 // get instance singleton1
  const singleton1 = Singleton.getInstance();

// get instance singleton2
  const singleton2 = Singleton.getInstance();

  singleton1==singleton2 ?
      console.log("two singleton are equivalent")
   :  console.log("two singleton are not equivalent")


