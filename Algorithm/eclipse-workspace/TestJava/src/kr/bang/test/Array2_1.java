package kr.bang.test;

import java.util.Scanner;

public class Array2_1 {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		int[] arr = new int[26];
		int i = 0;
		char capital;
		while(true) {
			capital = s.next().charAt(0);
			if(capital < 'A' || capital > 'Z') break;
			else arr[(int)capital-65]++;
		}
		for(int e : arr) {
			if(e!=0) System.out.println((char)(i+65)+" : "+e);
			i++;
		}
	}

}
