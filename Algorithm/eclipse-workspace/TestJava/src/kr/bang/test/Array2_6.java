package kr.bang.test;

import java.util.Scanner;

public class Array2_6 {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		int[][] arr = new int[5][4];
		int sum, pass=0;
		String[] result = new String[5];
		for(int i=0; i<5; i++) {
			sum=0;
			for(int j=0; j<4; j++) {
				arr[i][j] = s.nextInt();
				sum += arr[i][j]; 
			}
			if(sum/4>=80) {
				result[i] = "pass";
				pass++;
			}
			else result[i] = "fail";
		}
		for(String x : result) {
			System.out.println(x);
		}
		System.out.printf("Successful : %d",pass);
	}
}
