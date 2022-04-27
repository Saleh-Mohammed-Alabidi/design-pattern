
export class Singleton{

    private static singleton: Singleton;

    public static getInstance() :Singleton {

        if(this.singleton!=null)
           this.singleton=new Singleton();
           
          return this.singleton;
    }
}