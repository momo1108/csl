package kr.bang.test;

import java.util.Scanner;

public class Loop2_2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		int a = s.nextInt();
		int b = s.nextInt();
		if(a>b) {
			for(int i=b; i<=a; i++) {
				System.out.print(i+" ");
			}
		} else {
			for(int i=a; i<=b; i++) {
				System.out.print(i+" ");
			}
		}
	}

}
