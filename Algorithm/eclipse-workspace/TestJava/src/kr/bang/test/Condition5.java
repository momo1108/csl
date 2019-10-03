package kr.bang.test;

import java.util.Scanner;

public class Condition5 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int num;
		Scanner s = new Scanner(System.in);
		num = s.nextInt();
		if(num>0) System.out.println("plus");
		else if(num==0) System.out.println("zero");
		else System.out.println("minus");
	}

}
