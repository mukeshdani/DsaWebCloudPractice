//How to create custom exception

class AgeInvalidException extends Exception{
         AgeInvalidException(){
            super("Age is invalid !!!");
         }
         AgeInvalidException(String str){
            super(str);
         }
}

class Example{
    public static void main(String[] args){
        System.out.println("Starting.......................");
        try{
            int n1 = Integer.parseInt(args[0]);
            int n2 = Integer.parseInt(args[1]);
            System.out.println("We have got two number");
            int result = (int) n1/n2;

            if(n2<10){
                throw new AgeInvalidException("My age is Invalid");
            }
            System.out.println("Division is " + result);
        }catch(AgeInvalidException e){
            System.out.println("age is Invalid!!!");
            System.out.println(e.getMessage());
        }
        catch(ArithmeticException e){
            System.out.println("n2 can not be 0!!!!");
            System.out.println(e.getMessage());
        }catch(NumberFormatException e){
            System.out.println("Invalid Number!!!!");
            System.out.println(e.getMessage());
        }catch(IndexOutOfBoundsException e){
            System.out.println("IndexOutOfBoundsException!!!!");
            System.out.println(e.getMessage());
        }catch(Exception e){
            System.out.println("Error!!!!");
            System.out.println(e.getMessage());
        }
        finally{
            //always gets executed
            System.out.println("I am in finally block......");
        }
        System.out.println("Terminated.................");
    }
}