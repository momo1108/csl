package kr.bang.stepup;

import java.util.Scanner;

// 정을은 제출 클래스 이름을 Main으로 해야한다.
// 작성시만 뒤에 번호를 붙이고 제출시에 지워서 Main만 제출하자.
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s=new Scanner(System.in);
		int su=s.nextInt();
		System.out.println(su);
		if(su<0) {
			System.out.println("minus");
		}
	}

}
