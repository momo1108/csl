package kr.bang.test;

import java.util.Scanner;

public class Array1_4 {
	public class Character {
		
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		int[] arr = new int[5];
		int sum = 0;
		for(int i=0; i<arr.length; i++) {
			arr[i] = s.nextInt();
		}
		for(int i=0; i<arr.length; i+=2) {
			sum += arr[i];
		}
		System.out.println(sum);
	}

}
