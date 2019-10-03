package kr.bang.test;

import java.util.Scanner;

public class Loop2_1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		char alpha = s.next().charAt(0);
		for(int i=0; i<20; i++) {
			System.out.print(alpha);
		}
	}

}
