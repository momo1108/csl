package kr.bang.stepup;

import java.util.Scanner;

public class Dish {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		String dish = s.next();
		int answer = 10;
		for(int i=1; i<dish.length(); i++) {
			if(dish.charAt(i)!=dish.charAt(i-1)) answer += 10;
			else answer += 5;
		}
		System.out.println(answer);
	}
}
