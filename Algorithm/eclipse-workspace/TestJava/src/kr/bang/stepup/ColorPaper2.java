package kr.bang.stepup;

import java.util.Scanner;

public class ColorPaper2 {
	static int Answer = 0;
	public static void check(int[][] arr, int x, int y) {
		if(x==0) {
			Answer++;
		}else if(arr[x-1][y]==0) {
			Answer++;
		}
		if(x==99) {
			Answer++;
		}else if(arr[x+1][y]==0) {
			Answer++;
		}
		if(y==0) {
			Answer++;
		}else if(arr[x][y-1]==0) {
			Answer++;
		}
		if(y==99) {
			Answer++;
		}else if(arr[x][y+1]==0) {
			Answer++;
		}
	}
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int N = 0;
		int X, Y;
		int[][] whitePaper = new int[100][100];
		N = s.nextInt();
		for(int test=0; test<N; test++) {
			X = s.nextInt();
			Y = s.nextInt();
			for(int i=0; i<10; i++) {
				for(int j=0; j<10; j++) {
					if(whitePaper[X+i][Y+j]>0) continue;
					whitePaper[X+i][Y+j]++;
				}
			}
		}
		for(int i=0; i<100; i++) {
			for(int j=0; j<100; j++) {
				if(whitePaper[i][j]>0) check(whitePaper, i, j);
			}
		}
		System.out.println(Answer);
	}
}
