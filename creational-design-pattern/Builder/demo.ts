import{User, UserBuilder} from './builder'

var u: User = new UserBuilder("Saleh")
                        .setAge(10)
                        .setAddress("test address")
                        .build();
    		console.log(u.Name + " " + u.Age + " " + u.Phone + " " + u.Address);

