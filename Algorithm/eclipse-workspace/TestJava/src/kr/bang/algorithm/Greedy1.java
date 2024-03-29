package kr.bang.algorithm;

import java.io.FileInputStream;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class Greedy1 {
	public static void main(String[] args) throws Exception {
		System.setIn(new FileInputStream("Greedy1.txt"));
		// TODO Auto-generated method stub
		// 탐색해서 가장 먼저 소 들어있는 외양간~ 마지막 소 들어있는 외양간 구간을 체크해서 그 구간을 전부 true로 만든 배열과, 실제 소의 존재 배열을 생성한다.
		// 그 후에 외양간 사이의 거리가 먼 것 부터 정렬해서 판자를 나눠쓰는 부분으로 정해서 사이 구간을 false로 바꿔준다.
		// 횟수 제한은 판자의 최대 개수인 M개 -1인 M-1회이다.
		// 최대 공백구간은 탐색을 해서 최대값을 길이와 시작구간으로 저장한다.
		Scanner s = new Scanner(System.in);
		int M = s.nextInt(); // 판자의 개수
		int S = s.nextInt();
		int C = s.nextInt();
		int[] cow = new int[C];
		int[] gap = new int[C-1];
		for(int i=0; i<C; i++) {
			cow[i] = s.nextInt();
			if(i>0) {
				gap[i-1] = cow[i] - cow[i-1] - 1;
			}
		}
		int max = cow[C-1] - cow[0] + 1;
		Arrays.sort(gap);
		for(int i=C-2; i>0; i--) {
			if(gap[i]==0 || M<=1)break;
			max -= gap[i];
			M--;
		}
		System.out.println(max);
	}

}
