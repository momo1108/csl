package kr.bang.test;

import java.util.Scanner;

public class Array2_5 {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		int[][][] arr = new int[2][2][4];
		for(int i=0; i<3; i++) {
			if(i==0) {
				System.out.println("first array");
			}
			else if(i==1) {
				System.out.println("second array");
			} else {
				for(int j=0; j<2; j++) {
					for(int k=0; k<4; k++) {
						System.out.printf("%d ",arr[0][j][k]*arr[1][j][k]);
					}
					System.out.println();
				}
				break;
			}
			for(int j=0; j<2; j++) {
				for(int k=0; k<4; k++) {
					arr[i][j][k] = s.nextInt();
				}
			}
		}
	}
}
