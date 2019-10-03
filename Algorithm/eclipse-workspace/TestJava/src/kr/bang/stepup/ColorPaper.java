package kr.bang.stepup;

import java.util.Scanner;

public class ColorPaper {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int N = 0;
		int X, Y;
		int count = 0;
		int[][] whitePaper = new int[100][100];
		N = s.nextInt();
		for(int test=0; test<N; test++) {
			X = s.nextInt();
			Y = s.nextInt();
			for(int i=0; i<10; i++) {
				for(int j=0; j<10; j++) {
					if(whitePaper[X+i][Y+j]>0) continue;
					whitePaper[X+i][Y+j]++;
					count++;
				}
			}
		}
		System.out.println(count);
	}
}
