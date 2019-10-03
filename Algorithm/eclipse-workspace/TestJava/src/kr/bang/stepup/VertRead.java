package kr.bang.stepup;

import java.util.Scanner;

public class VertRead {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		String[] str = new String[5];
		for(int i=0; i<5; i++) {
			str[i] = s.next();
		}
		for(int i=0; i<=15; i++) {
			for(String e : str) {
				if(e.length()<i+1) continue;
				else System.out.print(e.charAt(i));
			}
		}
	}
}
