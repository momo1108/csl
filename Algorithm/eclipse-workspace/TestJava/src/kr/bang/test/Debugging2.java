package kr.bang.test;

import java.util.Scanner;

public class Debugging2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		int[] numArr;
		numArr = new int[3];
		for(int i=0; i<3; i++) {
			numArr[i] = s.nextInt();
		}
		double avgDouble=0;
		for(int e : numArr) {
			avgDouble += e;
		}
		avgDouble /= 3;
		System.out.println(String.format("%.1f", avgDouble));
	}

}
