import { Request, Response } from 'express';
import { formsService } from '../service/formsService';
import { CustomLogger } from '../config/Logger'
let forms = new formsService();

export class formsController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
forms.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into formsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from formsController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
forms.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into formsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from formsController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
forms.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into formsController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from formsController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
forms.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into formsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from formsController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
forms.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into formsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from formsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
forms.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into formsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from formsController.ts: GpCreate');
    })}


}