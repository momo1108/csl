package kr.bang.test;

import java.util.Scanner;

public class Condition6 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int lastMonth;
		int price;
		Scanner s = new Scanner(System.in);
		lastMonth = s.nextInt();
		price = s.nextInt();
		int discountPrice;
		if(lastMonth>=7) {
			discountPrice = price * 85 / 100;
			System.out.println(discountPrice);
		} else if(lastMonth>=5) {
			discountPrice = price * 90 / 100;
			System.out.println(discountPrice);
		} else if(lastMonth>=3) {
			discountPrice = price * 95 / 100;
			System.out.println(discountPrice);
		} else System.out.println(price);
	}

}
