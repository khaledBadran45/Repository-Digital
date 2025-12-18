import { Title ,Description} from "../base.model";

export interface LatestModel extends Title {
    tags:{en:string[],ar:string[]},
    path:string
}
//  {titleng:{en:string,ar:string},}