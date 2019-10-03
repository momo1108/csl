package kr.bang.test;

public class Array2_7 {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[][] arr = new int[5][5];
		for(int i=0; i<5; i++) {
			if(i==0) {
				for(int j=0; j<5; j++) {
					arr[i][j] = 1;
				}
			}
			else {
				for(int j=0; j<5; j++) {
					if(j==0) arr[i][j] = 1;
					else arr[i][j] = arr[i-1][j] + arr[i][j-1];
				}
			}
		}
		for(int x=0; x<arr.length; x++) {
			for(int y : arr[x]) {
				System.out.printf("%d ",y);
			}
			System.out.println();
		}
		
	}
}
