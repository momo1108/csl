package kr.bang.stepup;

import java.util.Scanner;

public class FindString {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		String str = s.next();
		String check;
		int koi = 0;
		int ioi = 0;
		for(int i=0; i<str.length()-2; i++) {
			check = str.substring(i, i+3);
			if(check.equals("KOI")) {
				koi++;
			}
			else if(check.equals("IOI")) {
				ioi++;
			}
		}
		System.out.printf("%d\n%d",koi,ioi);
	}
}
