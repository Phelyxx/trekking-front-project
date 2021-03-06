import { Outing } from './outing';
import { Activity } from '../activity/activity';
import { ComplementaryInformation } from '../complementaryinformation/complementaryinformation';
import { Guide } from '../guide/guide';
import { Route } from '../route/route';

export class OutingDetail extends Outing{
  activities: Array<Activity>;
  complementaryInformation: ComplementaryInformation;
  guides: Array<Guide>;
  routes: Array<Route>;

  constructor(id: number,
              name: string,
              date: any,
              place: string,
              participationCost: number){
    super(id, name, date, place, participationCost);
  }



}
