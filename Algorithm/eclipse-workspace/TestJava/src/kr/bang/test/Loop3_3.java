package kr.bang.test;

import java.util.Scanner;

public class Loop3_3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		int[] numArr = new int[20];
		int sum = 0;
		int i=0;
		for(;i<20; i++) {
			numArr[i] = s.nextInt();
			if(numArr[i]==0) break;
		}
		for(int e : numArr) {
			sum += e;
		}
		System.out.printf("%d %d",sum,sum/i);
	}

}
