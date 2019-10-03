package kr.bang.stepup;

import java.util.Scanner;

public class NumRect {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		int a = s.nextInt();
		int b = s.nextInt();
		int num = 1;
		for(int i=0; i<a; i++) {
			for(int j=0; j<b; j++) {
				System.out.printf("%d ",num++);
			}
			System.out.println();
		}
	}
}
