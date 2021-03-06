package kr.bang.stepup;

import java.util.Scanner;

public class Bingo {
	static int count = 0;
	static boolean bingo;
	static int Answer = 0;
	public static void find(int[][] tile) {
		Answer = 0;
		for(int i=0; i<5; i++) {
			bingo=true;
			for(int j=0; j<5; j++) {
				if(tile[i][j]!=0) {
					bingo=false;
					break;
				}
			}
			if(bingo) Answer++;
		}
		for(int i=0; i<5; i++) {
			bingo = true;
			for(int j=0; j<5; j++) {
				if(tile[j][i]!=0) {
					bingo = false;
					break;
				}
			}
			if(bingo) Answer++;
		}
		for(int i=0; i<5; i++) {
			bingo = true;
			if(tile[i][i]!=0) {
				bingo = false;
				break;
			}
			if(i==4 && bingo) Answer++;
		}
		for(int i=0; i<5; i++) {
			bingo = true;
			if(tile[i][4-i]!=0) {
				bingo = false;
				break;
			}
			if(i==4 && bingo) Answer++;
		}
	}
	public static void check(int[][] tile, int e) {
		for(int i=0; i<5; i++) {
			for(int j=0; j<5; j++) {
				if(tile[i][j]==e) tile[i][j]=0;
			}
		}
		count++;
//		System.out.println(count);
//		for(int i=0; i<5; i++) {
//			for(int j=0; j<5; j++) {
//				System.out.printf("%2d ",tile[i][j]);
//			}
//			System.out.println();
//		}
		if(Answer>=3) return;
		if(count>=12) find(tile);
	}
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int[][] tile = new int[5][5];
		int[][] call = new int[5][5];
		// 12번째부터 확인하는 함수 실행하자.
		for(int i=0; i<5; i++) {
			for(int j=0; j<5; j++) {
				tile[i][j] = s.nextInt();
			}
		}
		for(int i=0; i<5; i++) {
			for(int j=0; j<5; j++) {				
				call[i][j] = s.nextInt();
			}
		}
		for(int i=0; i<5; i++) {
			for(int j=0; j<5; j++) {
				if(Answer>=3) {
					System.out.println(count);
					return;
				}
				check(tile, call[i][j]);
			}
		}
	}
}