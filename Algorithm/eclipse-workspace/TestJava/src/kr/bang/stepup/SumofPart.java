package kr.bang.stepup;

import java.util.Scanner;
//재귀함수
//-인 숫자를 만난다.
//뒤의 음수가 아닌 수들을 더해서 값을 더하고 그 값이 0보다 크면 합쳐서 return;
//시작 순서가 음수면 pass


public class SumofPart {
	public static void calculsum(int i) {
		while(true) {
			
			i++;
		}
	}
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int N = s.nextInt();
		int[] arr = new int[N];
		int sum, answer;
		answer = -101;
		for(int i=0; i<N; i++) {
			arr[i] = s.nextInt();
		}
		for(int i=0; i<N; i++) {
			calculsum(i);
		}
//		for(int e : arr) {
//			if(e > answer) answer = e;
//		}
//		for(int i=1; i<N; i++) {
//			for(int j=0; j<=N; j++) {
//				if(j+i>=N) break;
//				else {
//					sum = 0;
//					for(int k=j; k<=j+i; k++) {
//						sum += arr[k]; 
//					}
//					if(sum > answer) answer = sum;
//				}
//			}
//		}
//		System.out.println(answer);
	}
}
