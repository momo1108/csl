package kr.bang.test;

import java.util.Scanner;

public class Loop3_4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		int a = s.nextInt();
		int b = 1;
		int c;
		while(true) {
			c = a * b;
			if(c>100) break;
			if(c == c/10*10) {
				System.out.printf("%d ",c);
				break;
			}
			System.out.printf("%d ",c);
			b++;
		}
	}

}
