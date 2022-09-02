import { Request, Response } from 'express';
import {formsDao} from '../dao/formsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let forms = new formsDao();

export class formsService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into formsService.ts: GpDelete')
     let  formsId = req.params.id;
     forms.GpDelete(formsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from formsService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into formsService.ts: GpSearch')
     let  formsData = req.query;
     forms.GpSearch(formsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from formsService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into formsService.ts: GpSearchForUpdate')
     let  formsData = req.body;
     forms.GpSearchForUpdate(formsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from formsService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into formsService.ts: GpUpdate')
     let  formsData = req.body;
     forms.GpUpdate(formsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from formsService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into formsService.ts: GpGetAllValues')
     
     forms.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from formsService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into formsService.ts: GpCreate')
     let  formsData = req.body;
     forms.GpCreate(formsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from formsService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}