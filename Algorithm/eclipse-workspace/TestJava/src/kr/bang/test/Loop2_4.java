package kr.bang.test;

import java.util.Scanner;

public class Loop2_4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		int a = s.nextInt();
		int b = s.nextInt();
		for(int i=a; i<=b; i+=2) {
			System.out.print(i+" ");
		}
		System.out.println();
		for(int i=b; i>=a; i-=2) {
			System.out.print(i+" ");
		}
	}

}
