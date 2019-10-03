package kr.bang.test;

import java.util.Scanner;

public class Condition2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		int ageA;
		int ageB;
		ageA = s.nextInt();
		ageB = s.nextInt();
		int gap;
		if(ageA>ageB) {
			gap = ageA - ageB;
			System.out.println("A > B ... "+gap);
		} else {
			gap = ageB - ageA;
			System.out.println("A < B ... "+gap);
		}
	}

}
