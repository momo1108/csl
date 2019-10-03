package kr.bang.stepup;

import java.util.Scanner;

public class StarTri {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		int m = s.nextInt();
		String star = "*"; 
		if(n<1 || n>100 || m<1 || m>3) System.out.println("INPUT ERROR!");
		else {
			switch(m) {
				case 1:
					for(int i=0; i<n; i++) {
						for(int j=0; j<=i; j++) {
							System.out.print("*");
						}
						System.out.println();
					}
					break;
				case 2:
					for(int i=0; i<n; i++) {
						for(int j=0; j<n-i; j++) {
							System.out.print("*");
						}
						System.out.println();
					}
					break;
				case 3:
					for(int i=0; i<n; i++) {
						for(int j=0; j<n-i-1; j++) {
							System.out.print(" ");
						}
						System.out.print(star);
						System.out.println();
						star += "**";
					}
					break;
			}
		}
	}
}
