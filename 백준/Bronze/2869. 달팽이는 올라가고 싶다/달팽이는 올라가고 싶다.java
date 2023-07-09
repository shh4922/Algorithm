import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
  public static void main(String[] args) throws Exception {

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));// 입력
    StringTokenizer st = new StringTokenizer(br.readLine());
    int up = Integer.parseInt(st.nextToken());
    int down = Integer.parseInt(st.nextToken());
    int hight = Integer.parseInt(st.nextToken());
    
    int onedayup = up - down;
    int n = (hight - up) / onedayup;
    n += 1;// 마지막날 카운트
    if ((hight - up) % onedayup != 0) {
      n++;
    }
    System.out.println(n);
  }
}