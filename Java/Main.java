class Main {

  public String [] nemo = {"nemo"};

  public void findNemo(String[] arry){

    for(String nemo : arry){
      if(nemo.equals("nemo"))
      System.out.println("Found NEMO! _Java");
    }
  };


  public static void main(String[] args) {
    Main main = new Main();
    main.findNemo(main.nemo);
  }
}