package kr.bang.algorithm;

import java.io.FileInputStream;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class Greedy1 {
	public static void main(String[] args) throws Exception {
		System.setIn(new FileInputStream("Greedy1.txt"));
		// TODO Auto-generated method stub
		// Ž���ؼ� ���� ���� �� ����ִ� �ܾ簣~ ������ �� ����ִ� �ܾ簣 ������ üũ�ؼ� �� ������ ���� true�� ���� �迭��, ���� ���� ���� �迭�� �����Ѵ�.
		// �� �Ŀ� �ܾ簣 ������ �Ÿ��� �� �� ���� �����ؼ� ���ڸ� �������� �κ����� ���ؼ� ���� ������ false�� �ٲ��ش�.
		// Ƚ�� ������ ������ �ִ� ������ M�� -1�� M-1ȸ�̴�.
		// �ִ� ���鱸���� Ž���� �ؼ� �ִ밪�� ���̿� ���۱������� �����Ѵ�.
		Scanner s = new Scanner(System.in);
		int M = s.nextInt(); // ������ ����
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