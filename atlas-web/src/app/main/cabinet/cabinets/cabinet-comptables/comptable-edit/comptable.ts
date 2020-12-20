import {FuseUtils} from "../../../../../../@fuse/utils";
import {Cabinet} from "../../cabinet/cabinet";

export class Comptable {
    id: number;
    firstName: string;
    lastName: string;
    matricule: string;
    actived: boolean;
    cabinet: Cabinet;

    constructor(comptable?) {
        comptable = comptable || {};
        this.id = comptable.id || null;
        this.firstName = comptable.firstName || '';
        this.lastName = comptable.lastName || '';
        this.matricule = comptable.matricule || '';
        this.actived = comptable.actived || false;
        this.cabinet = comptable.cabinet || null;
    }
}
