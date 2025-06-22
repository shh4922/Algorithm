function solution(bandage, health, attacks) {
    const [comboMax, heal, plusHeal] = bandage;
    let hp = health;
    let combo = 0;
    let attackCnt = 0
    
    const lastAttack = attacks[attacks.length-1][0]
    
    // 내채력이 max보다 작으면 일단 힐 함.
    // 그이후에 공격당하면 힐한거 취소되고, 콤보도 초기화됨
    // 추가힐은 콤보가 max가 되면 추가힐 하고, 초기화
    for(let i=1; i<=lastAttack; i++) {
        hp += heal
        combo++
        
        if(attacks[attackCnt][0] === i) {
            hp -= heal
            hp -= attacks[attackCnt][1]
            combo = 0
            attackCnt++
        }
        if(hp <=0) {
            return -1
        }
        
        if(combo === comboMax) {
            hp += plusHeal
            combo = 0
        }
        
        if(hp > health) {
            hp = health
        }    
    }
    
    return hp
}