const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';

// ✅ 입력 안전 파싱: 끝 개행/공백 제거 + 공백 여러 개 허용
const board = fs.readFileSync(filePath, 'utf8')
  .trim()
  .split('\n')
  .map(line => line.trim().split(/\s+/).map(Number));

function solution() {
  const N = board.length;

  function isValid(row, col, val) {
    // 행 검사
    for (let c = 0; c < N; c++) if (board[row][c] === val) return false;
    // 열 검사
    for (let r = 0; r < N; r++) if (board[r][col] === val) return false;
    // 3x3 박스 검사
    const sr = Math.floor(row / 3) * 3;
    const sc = Math.floor(col / 3) * 3;
    for (let r = sr; r < sr + 3; r++) {
      for (let c = sc; c < sc + 3; c++) {
        if (board[r][c] === val) return false;
      }
    }
    return true;
  }

  function bt() {
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        if (board[row][col] !== 0) continue;     // 빈 칸만 채움
        for (let k = 1; k <= 9; k++) {
          if (!isValid(row, col, k)) continue;
          board[row][col] = k;
          if (bt()) return true;                 // 다음 칸 진행
          board[row][col] = 0;                   // 실패 → 복구
        }
        return false;                             // 이 칸에서 1~9 모두 실패 → 백트래킹
      }
    }
    return true;                                  // 빈 칸 없음 = 완료
  }

  bt();
  // 요구 형식: 공백 구분 한 줄 출력
  console.log(board.map(row => row.join(' ')).join('\n'));
}

solution();