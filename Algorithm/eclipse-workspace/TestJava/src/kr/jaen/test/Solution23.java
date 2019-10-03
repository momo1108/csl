package kr.jaen.test;

import java.io.FileInputStream;
import java.util.Scanner;

public class Solution23 {
	static long Answer;
	static int N, S;
	public static void hop(int[] p, int[][] lake, long index) {
		// System.out.println(index);
		// System.out.printf("%d %d %d\n",p[0],p[1],p[2]);
		if(p[0]==1) {
			for(int i=1; i<4; i++) {
				if(i*p[2]-1>=N) return;
				else {
					if(lake[i*p[2]-1][p[1]]==1) {
						Answer=index;
						return;
					} else {
						lake[i*p[2]-1][p[1]]++;
					}
				}
			}
		} else {
			for(int i=1; i<4; i++) {
				if(i*p[2]-1>=N) return;
				else {
					if(lake[p[1]][i*p[2]-1]==1) {
						Answer=index;
						return;
					} else {
						lake[p[1]][i*p[2]-1]++;
					}
				}
			}
		}
	}
	public static void main(String[] args) throws Exception {
		System.setIn(new FileInputStream("Solution23.txt"));
		Scanner sc=new Scanner(System.in);
		int T=sc.nextInt();//테스트 케이스 수  
		
		for(int test_case=1; test_case<=T; test_case++){
			N=sc.nextInt(); //배열의 크기 NxN
			int[][] lake=new int[N][N];
			
			S=sc.nextInt();//개구리 수
			int[][] P=new int[S][3];
			for(int i=0; i<S; i++){
				P[i][0]=sc.nextInt();//방향(1:북(상)->남(하),2:서(좌)->동(우))
				P[i][1]=sc.nextInt();//위치(0~N-1, 방향1=열(j)번호,방향2=행(i)번호
				P[i][2]=sc.nextInt();//힘크기(0~N-1)
			}
			//////////////////////////////
			//( 이 부분에 알고리즘 구현을 한다. )//
			//////////////////////////////
			Answer = 0;
			long index = 1;
			for(int[] e : P) {
				hop(e, lake, index);
				if(Answer!=0) break;
				index++;
			}
			
			
			System.out.println("#"+test_case+" "+Answer);
		}
	}

}
