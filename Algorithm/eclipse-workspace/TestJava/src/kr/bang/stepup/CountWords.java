package kr.bang.stepup;

import java.util.Arrays;
import java.util.Scanner;

public class CountWords {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		String stc;
		int count;
		while(true) {
			count = 1;
			stc = s.nextLine();
			if(stc.equals("END")) break;
			String[] arr = stc.split(" ");
			Arrays.sort(arr);
			for(int i=0; i<arr.length; i++) {
				if(i==0)System.out.print(arr[0]+" : ");
				if(i==arr.length-1) {
					System.out.println(count);
					break;
				}
				if(arr[i].equals(arr[i+1])) {
					count++;
				} else {
					System.out.println(count);
					System.out.print(arr[i+1]+" : ");
					count = 1;
				}
			}
		}
	}
}
