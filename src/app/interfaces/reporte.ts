import { ReporteGeneral } from "./reporte-general";
import { ReporteTotal } from "./reporte-total";

export interface Reporte{
  reportGeneralGroupBies: ReporteGeneral[];
  reportTotals: ReporteTotal[];

}
