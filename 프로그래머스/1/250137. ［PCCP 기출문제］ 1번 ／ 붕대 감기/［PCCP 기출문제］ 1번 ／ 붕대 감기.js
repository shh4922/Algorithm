function solution(bandage, health, attacks) {
    const [seconds, heal, plusHeal] = bandage;
    let maxHp = health;
    let hp = health;
    let prevAttackTime = attacks[0][0]; // 이전 공격 시간
    const deathHp = 0;

    for (const [time, dmg] of attacks) {
        const timeDiff = time - prevAttackTime;

        // 최대 체력보다 낮을 경우 회복
        if (hp < maxHp) {
            // 회복
            hp += heal * (timeDiff - 1);
            const plusHealCount = Math.floor((timeDiff - 1) / seconds);

            // 추가 회복 시간에 도달할 경우 추가 회복
            if (plusHealCount > 0) {
                hp += plusHeal * plusHealCount;
            }
        }

        // 힐이 최대 체력을 넘어가면 최대 체력으로 고정
        if (hp > maxHp) {
            hp = maxHp;
        }

        // 데미지 적용
        hp -= dmg;

        // 체력이 0 이하일 경우 즉시 종료
        if (hp <= deathHp) {
            return -1;
        }

        prevAttackTime = time; // 이전 공격 시간 업데이트
    }

    return hp;
}