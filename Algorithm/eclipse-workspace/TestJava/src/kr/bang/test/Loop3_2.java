package kr.bang.test;

import java.util.Scanner;

public class Loop3_2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		String x = "*";
		for(int i=0; i<n; i++) {
			System.out.println(x);
			x+="*";
		}
	}

}
