package kr.bang.test;

import java.util.Scanner;

public class Debugging1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		double first;
		double second;
		double timesDouble;
		int timesInt;
		Scanner s = new Scanner(System.in);
		first = s.nextDouble();
		second = s.nextDouble();
		timesDouble = first * second;
		timesInt = (int)first * (int)second;
		System.out.println((int)timesDouble+" "+timesInt);
	}

}
