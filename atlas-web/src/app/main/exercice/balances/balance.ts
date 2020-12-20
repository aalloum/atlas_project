
export class Balance {

    id: number;
    compte: number;
    intituleCompte: string;
    soldeInitialDebit: number;
    soldeInitialCredit: number;
    mouvementDebit: number;
    mouvementCredit: number;
    soldeDebit: number;
    soldeCredit: number;

    constructor(balance?) {
        balance = balance || {};
        this.id = balance.id || null;
        this.compte = balance.compte || 0;
        this.intituleCompte = balance.intituleCompte || 0;
        this.soldeInitialDebit = balance.soldeInitialDebit || 0;
        this.soldeInitialCredit = balance.soldeInitialCredit || 0;
        this.mouvementDebit = balance.mouvementDebit || 0;
        this.mouvementCredit = balance.mouvementCredit || 0;
        this.soldeDebit = balance.soldeDebit || 0;
        this.soldeCredit = balance.soldeCredit || 0;
    }
}
