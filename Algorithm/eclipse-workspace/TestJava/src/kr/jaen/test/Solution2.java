package kr.jaen.test;

import java.io.FileInputStream;
import java.util.Arrays;
import java.util.Scanner;

public class Solution2 {
	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		System.setIn(new FileInputStream("Solution2.txt"));
		Scanner s = new Scanner(System.in);
		int T = s.nextInt();
		for(int t=0; t<T; t++) {
			//System.out.println("테스트케이스");
			int row = s.nextInt();
			int col = s.nextInt();
			//System.out.printf("%d, %d\n",row, col);
			// 0~행 길이, 0~열 길이 까지 위치따라 정렬된 구분선으로 칸을 나눠준다.
			int line = s.nextInt();
			//System.out.printf("%d\n",line);
			int[] xArr = new int[row];
			int x = 0;
			int[] yArr = new int[col];
			int y = 0;
			for(int a=0; a<line; a++){
				if(s.nextInt()==0) {
					yArr[y]=s.nextInt();
					y++;
				} else {
					xArr[x]=s.nextInt();
					x++;
				}
			}
			Arrays.sort(xArr);
			Arrays.sort(yArr);
			x = 0;
			y = 0;
			for(int i=0; i<row; i++) {
				if(i==row-1) {
					if(row-xArr[row-1]>x) x = row-xArr[row-1];
					break;
				}
				if(xArr[i+1]==0) continue;
				if(xArr[i+1]-xArr[i]>x) x = xArr[i+1]-xArr[i]; 
			}
			for(int i=0; i<col; i++) {
				if(i==col-1) {
					if(col-yArr[col-1]>y) y = col-yArr[col-1];
					break;
				}
				if(yArr[i+1]==0) continue;
				if(yArr[i+1]-yArr[i]>y) y = yArr[i+1]-yArr[i]; 				
			}
			System.out.println(x*y);
		}
	}

}
