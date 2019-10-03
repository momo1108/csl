package kr.bang.test;

public class Array2_4 {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[][] arr = new int[3][5];
		arr[0][0] = 5;
		arr[0][1] = 8;
		arr[0][2] = 10;
		arr[0][3] = 6;
		arr[0][4] = 4;
		arr[1][0] = 11;
		arr[1][1] = 20;
		arr[1][2] = 1;
		arr[1][3] = 13;
		arr[1][4] = 2;
		arr[2][0] = 7;
		arr[2][1] = 9;
		arr[2][2] = 14;
		arr[2][3] = 22;
		arr[2][4] = 3;
		System.out.printf("%2d   %2d   %2d   %2d   %2d\n",arr[0][0],arr[0][1],arr[0][2],arr[0][3],arr[0][4]);
		System.out.printf("%2d   %2d   %2d   %2d   %2d\n",arr[1][0],arr[1][1],arr[1][2],arr[1][3],arr[1][4]);
		System.out.printf("%2d   %2d   %2d   %2d   %2d",arr[2][0],arr[2][1],arr[2][2],arr[2][3],arr[2][4]);
	}

}
